import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';
import gambarKiri from './assets/kiri butuh.png';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Mapping role dari frontend ke nilai yang sesuai di backend
      const mappedRole = role === "pengguna" ? "customer" : "pemandu";

      // Data yang akan dikirim ke backend
      const data = { nama, email, password, role: mappedRole };

      // Request ke backend
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Parsing hasil response
      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Pendaftaran berhasil! Silakan login.");
        setNama('');
        setRole('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage(result.message || "Pendaftaran gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Terjadi kesalahan pada server. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 bg-white">
        <div className="max-w-md w-full mx-auto space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-900">Mendaftar</h2>
            <p className="mt-2 text-sm text-gray-500">Daftar untuk menikmati fitur TravelAble</p>
          </div>

          {/* Register Form */}
          <form className="space-y-6" onSubmit={handleRegister}>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            
            {/* Nama Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="">Pilih Role</option>
                  <option value="pengguna">Pengguna</option>
                  <option value="pemandu">Pemandu</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Konfirmasi Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Mendaftar
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="bg-[#242277] flex-1 flex items-center justify-center min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center w-[500px] h-[500px]">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6">
            <h2 className="text-white text-2xl font-bold mt-4">Mulailah perjalanan Anda dengan TravelAble!</h2>
            <img src={gambarKiri} alt="Gambar Orang" className="w-96 h-96 object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
