// src/Components/LoginSignup/Login.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      // Set persistence based on remember me
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      
      setSuccess('Login successful!');

      // Store user info in localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem('userEmail', email);
      } else {
        localStorage.removeItem('userEmail');
      }

      // Navigate to dashboard
      navigate('/dashboard', { replace: true });

    } catch (error) {
      console.error('Login error:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later.');
          break;
        default:
          setError('Failed to login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <motion.div
        className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-200 shadow-lg py-10 px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-medium text-center mb-6">Log in to your account 🔐</h2>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label className="text-gray-700">Remember Me</label>
            </div>
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-purple-600 hover:text-purple-500"
            >
              Forgot Password?
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-400 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            onClick={() => navigate('/signup')}
            className="text-purple-600 hover:text-purple-500"
          >
            Sign up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;