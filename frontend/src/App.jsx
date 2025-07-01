// import { AnimatePresence, motion } from 'framer-motion';
// import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const API_URL = 'http://localhost:5000/api/tasks';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTitle, setNewTitle] = useState('');

//   const fetchTasks = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setTasks(data);
//   };

//   const addTask = async () => {
//     if (!newTitle.trim()) return;
//     const res = await fetch(API_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: newTitle }),
//     });
//     const newTask = await res.json();
//     setTasks([...tasks, newTask]);
//     setNewTitle('');
//   };

//   const toggleComplete = async (task) => {
//     const res = await fetch(`${API_URL}/${task._id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ completed: !task.completed }),
//     });
//     const updated = await res.json();
//     setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
//   };

//   const deleteTask = async (id) => {
//     await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
//     setTasks(tasks.filter(t => t._id !== id));
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
//       >
//         <h1 className="text-4xl font-bold text-center text-purple-700 mb-8 drop-shadow-md">📝 My Stylish Todo List</h1>

//         <div className="flex items-center gap-3 mb-6">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={e => setNewTitle(e.target.value)}
//             placeholder="What do you want to do?"
//             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
//           />
//           <button
//             onClick={addTask}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
//           >
//             <PlusCircle size={22} /> Add
//           </button>
//         </div>

//         <ul className="space-y-4">
//           <AnimatePresence>
//             {tasks.map(task => (
//               <motion.li
//                 key={task._id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex justify-between items-center bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-3 flex-grow">
//                   <button onClick={() => toggleComplete(task)}>
//                     {task.completed ? (
//                       <CheckCircle className="text-green-500 fill-green-500" size={22} />
//                     ) : (
//                       <Circle className="text-gray-400" size={22} />
//                     )}
//                   </button>
//                   <span
//                     onClick={() => toggleComplete(task)}
//                     className={`text-lg cursor-pointer ${
//                       task.completed ? 'line-through text-gray-400' : 'text-gray-800'
//                     }`}
//                   >
//                     {task.title}
//                   </span>
//                 </div>
//                 <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={22} />
//                 </button>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

// export default App;


// import { AnimatePresence, motion } from 'framer-motion';
// import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import Login from './Login';
// import Signup from './Signup';

// const API_URL = 'http://localhost:5000/api/tasks';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [token, setToken] = useState(null);
//   const [user, setUser] = useState(null);
//   const [showSignup, setShowSignup] = useState(false);

//   const fetchTasks = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setTasks(data);
//   };

//   const addTask = async () => {
//     if (!newTitle.trim()) return;
//     const res = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ title: newTitle }),
//     });
//     const newTask = await res.json();
//     setTasks([...tasks, newTask]);
//     setNewTitle('');
//   };

//   const toggleComplete = async (task) => {
//     const res = await fetch(`${API_URL}/${task._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ completed: !task.completed }),
//     });
//     const updated = await res.json();
//     setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
//   };

//   const deleteTask = async (id) => {
//     await fetch(`${API_URL}/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setTasks(tasks.filter(t => t._id !== id));
//   };

//   useEffect(() => {
//     if (token) fetchTasks();
//   }, [token]);

//   const handleLogout = () => {
//     setUser(null);
//     setToken(null);
//   };

//   const handleAuthSuccess = (token, user) => {
//     setToken(token);
//     setUser(user);
//   };

//   // Render auth form if not logged in
//   if (!token) {
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-gray-100">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md"
//         >
//           <div className="mb-5">
//             <button
//               onClick={() => setShowSignup(false)}
//               className={`mr-3 px-4 py-2 rounded ${!showSignup ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setShowSignup(true)}
//               className={`px-4 py-2 rounded ${showSignup ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
//             >
//               Signup
//             </button>
//           </div>
//           {showSignup ? <Signup onSignup={handleAuthSuccess} /> : <Login onLogin={handleAuthSuccess} />}
//         </motion.div>
//       </div>
//     );
//   }

//   // Main todo app
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md">📝 My Stylish Todo List</h1>
//           <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">Logout</button>
//         </div>

//         <div className="flex items-center gap-3 mb-6">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={e => setNewTitle(e.target.value)}
//             placeholder="What do you want to do?"
//             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
//           />
//           <button
//             onClick={addTask}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
//           >
//             <PlusCircle size={22} /> Add
//           </button>
//         </div>

//         <ul className="space-y-4">
//           <AnimatePresence>
//             {tasks.map(task => (
//               <motion.li
//                 key={task._id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex justify-between items-center bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-3 flex-grow">
//                   <button onClick={() => toggleComplete(task)}>
//                     {task.completed ? (
//                       <CheckCircle className="text-green-500 fill-green-500" size={22} />
//                     ) : (
//                       <Circle className="text-gray-400" size={22} />
//                     )}
//                   </button>
//                   <span
//                     onClick={() => toggleComplete(task)}
//                     className={`text-lg cursor-pointer ${
//                       task.completed ? 'line-through text-gray-400' : 'text-gray-800'
//                     }`}
//                   >
//                     {task.title}
//                   </span>
//                 </div>
//                 <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={22} />
//                 </button>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import TodoApp from './TodoApp'; // 📝 The old Todo UI code placed in TodoApp.jsx

// function App() {
//   const [token, setToken] = useState(null);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Called after successful login or signup
//   const handleAuthSuccess = (token, user) => {
//     setToken(token);
//     setUser(user);
//     navigate('/todos'); // ✅ Redirect to todo list
//   };

//   const handleLogout = () => {
//     setToken(null);
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <Routes>
//       {/* 🔐 Public Routes */}
//       <Route
//         path="/login"
//         element={<Login onLogin={handleAuthSuccess} />}
//       />
//       <Route
//         path="/signup"
//         element={<Signup onSignup={handleAuthSuccess} />}
//       />

//       {/* 🔐 Protected Todo Page */}
//       <Route
//         path="/todos"
//         element={
//           token ? (
//             <TodoApp token={token} onLogout={handleLogout} />
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />

//       {/* 🌐 Redirect base path to login */}
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// }

// export default App;



import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import TodoApp from './TodoApp'; // Your Todo list UI logic

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Called after login/signup
  const handleAuthSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    navigate('/todos'); // 🔁 redirect
  };

  // ✅ Logout logic
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route
        path="/login"
        element={<Login onLogin={handleAuthSuccess} />}
      />
      <Route
        path="/signup"
        element={<Signup onSignup={handleAuthSuccess} />}
      />

      {/* 🔒 Protected Route */}
      <Route
        path="/todos"
        element={
          token ? (
            <TodoApp token={token} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* 🌐 Default to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
