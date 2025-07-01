// // // import { AnimatePresence, motion } from 'framer-motion';
// // // import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// // // import { useEffect, useState } from 'react';

// // // const API_URL = 'http://localhost:5000/api/tasks';

// // // export default function TodoApp({ token, onLogout }) {
// // //   const [tasks, setTasks] = useState([]);
// // //   const [newTitle, setNewTitle] = useState('');

// // //   const fetchTasks = async () => {
// // //     const res = await fetch(API_URL, {
// // //       headers: { Authorization: `Bearer ${token}` }
// // //     });
// // //     const data = await res.json();
// // //     setTasks(data);
// // //   };

// // //   const addTask = async () => {
// // //     if (!newTitle.trim()) return;
// // //     const res = await fetch(API_URL, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //       body: JSON.stringify({ title: newTitle }),
// // //     });
// // //     const newTask = await res.json();
// // //     setTasks([...tasks, newTask]);
// // //     setNewTitle('');
// // //   };

// // //   const toggleComplete = async (task) => {
// // //     const res = await fetch(`${API_URL}/${task._id}`, {
// // //       method: 'PUT',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //       body: JSON.stringify({ completed: !task.completed }),
// // //     });
// // //     const updated = await res.json();
// // //     setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
// // //   };

// // //   const deleteTask = async (id) => {
// // //     await fetch(`${API_URL}/${id}`, {
// // //       method: 'DELETE',
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     });
// // //     setTasks(tasks.filter(t => t._id !== id));
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-center px-4 py-10">
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.95 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
// // //       >
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md">📝 My Stylish Todo List</h1>
// // //           <button onClick={onLogout} className="text-sm text-red-500 hover:underline">Logout</button>
// // //         </div>

// // //         <div className="flex items-center gap-3 mb-6">
// // //           <input
// // //             type="text"
// // //             value={newTitle}
// // //             onChange={e => setNewTitle(e.target.value)}
// // //             placeholder="What do you want to do?"
// // //             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
// // //           />
// // //           <button
// // //             onClick={addTask}
// // //             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
// // //           >
// // //             <PlusCircle size={22} /> Add
// // //           </button>
// // //         </div>

// // //         <ul className="space-y-4">
// // //           <AnimatePresence>
// // //             {tasks.map(task => (
// // //               <motion.li
// // //                 key={task._id}
// // //                 initial={{ opacity: 0, scale: 0.95 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 exit={{ opacity: 0, scale: 0.9 }}
// // //                 transition={{ duration: 0.2 }}
// // //                 className="flex justify-between items-center bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
// // //               >
// // //                 <div className="flex items-center gap-3 flex-grow">
// // //                   <button onClick={() => toggleComplete(task)}>
// // //                     {task.completed ? (
// // //                       <CheckCircle className="text-green-500 fill-green-500" size={22} />
// // //                     ) : (
// // //                       <Circle className="text-gray-400" size={22} />
// // //                     )}
// // //                   </button>
// // //                   <span
// // //                     onClick={() => toggleComplete(task)}
// // //                     className={`text-lg cursor-pointer ${
// // //                       task.completed ? 'line-through text-gray-400' : 'text-gray-800'
// // //                     }`}
// // //                   >
// // //                     {task.title}
// // //                   </span>
// // //                 </div>
// // //                 <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
// // //                   <Trash2 size={22} />
// // //                 </button>
// // //               </motion.li>
// // //             ))}
// // //           </AnimatePresence>
// // //         </ul>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }


// // // import { AnimatePresence, motion } from 'framer-motion';
// // // import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// // // import { useEffect, useState } from 'react';

// // // const API_URL = 'http://localhost:5000/api/tasks';

// // // export default function TodoApp({ token, onLogout }) {
// // //   const [tasks, setTasks] = useState([]);
// // //   const [newTitle, setNewTitle] = useState('');
// // //   const [dueDate, setDueDate] = useState('');

// // //   const fetchTasks = async () => {
// // //     const res = await fetch(API_URL, {
// // //       headers: { Authorization: `Bearer ${token}` }
// // //     });
// // //     const data = await res.json();
// // //     setTasks(data);
// // //   };

// // //   const addTask = async () => {
// // //     if (!newTitle.trim()) return;
// // //     const res = await fetch(API_URL, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //       body: JSON.stringify({
// // //         title: newTitle,
// // //         dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
// // //       }),
// // //     });
// // //     const newTask = await res.json();
// // //     setTasks([...tasks, newTask]);
// // //     setNewTitle('');
// // //     setDueDate('');
// // //   };

// // //   const toggleComplete = async (task) => {
// // //     const res = await fetch(`${API_URL}/${task._id}`, {
// // //       method: 'PUT',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //       body: JSON.stringify({ completed: !task.completed }),
// // //     });
// // //     const updated = await res.json();
// // //     setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
// // //   };

// // //   const deleteTask = async (id) => {
// // //     await fetch(`${API_URL}/${id}`, {
// // //       method: 'DELETE',
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     });
// // //     setTasks(tasks.filter(t => t._id !== id));
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-center px-4 py-10">
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.95 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
// // //       >
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md">📝 My Stylish Todo List</h1>
// // //           <button onClick={onLogout} className="text-sm text-red-500 hover:underline">Logout</button>
// // //         </div>

// // //         <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
// // //           <input
// // //             type="text"
// // //             value={newTitle}
// // //             onChange={e => setNewTitle(e.target.value)}
// // //             placeholder="What do you want to do?"
// // //             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
// // //           />
// // //           <input
// // //             type="date"
// // //             value={dueDate}
// // //             onChange={e => setDueDate(e.target.value)}
// // //             className="border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
// // //           />
// // //           <button
// // //             onClick={addTask}
// // //             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
// // //           >
// // //             <PlusCircle size={22} /> Add
// // //           </button>
// // //         </div>

// // //         <ul className="space-y-4">
// // //           <AnimatePresence>
// // //             {tasks.map(task => (
// // //               <motion.li
// // //                 key={task._id}
// // //                 initial={{ opacity: 0, scale: 0.95 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 exit={{ opacity: 0, scale: 0.9 }}
// // //                 transition={{ duration: 0.2 }}
// // //                 className="flex justify-between items-center bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
// // //               >
// // //                 <div className="flex items-start gap-3 flex-grow flex-col md:flex-row md:items-center">
// // //                   <button onClick={() => toggleComplete(task)}>
// // //                     {task.completed ? (
// // //                       <CheckCircle className="text-green-500 fill-green-500" size={22} />
// // //                     ) : (
// // //                       <Circle className="text-gray-400" size={22} />
// // //                     )}
// // //                   </button>
// // //                   <div>
// // //                     <span
// // //                       onClick={() => toggleComplete(task)}
// // //                       className={`text-lg cursor-pointer ${
// // //                         task.completed ? 'line-through text-gray-400' : 'text-gray-800'
// // //                       }`}
// // //                     >
// // //                       {task.title}
// // //                     </span>
// // //                     {task.dueDate && (
// // //                       <div className="text-sm text-gray-500">
// // //                         Due: {new Date(task.dueDate).toLocaleDateString()}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //                 <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
// // //                   <Trash2 size={22} />
// // //                 </button>
// // //               </motion.li>
// // //             ))}
// // //           </AnimatePresence>
// // //         </ul>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // import { AnimatePresence, motion } from 'framer-motion';
// // import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// // import { useEffect, useState } from 'react';

// // const API_URL = 'http://localhost:5000/api/tasks';

// // export default function TodoApp({ token, onLogout }) {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTitle, setNewTitle] = useState('');
// //   const [dueDate, setDueDate] = useState('');

// //   const fetchTasks = async () => {
// //     const res = await fetch(API_URL, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     const data = await res.json();
// //     setTasks(data);
// //   };

// //   const addTask = async () => {
// //     if (!newTitle.trim()) return;
// //     const res = await fetch(API_URL, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({
// //         title: newTitle,
// //         dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
// //       }),
// //     });
// //     const newTask = await res.json();
// //     setTasks([...tasks, newTask]);
// //     setNewTitle('');
// //     setDueDate('');
// //   };

// //   const toggleComplete = async (task) => {
// //     const res = await fetch(`${API_URL}/${task._id}`, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({ completed: !task.completed }),
// //     });
// //     const updated = await res.json();
// //     setTasks(tasks.map(t => (t._id === updated._id ? updated : t)));
// //   };

// //   const deleteTask = async (id) => {
// //     await fetch(`${API_URL}/${id}`, {
// //       method: 'DELETE',
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     setTasks(tasks.filter(t => t._id !== id));
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const getDueLabel = (dateString) => {
// //     if (!dateString) return null;
// //     const due = new Date(dateString);
// //     const today = new Date();
// //     const tomorrow = new Date(today);
// //     tomorrow.setDate(today.getDate() + 1);

// //     const isToday =
// //       due.getDate() === today.getDate() &&
// //       due.getMonth() === today.getMonth() &&
// //       due.getFullYear() === today.getFullYear();

// //     const isTomorrow =
// //       due.getDate() === tomorrow.getDate() &&
// //       due.getMonth() === tomorrow.getMonth() &&
// //       due.getFullYear() === tomorrow.getFullYear();

// //     if (isToday) return <span className="text-red-600 font-semibold">Last date to complete</span>;
// //     if (isTomorrow) return <span className="text-orange-500 font-semibold">Tomorrow is the last date</span>;

// //     return (
// //       <span className="text-sm text-gray-500">
// //         Due: {due.toLocaleDateString()}
// //       </span>
// //     );
// //   };

// //   const completedTasks = tasks.filter(t => t.completed);
// //   const pendingTasks = tasks.filter(t => !t.completed);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center px-4 py-10">
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
// //       >
// //         <div className="flex justify-between items-center mb-8">
// //           <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md">📝 My Todo Dashboard</h1>
// //           <button onClick={onLogout} className="text-sm text-red-500 hover:underline">Logout</button>
// //         </div>

// //         {/* Create Task Form */}
// //         <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-10">
// //           <input
// //             type="text"
// //             value={newTitle}
// //             onChange={e => setNewTitle(e.target.value)}
// //             placeholder="Enter task title"
// //             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none"
// //           />
// //           <input
// //             type="date"
// //             value={dueDate}
// //             onChange={e => setDueDate(e.target.value)}
// //             className="border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none"
// //           />
// //           <button
// //             onClick={addTask}
// //             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2"
// //           >
// //             <PlusCircle size={22} /> Add
// //           </button>
// //         </div>

// //         {/* Not Completed */}
// //         <div className="mb-8">
// //           <h2 className="text-2xl font-semibold text-gray-700 mb-4">📌 Pending Tasks</h2>
// //           <ul className="space-y-4">
// //             <AnimatePresence>
// //               {pendingTasks.map(task => (
// //                 <motion.li
// //                   key={task._id}
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0, scale: 0.9 }}
// //                   transition={{ duration: 0.2 }}
// //                   className="flex justify-between items-start bg-purple-100/50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm"
// //                 >
// //                   <div className="flex gap-3 flex-col md:flex-row md:items-center">
// //                     <button onClick={() => toggleComplete(task)}>
// //                       <Circle className="text-gray-400" size={22} />
// //                     </button>
// //                     <div>
// //                       <div className="text-lg font-medium text-gray-800 cursor-pointer" onClick={() => toggleComplete(task)}>
// //                         {task.title}
// //                       </div>
// //                       {getDueLabel(task.dueDate)}
// //                     </div>
// //                   </div>
// //                   <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700 mt-1">
// //                     <Trash2 size={22} />
// //                   </button>
// //                 </motion.li>
// //               ))}
// //             </AnimatePresence>
// //           </ul>
// //         </div>

// //         {/* Completed */}
// //         <div>
// //           <h2 className="text-2xl font-semibold text-gray-700 mb-4">✅ Completed Tasks</h2>
// //           <ul className="space-y-4">
// //             <AnimatePresence>
// //               {completedTasks.map(task => (
// //                 <motion.li
// //                   key={task._id}
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0, scale: 0.9 }}
// //                   transition={{ duration: 0.2 }}
// //                   className="flex justify-between items-start bg-green-50 border border-green-200 px-5 py-4 rounded-2xl shadow-sm"
// //                 >
// //                   <div className="flex gap-3 flex-col md:flex-row md:items-center">
// //                     <button onClick={() => toggleComplete(task)}>
// //                       <CheckCircle className="text-green-500 fill-green-500" size={22} />
// //                     </button>
// //                     <div>
// //                       <div className="text-lg text-gray-500 line-through">{task.title}</div>
// //                       {getDueLabel(task.dueDate)}
// //                     </div>
// //                   </div>
// //                   <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700 mt-1">
// //                     <Trash2 size={22} />
// //                   </button>
// //                 </motion.li>
// //               ))}
// //             </AnimatePresence>
// //           </ul>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// import { AnimatePresence, motion } from 'framer-motion';
// import { CheckCircle, Circle, PlusCircle, Trash2 } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const API_URL = 'http://localhost:5000/api/tasks';

// export default function TodoApp({ token, onLogout }) {
//   const [tasks, setTasks] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDueDate, setNewDueDate] = useState('');

//   const fetchTasks = async () => {
//     const res = await fetch(API_URL, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
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
//       body: JSON.stringify({ title: newTitle, dueDate: newDueDate }),
//     });
//     const newTask = await res.json();
//     setTasks([...tasks, newTask]);
//     setNewTitle('');
//     setNewDueDate('');
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
//     setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
//   };

//   const deleteTask = async (id) => {
//     await fetch(`${API_URL}/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setTasks(tasks.filter((t) => t._id !== id));
//   };

//   const getDueLabel = (task) => {
//     if (!task.dueDate) return null;
//     const due = new Date(task.dueDate);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const isToday = due.toDateString() === today.toDateString();
//     const isTomorrow = due.toDateString() === tomorrow.toDateString();
//     const isOverdue = due < today && !task.completed;

//     if (isOverdue) {
//       return <div className="text-red-600 font-semibold">⚠️ You missed to complete the task</div>;
//     }
//     if (isToday) {
//       return <div className="text-red-600 font-semibold">📌 Last date to complete</div>;
//     }
//     if (isTomorrow) {
//       return <div className="text-orange-500 font-medium">📅 Tomorrow is the last date</div>;
//     }

//     return <div className="text-sm text-gray-500">Due: {due.toLocaleDateString()}</div>;
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const pendingTasks = tasks.filter((t) => !t.completed);
//   const completedTasks = tasks.filter((t) => t.completed);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#d7e6ff] via-[#f2e0ff] to-[#ffe6e6] flex justify-center items-start px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10"
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md">📝 My Stylish Todo List</h1>
//           <button onClick={onLogout} className="text-sm text-red-500 hover:underline">
//             Logout
//           </button>
//         </div>

//         <div className="flex items-center gap-3 mb-6 flex-wrap">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//             placeholder="What do you want to do?"
//             className="flex-grow border border-gray-300 rounded-xl px-5 py-3 text-lg focus:ring-2 focus:ring-purple-300 outline-none transition"
//           />
//           <input
//             type="date"
//             value={newDueDate}
//             onChange={(e) => setNewDueDate(e.target.value)}
//             className="border border-gray-300 rounded-xl px-4 py-3 text-lg"
//           />
//           <button
//             onClick={addTask}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-lg flex items-center gap-2 transition"
//           >
//             <PlusCircle size={22} /> Add
//           </button>
//         </div>

//         <h2 className="text-xl font-semibold text-purple-700 mb-4">⏳ Pending Tasks</h2>
//         <ul className="space-y-4 mb-10">
//           <AnimatePresence>
//             {pendingTasks.map((task) => (
//               <motion.li
//                 key={task._id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex justify-between items-center bg-purple-50 border border-purple-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex flex-col gap-1 flex-grow">
//                   <div className="flex items-center gap-3">
//                     <button onClick={() => toggleComplete(task)}>
//                       <Circle className="text-gray-500 hover:text-gray-700" size={24} />
//                     </button>
//                     <span className="text-lg text-gray-800">{task.title}</span>
//                   </div>
//                   {getDueLabel(task)}
//                 </div>
//                 <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={22} />
//                 </button>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </ul>

//         <h2 className="text-xl font-semibold text-green-600 mb-4">✅ Completed Tasks</h2>
//         <ul className="space-y-4">
//           <AnimatePresence>
//             {completedTasks.map((task) => (
//               <motion.li
//                 key={task._id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex justify-between items-center bg-green-50 border border-green-200 px-5 py-4 rounded-2xl shadow-sm"
//               >
//                 <div className="flex flex-col gap-1 flex-grow">
//                   <div className="flex items-center gap-3">
//                     <button onClick={() => toggleComplete(task)}>
//                       <CheckCircle className="text-white bg-green-500 rounded-full p-1" size={24} />
//                     </button>
//                     <span className="text-lg text-gray-600 line-through">{task.title}</span>
//                   </div>
//                   <div className="text-sm text-gray-500">Completed on: {new Date(task.updatedAt).toLocaleDateString()}</div>
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
