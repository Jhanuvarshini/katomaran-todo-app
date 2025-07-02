// // // // // // // import { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // export default function Signup({ onSignup }) {
// // // // // // //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// // // // // // //   const [message, setMessage] = useState('');
// // // // // // //   const navigate = useNavigate(); // 🧭 for redirection

// // // // // // //   const handleChange = e => {
// // // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async e => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await fetch('http://localhost:5000/api/auth/signup', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(form),
// // // // // // //       });

// // // // // // //       const data = await res.json();

// // // // // // //       if (res.ok) {
// // // // // // //         setMessage('Signup successful!');
// // // // // // //         onSignup(data.token, data.user); // ✅ update App.jsx
// // // // // // //         navigate('/todos');              // ✅ redirect to todos
// // // // // // //       } else {
// // // // // // //         setMessage(data.message || 'Signup failed');
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       setMessage('Signup failed');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2>Signup</h2>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <input
// // // // // // //           name="username"
// // // // // // //           placeholder="Username"
// // // // // // //           value={form.username}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //         /><br />
// // // // // // //         <input
// // // // // // //           name="email"
// // // // // // //           placeholder="Email"
// // // // // // //           type="email"
// // // // // // //           value={form.email}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //         /><br />
// // // // // // //         <input
// // // // // // //           name="password"
// // // // // // //           placeholder="Password"
// // // // // // //           type="password"
// // // // // // //           value={form.password}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //         /><br />
// // // // // // //         <button type="submit">Sign Up</button>
// // // // // // //       </form>
// // // // // // //       <p>{message}</p>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useState } from 'react';
// // // // // // import { Link, useNavigate } from 'react-router-dom';

// // // // // // export default function Signup({ onSignup }) {
// // // // // //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// // // // // //   const [message, setMessage] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = e => {
// // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async e => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const res = await fetch('http://localhost:5000/api/auth/signup', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(form),
// // // // // //       });

// // // // // //       const data = await res.json();

// // // // // //       if (res.ok) {
// // // // // //         setMessage('Signup successful!');
// // // // // //         onSignup(data.token, data.user);
// // // // // //         navigate('/todos');
// // // // // //       } else {
// // // // // //         setMessage(data.message || 'Signup failed');
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setMessage('Signup failed');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10">
// // // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
// // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //         <input
// // // // // //           name="username"
// // // // // //           placeholder="Username"
// // // // // //           value={form.username}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <input
// // // // // //           name="email"
// // // // // //           placeholder="Email"
// // // // // //           type="email"
// // // // // //           value={form.email}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <input
// // // // // //           name="password"
// // // // // //           placeholder="Password"
// // // // // //           type="password"
// // // // // //           value={form.password}
// // // // // //           onChange={handleChange}
// // // // // //           required
// // // // // //           className="w-full px-4 py-2 border rounded"
// // // // // //         />
// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
// // // // // //         >
// // // // // //           Sign Up
// // // // // //         </button>
// // // // // //       </form>

// // // // // //       <p className="text-center text-sm mt-4">
// // // // // //         Already have an account?{' '}
// // // // // //         <Link to="/login" className="text-purple-600 hover:underline">
// // // // // //           Login
// // // // // //         </Link>
// // // // // //       </p>

// // // // // //       {message && <p className="text-center mt-3 text-red-500">{message}</p>}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // export default function Signup({ onSignup }) {
// // // // //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// // // // //   const [message, setMessage] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = e =>
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });

// // // // //   const handleSubmit = async e => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch('http://localhost:5000/api/auth/signup', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(form),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (res.ok) {
// // // // //         setMessage('Signup successful!');
// // // // //         onSignup(data.token, data.user);
// // // // //         navigate('/todos');
// // // // //       } else {
// // // // //         setMessage(data.message || 'Signup failed');
// // // // //       }
// // // // //     } catch {
// // // // //       setMessage('Signup failed');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full">
// // // // //       <form
// // // // //         onSubmit={handleSubmit}
// // // // //         className="space-y-5 bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-3xl"
// // // // //       >
// // // // //         <h2 className="text-3xl font-bold text-center text-purple-700">Sign Up</h2>

// // // // //         <input
// // // // //           name="username"
// // // // //           placeholder="Username"
// // // // //           value={form.username}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none transition"
// // // // //         />

// // // // //         <input
// // // // //           name="email"
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           value={form.email}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none transition"
// // // // //         />

// // // // //         <input
// // // // //           name="password"
// // // // //           type="password"
// // // // //           placeholder="Password"
// // // // //           value={form.password}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none transition"
// // // // //         />

// // // // //         <button
// // // // //           type="submit"
// // // // //           className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
// // // // //         >
// // // // //           Sign Up
// // // // //         </button>

// // // // //         {message && (
// // // // //           <p className="text-center text-sm text-red-500">{message}</p>
// // // // //         )}
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';

// // // // export default function Signup({ onSignup }) {
// // // //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// // // //   const [message, setMessage] = useState('');
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     const res = await fetch('http://localhost:5000/api/auth/signup', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json' },
// // // //       body: JSON.stringify(form),
// // // //     });
// // // //     const data = await res.json();
// // // //     if (res.ok) {
// // // //       onSignup(data.token, data.user);
// // // //       navigate('/todos');
// // // //     } else {
// // // //       setMessage(data.message || 'Signup failed');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-400 p-6">
// // // //       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
// // // //         {/* Left branding */}
// // // //         <div className="md:w-1/2 p-10 text-white bg-gradient-to-br from-pink-600 to-indigo-600 h-full flex flex-col justify-center items-center">
// // // //           <h1 className="text-4xl font-extrabold">TaskNest</h1>
// // // //           <p className="text-lg mt-2 text-center">Your productivity partner for life.</p>
// // // //           <img
// // // //             src="https://www.svgrepo.com/show/327385/task-management.svg"
// // // //             alt="signup image"
// // // //             className="w-64 mt-8"
// // // //           />
// // // //         </div>

// // // //         {/* Right signup form */}
// // // //         <form onSubmit={handleSubmit} className="md:w-1/2 p-10 space-y-6 bg-white/80 text-gray-800 w-full">
// // // //           <h2 className="text-3xl font-bold text-center">Sign Up</h2>
// // // //           <input
// // // //             name="username"
// // // //             placeholder="Username"
// // // //             value={form.username}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // //           />
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="Email"
// // // //             value={form.email}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // //           />
// // // //           <input
// // // //             type="password"
// // // //             name="password"
// // // //             placeholder="Password"
// // // //             value={form.password}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
// // // //           />
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
// // // //           >
// // // //             Sign Up
// // // //           </button>
// // // //           <p className="text-sm text-center">
// // // //             Already registered?{' '}
// // // //             <Link to="/login" className="text-purple-700 font-medium hover:underline">
// // // //               Log In
// // // //             </Link>
// // // //           </p>
// // // //           {message && <p className="text-center text-red-600">{message}</p>}
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // export default function Signup({ onSignup }) {
// // //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// // //   const [message, setMessage] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleChange = e => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async e => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch('http://localhost:5000/api/auth/signup', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(form),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok) {
// // //         onSignup(data.token, data.user);
// // //         navigate('/todos');
// // //       } else {
// // //         setMessage(data.message || 'Signup failed');
// // //       }
// // //     } catch (err) {
// // //       setMessage('Signup failed');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center px-4">
// // //       <div className="bg-white/70 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl w-full max-w-md px-8 py-10 text-gray-800">
// // //         <h1 className="text-3xl font-bold mb-2 text-center">✨ Let's get started!</h1>
// // //         <p className="text-center text-sm text-gray-500 mb-8">Create your account to join TaskNest</p>

// // //         <form onSubmit={handleSubmit} className="space-y-5">
// // //           <input
// // //             name="username"
// // //             placeholder="👤 Username"
// // //             value={form.username}
// // //             onChange={handleChange}
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
// // //             required
// // //           />
// // //           <input
// // //             name="email"
// // //             type="email"
// // //             placeholder="✉️ Email"
// // //             value={form.email}
// // //             onChange={handleChange}
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
// // //             required
// // //           />
// // //           <input
// // //             name="password"
// // //             type="password"
// // //             placeholder="🔒 Password"
// // //             value={form.password}
// // //             onChange={handleChange}
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
// // //             required
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition"
// // //           >
// // //             Sign Up
// // //           </button>
// // //         </form>

// // //         <p className="mt-4 text-sm text-center text-gray-600">
// // //           Already have an account?{' '}
// // //           <button
// // //             onClick={() => navigate('/login')}
// // //             className="text-purple-600 font-medium hover:underline"
// // //           >
// // //             Login
// // //           </button>
// // //         </p>

// // //         {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function Signup({ onSignup }) {
// //   const [form, setForm] = useState({ username: '', email: '', password: '' });
// //   const [message, setMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = e => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch('http://localhost:5000/api/auth/signup', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         onSignup(data.token, data.user);
// //         navigate('/todos');
// //       } else {
// //         setMessage(data.message || 'Signup failed');
// //       }
// //     } catch (err) {
// //       setMessage('Signup failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-teal-100 flex items-center justify-center px-4">
// //       <div className="w-full max-w-md bg-white/80 rounded-[30px] p-10 shadow-2xl border-4 border-dotted border-teal-300">
// //         <div className="text-center mb-6">
// //           <h1 className="text-4xl font-bold text-teal-600">✨ Let's Get Started!</h1>
// //           <p className="text-sm text-gray-600 mt-2">Create your account and make tasks fun 🧠</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="🧑 Username"
// //             value={form.username}
// //             onChange={handleChange}
// //             className="w-full px-5 py-3 rounded-full border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="📧 Email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className="w-full px-5 py-3 rounded-full border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="🔒 Password"
// //             value={form.password}
// //             onChange={handleChange}
// //             className="w-full px-5 py-3 rounded-full border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 rounded-full font-bold shadow-lg transition transform hover:scale-105"
// //           >
// //             📝 Sign Up
// //           </button>
// //         </form>

// //         <p className="mt-4 text-center text-sm text-gray-500">
// //           Already have an account?{' '}
// //           <button
// //             onClick={() => navigate('/login')}
// //             className="text-teal-600 font-semibold hover:underline"
// //           >
// //             Login
// //           </button>
// //         </p>

// //         {message && <p className="mt-4 text-sm text-red-500 text-center">{message}</p>}
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Signup({ onSignup }) {
//   const [form, setForm] = useState({ username: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         onSignup(data.token, data.user);
//         navigate('/todos');
//       } else {
//         setMessage(data.message || 'Signup failed ❌');
//       }
//     } catch {
//       setMessage('Signup failed ❌');
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#f0f4f8]">
//       {/* Left: Illustration + Branding */}
//       <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-10 bg-[#e0e7ff] text-[#4b5563]">
//         <h1 className="text-4xl font-extrabold mb-4 text-[#4338ca]">TaskMate</h1>
//         <p className="text-lg max-w-md text-center mb-6">
//           Create your free account 🚀<br />
//           Start organizing your tasks the smart way!
//         </p>
//         <img
//           src="https://storyset.com/illustration/online-organizer/bro"
//           alt="Signup Illustration"
//           className="w-[340px] object-contain rounded-xl shadow-xl"
//         />
//       </div>

//       {/* Right: Signup Form */}
//       <div className="flex flex-1 items-center justify-center p-6">
//         <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center text-[#4338ca] mb-6">Join TaskMate ✨</h2>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={form.username}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-3 rounded-xl transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           {message && <p className="mt-4 text-sm text-red-500 text-center">{message}</p>}

//           <div className="flex items-center my-4">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-gray-400 text-sm">or sign up with</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="flex justify-center gap-4">
//             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Google" className="w-6 h-6" />
//             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="w-6 h-6" />
//             <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg" alt="Apple" className="w-6 h-6" />
//           </div>

//           <p className="text-sm text-gray-600 text-center mt-6">
//             Already have an account?{' '}
//             <span
//               onClick={() => navigate('/login')}
//               className="text-[#6366f1] font-semibold cursor-pointer hover:underline"
//             >
//               Log in
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import loginGif from './assets/login-animation.gif'; // Replace with your actual gif filename

// export default function Signup({ onSignup }) {
//   const [form, setForm] = useState({ username: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage('Signup successful!');
//         onSignup(data.token, data.user);
//         navigate('/todos');
//       } else {
//         setMessage(data.message || 'Signup failed');
//       }
//     } catch {
//       setMessage('Signup failed');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#f3e8ff] to-[#fef2f2] px-6 py-12">
//       <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex w-full max-w-5xl">
//         {/* Left visual */}
//         <div className="hidden md:flex w-1/2 items-center justify-center bg-[#e0f2fe]">
//           <img src={loginGif} alt="Signup illustration" className="w-[80%] h-auto object-contain" />
//         </div>

//         {/* Right form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12">
//           <h2 className="text-3xl font-bold mb-4 text-purple-700">Join Us 🎯</h2>
//           <p className="text-gray-600 mb-6">Create an account to manage your tasks effortlessly.</p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               name="username"
//               type="text"
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Username"
//               required
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
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
//               Sign Up
//             </button>
//           </form>
//           <p className="text-sm text-gray-500 mt-4">
//             Already have an account?{' '}
//             <span
//               className="text-purple-600 hover:underline cursor-pointer"
//               onClick={() => navigate('/login')}
//             >
//               Login here
//             </span>
//           </p>
//           {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginGif from './assets/login-animation.gif'; // Ensure this exists in your assets

export default function Signup({ onSignup }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Signup successful!');
        onSignup(data.token, data.user);
        navigate('/todos');
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch {
      setMessage('Signup failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e0f2fe] via-[#ede9fe] to-[#fff7f7] px-6 py-12">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex w-full max-w-5xl">
        {/* Left visual */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-[#e0f7ff]">
          <img
            src={loginGif}
            alt="Signup illustration"
            className="w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-3 text-purple-700">Create Your Account 🎉</h2>
          <p className="text-sm text-gray-500 mb-6">
            Organize your tasks like a pro with our smart dashboard!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login here
            </span>
          </div>

          <div className="text-sm text-gray-400 mt-2">
            Signed up with Google before?{' '}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login with Google
            </span>
          </div>

          {message && <p className="text-sm text-red-500 mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
}

