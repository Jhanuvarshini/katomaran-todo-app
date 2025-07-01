
import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/tasks';

export default function TodoDashboard({ token, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const fetchTasks = async () => {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!newTitle.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: newTitle, dueDate: newDueDate }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDueDate('');
  };

  const toggleComplete = async (task) => {
    const res = await fetch(`${API_URL}/${task._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ completed: !task.completed }),
    });
    const updated = await res.json();
    setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const getDueLabel = (task) => {
    if (!task.dueDate) return null;
    const due = new Date(task.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const isToday = due.toDateString() === today.toDateString();
    const isTomorrow = due.toDateString() === tomorrow.toDateString();
    const isOverdue = due < today && !task.completed;

    if (isOverdue) {
      return <span className="text-red-600">Missed deadline</span>;
    }
    if (isToday) {
      return <span className="text-orange-600">Due today</span>;
    }
    if (isTomorrow) {
      return <span className="text-yellow-500">Due tomorrow</span>;
    }
    return <span className="text-gray-400">Due: {due.toLocaleDateString()}</span>;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 via-purple-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-purple-800">🎯 Task Dashboard</h1>
            <p className="text-sm text-gray-500">Stay on top of your daily goals</p>
          </div>
          <button onClick={onLogout} className="text-red-500 hover:underline">
            Logout
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Task title"
                className="flex-grow border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                onClick={addTask}
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
              >
                <PlusCircle size={20} className="inline mr-1" /> Add
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-3">Summary</h2>
            <ul className="space-y-2 text-gray-600">
              <li>🟢 Completed: {completedTasks.length}</li>
              <li>🕓 Pending: {pendingTasks.length}</li>
              <li>📅 Total: {tasks.length}</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">⏳ Pending Tasks</h2>
            <ul className="space-y-4">
              {pendingTasks.map((task) => (
                <li
                  key={task._id}
                  className="border border-purple-200 rounded-xl p-4 flex justify-between items-start hover:shadow"
                >
                  <div className="flex items-start gap-3">
                    <button onClick={() => toggleComplete(task)}>
                      <Circle className="text-gray-400 hover:text-purple-600 mt-1" size={22} />
                    </button>
                    <div>
                      <div className="font-medium text-gray-800 text-lg">{task.title}</div>
                      <div className="text-sm mt-1">{getDueLabel(task)}</div>
                    </div>
                  </div>
                  <button onClick={() => deleteTask(task._id)} className="text-red-400 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">✅ Completed Tasks</h2>
            <ul className="space-y-4">
              {completedTasks.map((task) => (
                <li
                  key={task._id}
                  className="border border-green-200 rounded-xl p-4 flex justify-between items-start hover:shadow"
                >
                  <div className="flex items-start gap-3">
                    <button onClick={() => toggleComplete(task)}>
                      <CheckCircle
                        className="text-white bg-green-500 rounded-full p-1 shadow"
                        size={22}
                      />
                    </button>
                    <div>
                      <div className="line-through text-gray-500">{task.title}</div>
                      <div className="text-sm text-gray-400 mt-1">
                        Completed: {new Date(task.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => deleteTask(task._id)} className="text-red-400 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
