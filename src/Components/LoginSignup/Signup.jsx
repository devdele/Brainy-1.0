import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date().toISOString(),
       
      });

      setSuccess('Signup successful! You can now log in.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      
      navigate('/dashboard', { replace: true });

    } catch (error) {
      console.error('Signup error:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/operation-not-allowed':
          setError('Email/password accounts are not enabled.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak.');
          break;
        default:
          setError('Failed to create account. Please try again.');
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
  <h2 className="text-2xl font-medium text-center mb-6">Create an account</h2>

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
          {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
        </button>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
      />
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className={`bg-purple-600 text-white rounded-md py-2 px-4 hover:bg-purple-400 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </div>
  </form>
</motion.div>
</div>
  );
};


export default Signup;



