'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface User {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
}

export default function Dashboard() {
  const [user, setUser] = useState<User>({ name: 'Ashish Arora', age: 28, gender: 'Male', height: 175, weight: 75 });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // axios.get('http://localhost:5000/api/profile').then(setUser); // Uncomment after backend ready
  }, []);

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
          FITFORGE
        </h1>
        <button className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700 border border-gray-600 rounded-2xl backdrop-blur-sm transition-all hover:scale-105">
          Logout
        </button>
      </div>

      {/* Main Grid - Profile + 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2">
          <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-black text-black shadow-2xl border-4 border-white/20">
            AA
          </div>
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {user.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm bg-gray-800/30 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <div className="text-right"><span className="text-gray-400 block">Age</span><span className="font-bold">{user.age}</span></div>
            <div className="text-right"><span className="text-gray-400 block">Gender</span><span className="font-bold">{user.gender}</span></div>
            <div className="text-right"><span className="text-gray-400 block">Height</span><span className="font-bold">{user.height}cm</span></div>
            <div className="text-right"><span className="text-gray-400 block">Weight</span><span className="font-bold">{user.weight}kg</span></div>
          </div>
        </div>

        {/* Workout Plan Card */}
        <div className="bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all group">
          <h3 className="text-2xl font-black mb-8 text-center text-orange-500 drop-shadow-lg group-hover:scale-110 transition-transform">WORKOUT PLAN</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">Chest Press</span>
              <span className="font-black text-orange-400 text-lg">45min</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">Squats</span>
              <span className="font-black text-orange-400 text-lg">30min</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">Deadlift</span>
              <span className="font-black text-orange-400 text-lg">40min</span>
            </div>
          </div>
        </div>

        {/* LED Workout Card */}
        <div className="bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all group">
          <h3 className="text-2xl font-black mb-8 text-center text-orange-500 drop-shadow-lg group-hover:scale-110 transition-transform">LED WORKOUT</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">LED Cardio</span>
              <span className="font-black text-orange-400 text-lg">500cal</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">LED Strength</span>
              <span className="font-black text-orange-400 text-lg">800cal</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">LED HIIT</span>
              <span className="font-black text-orange-400 text-lg">650cal</span>
            </div>
          </div>
        </div>

        {/* Diet Plan Card */}
        <div className="bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all group">
          <h3 className="text-2xl font-black mb-8 text-center text-orange-500 drop-shadow-lg group-hover:scale-110 transition-transform">DIET PLAN</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">Pre Workout</span>
              <span className="font-black text-orange-400 text-lg">Pro 30g</span>
            </div>
            <div className="flex justify-between items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-all">
              <span className="font-semibold">Post Workout</span>
              <span className="font-black text-orange-400 text-lg">Pro 40g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
