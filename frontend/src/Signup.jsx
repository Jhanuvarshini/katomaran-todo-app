

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

