// // // // // // // // // import { useState } from 'react';
// // // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // export default function Login({ onLogin }) {
// // // // // // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // // // // // //   const [message, setMessage] = useState('');
// // // // // // // // //   const navigate = useNavigate(); // 🧭 for redirecting

// // // // // // // // //   const handleChange = e => {
// // // // // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async e => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     try {
// // // // // // // // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // // //         body: JSON.stringify(form),
// // // // // // // // //       });

// // // // // // // // //       const data = await res.json();

// // // // // // // // //       if (res.ok) {
// // // // // // // // //         setMessage('Login successful!');
// // // // // // // // //         onLogin(data.token, data.user); // ✅ update parent App.jsx state
// // // // // // // // //         navigate('/todos');             // ✅ redirect to /todos
// // // // // // // // //       } else {
// // // // // // // // //         setMessage(data.message || 'Login failed');
// // // // // // // // //       }
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setMessage('Login failed');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>Login</h2>
// // // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // // //         <input
// // // // // // // // //           name="email"
// // // // // // // // //           placeholder="Email"
// // // // // // // // //           type="email"
// // // // // // // // //           value={form.email}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //         /><br />
// // // // // // // // //         <input
// // // // // // // // //           name="password"
// // // // // // // // //           placeholder="Password"
// // // // // // // // //           type="password"
// // // // // // // // //           value={form.password}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //         /><br />
// // // // // // // // //         <button type="submit">Login</button>
// // // // // // // // //       </form>
// // // // // // // // //       <p>{message}</p>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import { useState } from 'react';
// // // // // // // // import { Link, useNavigate } from 'react-router-dom'; // 🧭 Link added

// // // // // // // // export default function Login({ onLogin }) {
// // // // // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // // // // //   const [message, setMessage] = useState('');
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const handleChange = e => {
// // // // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async e => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     try {
// // // // // // // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // // // // // // //         method: 'POST',
// // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // //         body: JSON.stringify(form),
// // // // // // // //       });

// // // // // // // //       const data = await res.json();

// // // // // // // //       if (res.ok) {
// // // // // // // //         setMessage('Login successful!');
// // // // // // // //         onLogin(data.token, data.user);
// // // // // // // //         navigate('/todos');
// // // // // // // //       } else {
// // // // // // // //         setMessage(data.message || 'Login failed');
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       setMessage('Login failed');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10">
// // // // // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
// // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //         <input
// // // // // // // //           name="email"
// // // // // // // //           placeholder="Email"
// // // // // // // //           type="email"
// // // // // // // //           value={form.email}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // // // //         />
// // // // // // // //         <input
// // // // // // // //           name="password"
// // // // // // // //           placeholder="Password"
// // // // // // // //           type="password"
// // // // // // // //           value={form.password}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // // // //         />
// // // // // // // //         <button
// // // // // // // //           type="submit"
// // // // // // // //           className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
// // // // // // // //         >
// // // // // // // //           Login
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //       <p className="text-center text-sm mt-4">
// // // // // // // //         Don't have an account?{' '}
// // // // // // // //         <Link to="/signup" className="text-purple-600 hover:underline">
// // // // // // // //           Sign up
// // // // // // // //         </Link>
// // // // // // // //       </p>
// // // // // // // //       {message && <p className="text-center mt-3 text-red-500">{message}</p>}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // export default function Login({ onLogin }) {
// // // // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // // // //   const [message, setMessage] = useState('');
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleChange = e =>
// // // // // // //     setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // //   const handleSubmit = async e => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(form),
// // // // // // //       });
// // // // // // //       const data = await res.json();
// // // // // // //       if (res.ok) {
// // // // // // //         setMessage('Login successful!');
// // // // // // //         onLogin(data.token, data.user);
// // // // // // //         navigate('/todos');
// // // // // // //       } else {
// // // // // // //         setMessage(data.message || 'Login failed');
// // // // // // //       }
// // // // // // //     } catch {
// // // // // // //       setMessage('Login failed');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="w-full">
// // // // // // //       <form
// // // // // // //         onSubmit={handleSubmit}
// // // // // // //         className="space-y-5 bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-3xl"
// // // // // // //       >
// // // // // // //         <h2 className="text-3xl font-bold text-center text-purple-700">Login</h2>

// // // // // // //         <input
// // // // // // //           name="email"
// // // // // // //           type="email"
// // // // // // //           placeholder="Email"
// // // // // // //           value={form.email}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none transition"
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           name="password"
// // // // // // //           type="password"
// // // // // // //           placeholder="Password"
// // // // // // //           value={form.password}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none transition"
// // // // // // //         />

// // // // // // //         <button
// // // // // // //           type="submit"
// // // // // // //           className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
// // // // // // //         >
// // // // // // //           Login
// // // // // // //         </button>

// // // // // // //         {message && (
// // // // // // //           <p className="text-center text-sm text-red-500">{message}</p>
// // // // // // //         )}
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useState } from 'react';
// // // // // // import { Link, useNavigate } from 'react-router-dom';

// // // // // // export default function Login({ onLogin }) {
// // // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // // //   const [message, setMessage] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = (e) => {
// // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     const res = await fetch('http://localhost:5000/api/auth/login', {
// // // // // //       method: 'POST',
// // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // //       body: JSON.stringify(form),
// // // // // //     });
// // // // // //     const data = await res.json();
// // // // // //     if (res.ok) {
// // // // // //       onLogin(data.token, data.user);
// // // // // //       navigate('/todos');
// // // // // //     } else {
// // // // // //       setMessage(data.message || 'Login failed');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-6">
// // // // // //       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
// // // // // //         {/* Left branding */}
// // // // // //         <div className="md:w-1/2 p-10 text-white bg-gradient-to-br from-purple-600 to-pink-500 h-full flex flex-col justify-center items-center">
// // // // // //           <h1 className="text-4xl font-extrabold">TaskNest</h1>
// // // // // //           <p className="text-lg mt-2 text-center">Organize today. Relax tomorrow.</p>
// // // // // //           <img
// // // // // //             src="https://www.svgrepo.com/show/312219/checklist.svg"
// // // // // //             alt="checklist"
// // // // // //             className="w-64 mt-8"
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Right login form */}
// // // // // //         <form onSubmit={handleSubmit} className="md:w-1/2 p-10 space-y-6 bg-white/80 text-gray-800 w-full">
// // // // // //           <h2 className="text-3xl font-bold text-center">Login</h2>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             name="email"
// // // // // //             placeholder="Email"
// // // // // //             value={form.email}
// // // // // //             onChange={handleChange}
// // // // // //             required
// // // // // //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // // // //           />
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             name="password"
// // // // // //             placeholder="Password"
// // // // // //             value={form.password}
// // // // // //             onChange={handleChange}
// // // // // //             required
// // // // // //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // // // //           />
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
// // // // // //           >
// // // // // //             Sign In
// // // // // //           </button>
// // // // // //           <p className="text-sm text-center">
// // // // // //             Don’t have an account?{' '}
// // // // // //             <Link to="/signup" className="text-purple-700 font-medium hover:underline">
// // // // // //               Sign Up
// // // // // //             </Link>
// // // // // //           </p>
// // // // // //           {message && <p className="text-center text-red-600">{message}</p>}
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // export default function Login({ onLogin }) {
// // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // //   const [message, setMessage] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = e => {
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = async e => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(form),
// // // // //       });
// // // // //       const data = await res.json();

// // // // //       if (res.ok) {
// // // // //         onLogin(data.token, data.user);
// // // // //         navigate('/todos');
// // // // //       } else {
// // // // //         setMessage(data.message || 'Login failed');
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setMessage('Login failed');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
// // // // //       <div className="bg-white/70 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl w-full max-w-md px-8 py-10 text-gray-800">
// // // // //         <h1 className="text-3xl font-bold mb-2 text-center">👋 Welcome back!</h1>
// // // // //         <p className="text-center text-sm text-gray-500 mb-8">Login to continue organizing your tasks</p>

// // // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // // //           <input
// // // // //             name="email"
// // // // //             type="email"
// // // // //             placeholder="✉️ Email"
// // // // //             value={form.email}
// // // // //             onChange={handleChange}
// // // // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             name="password"
// // // // //             type="password"
// // // // //             placeholder="🔒 Password"
// // // // //             value={form.password}
// // // // //             onChange={handleChange}
// // // // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
// // // // //             required
// // // // //           />
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition"
// // // // //           >
// // // // //             Login
// // // // //           </button>
// // // // //         </form>

// // // // //         <p className="mt-4 text-sm text-center text-gray-600">
// // // // //           Don't have an account?{' '}
// // // // //           <button
// // // // //             onClick={() => navigate('/signup')}
// // // // //             className="text-indigo-600 font-medium hover:underline"
// // // // //           >
// // // // //             Sign up
// // // // //           </button>
// // // // //         </p>

// // // // //         {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // export default function Login({ onLogin }) {
// // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // //   const [message, setMessage] = useState('');
// // // //   const navigate = useNavigate();

// // // //   const handleChange = e => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async e => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(form),
// // // //       });

// // // //       const data = await res.json();

// // // //       if (res.ok) {
// // // //         onLogin(data.token, data.user);
// // // //         navigate('/todos');
// // // //       } else {
// // // //         setMessage(data.message || 'Login failed');
// // // //       }
// // // //     } catch (err) {
// // // //       setMessage('Login failed');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 flex items-center justify-center px-4">
// // // //       <div className="w-full max-w-md bg-white/80 rounded-[30px] p-10 shadow-2xl border-4 border-dotted border-blue-200">
// // // //         <div className="text-center mb-6">
// // // //           <h1 className="text-4xl font-bold text-blue-600">🌟 Welcome Back!</h1>
// // // //           <p className="text-sm text-gray-600 mt-2">Login to continue your task journey 🧾</p>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="📧 Email"
// // // //             value={form.email}
// // // //             onChange={handleChange}
// // // //             className="w-full px-5 py-3 rounded-full border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="password"
// // // //             name="password"
// // // //             placeholder="🔒 Password"
// // // //             value={form.password}
// // // //             onChange={handleChange}
// // // //             className="w-full px-5 py-3 rounded-full border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
// // // //             required
// // // //           />
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-full font-bold shadow-lg transition transform hover:scale-105"
// // // //           >
// // // //             🚀 Login
// // // //           </button>
// // // //         </form>

// // // //         <p className="mt-4 text-center text-sm text-gray-500">
// // // //           Don’t have an account?{' '}
// // // //           <button
// // // //             onClick={() => navigate('/signup')}
// // // //             className="text-blue-600 font-semibold hover:underline"
// // // //           >
// // // //             Sign up!
// // // //           </button>
// // // //         </p>

// // // //         {message && <p className="mt-4 text-sm text-red-500 text-center">{message}</p>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // export default function Login({ onLogin }) {
// // //   const [form, setForm] = useState({ email: '', password: '' });
// // //   const [message, setMessage] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleChange = e => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async e => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch('http://localhost:5000/api/auth/login', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(form),
// // //       });
// // //       const data = await res.json();
// // //       if (res.ok) {
// // //         setMessage('🎉 Login successful!');
// // //         onLogin(data.token, data.user);
// // //         navigate('/todos');
// // //       } else {
// // //         setMessage(data.message || 'Login failed ❌');
// // //       }
// // //     } catch {
// // //       setMessage('Login failed ❌');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f5fa] via-[#eaf3ff] to-[#fff1f1] px-4">
// // //       <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl px-10 py-12 w-full max-w-md">
// // //         <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">📥 Login</h2>
// // //         <p className="text-sm text-gray-500 text-center mb-6">Welcome back! Please enter your credentials</p>
// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             placeholder="Email"
// // //             value={form.email}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
// // //           />
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             placeholder="Password"
// // //             value={form.password}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
// // //           >
// // //             Login
// // //           </button>
// // //         </form>
// // //         {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}

// // //         <p className="text-center text-sm text-gray-500 mt-6">
// // //           Don't have an account?{' '}
// // //           <span
// // //             onClick={() => navigate('/signup')}
// // //             className="text-purple-600 font-medium cursor-pointer hover:underline"
// // //           >
// // //             Sign up here
// // //           </span>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function Login({ onLogin }) {
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const [message, setMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = e => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch('http://localhost:5000/api/auth/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });
// //       const data = await res.json();

// //       if (res.ok) {
// //         onLogin(data.token, data.user);
// //         navigate('/todos');
// //       } else {
// //         setMessage(data.message || 'Login failed ❌');
// //       }
// //     } catch {
// //       setMessage('Login failed ❌');
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen bg-[#f0f4f8]">
// //       {/* Left Panel */}
// //       <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-[#e0e7ff] to-[#f5f3ff] text-[#374151] p-10">
// //         <h1 className="text-5xl font-extrabold text-[#4338ca] mb-4">📝 TaskMate</h1>
// //         <p className="text-xl font-medium mb-3 text-center px-4">
// //           Your tasks, your flow ✨
// //         </p>
// //         <p className="text-base text-gray-600 text-center mb-6 px-8 leading-relaxed">
// //           Organize your day like a pro 🚀 <br />
// //           Stay ahead with smart reminders, priority filters, and real-time sync ⚡
// //         </p>
// //         <img
// //           src="https://storyset.com/illustration/project-management/bro"
// //           alt="Login Illustration"
// //           className="w-[320px] object-contain rounded-xl drop-shadow-lg"
// //         />
// //       </div>

// //       {/* Right Form */}
// //       <div className="flex flex-1 items-center justify-center p-6">
// //         <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
// //           <h2 className="text-3xl font-bold text-center text-[#4338ca] mb-6">Welcome Back 👋</h2>
// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               value={form.email}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
// //             />
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={form.password}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
// //             />
// //             <button
// //               type="submit"
// //               className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-3 rounded-xl transition"
// //             >
// //               Login
// //             </button>
// //           </form>

// //           {message && <p className="mt-4 text-sm text-red-500 text-center">{message}</p>}

// //           <div className="flex items-center my-4">
// //             <hr className="flex-grow border-gray-300" />
// //             <span className="mx-2 text-gray-400 text-sm">or login with</span>
// //             <hr className="flex-grow border-gray-300" />
// //           </div>

// //           <div className="flex justify-center gap-4">
// //             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Google" className="w-6 h-6" />
// //             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="w-6 h-6" />
// //             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg" alt="Apple" className="w-6 h-6" />
// //           </div>

// //           <p className="text-sm text-gray-600 text-center mt-6">
// //             Don't have an account?{' '}
// //             <span
// //               onClick={() => navigate('/signup')}
// //               className="text-[#6366f1] font-semibold cursor-pointer hover:underline"
// //             >
// //               Sign up
// //             </span>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import loginGif from './assets/login-animation.gif'; // make sure the filename matches

// export default function Login({ onLogin }) {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage('Login successful!');
//         onLogin(data.token, data.user);
//         navigate('/todos');
//       } else {
//         setMessage(data.message || 'Login failed');
//       }
//     } catch {
//       setMessage('Login failed');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#f3e8ff] to-[#fef2f2] px-6 py-12">
//       <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex w-full max-w-5xl">
//         {/* Left GIF section */}
//         <div className="hidden md:flex w-1/2 items-center justify-center bg-[#e0f2fe]">
//           <img src={loginGif} alt="Login visual" className="w-[80%] h-auto object-contain" />
//         </div>

//         {/* Right form section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12">
//           <h2 className="text-3xl font-bold mb-4 text-purple-700">Welcome Back 👋</h2>
//           <p className="text-gray-600 mb-6">Login to access your tasks and stay organized.</p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
//             <button
//               type="submit"
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-sm text-gray-500 mt-4">
//             Don’t have an account?{' '}
//             <span
//               className="text-purple-600 hover:underline cursor-pointer"
//               onClick={() => navigate('/signup')}
//             >
//               Register here
//             </span>
//           </p>
//           {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ Corrected import
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginGif from './assets/login-animation.gif';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Login successful!');
        onLogin(data.token, data.user);
        navigate('/todos');
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Login failed');
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const user = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };
      onLogin(credentialResponse.credential, user);
      navigate('/todos');
    } catch (err) {
      setMessage('Google login decoding failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-[#ede9fe] to-[#fef9f9] px-6 py-12">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex w-full max-w-5xl">
        {/* Left GIF section */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-[#f0f9ff]">
          <img src={loginGif} alt="Login visual" className="w-[80%] h-auto object-contain" />
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2 text-purple-700">Welcome Back 👋</h2>
          <p className="text-sm text-gray-500 mb-6">Login to your task hub and stay organized!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-500">or continue with</div>

          <div className="flex justify-center mb-2">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => setMessage('Google Login Failed')}
            />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Don’t have an account?{' '}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Register here
            </span>
          </p>

          {message && <p className="text-sm text-red-500 mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
}

