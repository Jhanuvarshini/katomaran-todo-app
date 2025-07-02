

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
          <h2 className="text-3xl font-bold mb-2 text-purple-700">TidyDo👋</h2>
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

