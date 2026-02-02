'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', age: 0, gender: '', height: 0, weight: 0 });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? 'signup' : 'login';
      const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, formData);
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err: any) { alert(err.response?.data?.error || 'Error'); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden" 
         style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover'}}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-md z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4 drop-shadow-2xl">FITFORGE</h1>
          <p className="text-gray-400 text-lg">Transform your fitness journey</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 space-y-6 shadow-2xl">
          {isSignup && (
            <>
              <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
                     className="w-full p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all" />
            </>
          )}
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} 
                 className="w-full p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all" />
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} 
                 className="w-full p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all" />
          {isSignup && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({...formData, age: +e.target.value})} className="p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400" />
                <input type="text" placeholder="Gender" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Height cm" value={formData.height} onChange={(e) => setFormData({...formData, height: +e.target.value})} className="p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400" />
                <input type="number" placeholder="Weight kg" value={formData.weight} onChange={(e) => setFormData({...formData, weight: +e.target.value})} className="p-5 bg-gray-900/70 border border-gray-600 rounded-2xl text-white placeholder-gray-400" />
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-5 rounded-3xl font-black text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
            {isSignup ? 'START NOW' : 'LOGIN'}
          </button>
        </form>
        <p className="text-center mt-8 text-gray-400">
          {isSignup ? 'Already a member?' : "Don't have an account?"}{' '}
          <button type="button" onClick={() => setIsSignup(!isSignup)} className="ml-2 text-orange-400 font-bold hover:text-orange-300 hover:underline transition-colors">
            {isSignup ? 'LOGIN' : 'SIGN UP'}
          </button>
        </p>
      </div>
    </div>
  );
}
