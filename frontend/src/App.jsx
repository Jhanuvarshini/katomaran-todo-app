import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!newTitle.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setNewTitle('');
  };

  const toggleComplete = async (task) => {
    const res = await fetch(`${API_URL}/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed }),
    });
    const updated = await res.json();
    setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(t => t._id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
      >
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8 drop-shadow-md">📝 My Stylish Todo List</h1>

        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="What do you want to do?"
            className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
          >
            <PlusCircle size={22} /> Add
          </button>
        </div>

        <ul className="space-y-4">
          <AnimatePresence>
            {tasks.map(task => (
              <motion.li
                key={task._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 flex-grow">
                  <button onClick={() => toggleComplete(task)}>
                    {task.completed ? (
                      <CheckCircle className="text-green-500 fill-green-500" size={22} />
                    ) : (
                      <Circle className="text-gray-400" size={22} />
                    )}
                  </button>
                  <span
                    onClick={() => toggleComplete(task)}
                    className={`text-lg cursor-pointer ${
                      task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={22} />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    </div>
  );
}

export default App;
