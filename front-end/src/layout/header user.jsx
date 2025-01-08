import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import chat from "../assets/chat.png";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo dan Judul */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="TravelAble Logo" className="h-10" />
        <span className="text-xl font-bold text-purple-700">TravelAble</span>
      </div>

      {/* Navigasi */}
      <nav className="flex space-x-6">
        <Link
          to="/DashboardUser"
          className="text-[#FA9A0A] font-medium px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/tentangkami"
          className="text-[#FA9A0A] font-medium px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white"
        >
          Tentang Kami
        </Link>
        <Link
          to="/ListPemandu"
          className="text-[#FA9A0A] font-medium px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white"
        >
          Pemandu
        </Link>
        <Link
          to="/destinasi"
          className="text-[#FA9A0A] font-medium px-4 py-2 rounded-md transition-all duration-200 hover:bg-blue-500 hover:text-white"
        >
          Rekomendasi Wisata
        </Link>
      </nav>

      {/* Tombol Chat */}
      <div className="flex justify-center items-center">
        <button
          className="bg-transparent p-0 border-none focus:outline-none"
          onClick={() => (window.location.href = '/chatU')}
        >
          <img src={chat} alt="Chat Icon" className="w-12 h-12" />
        </button>
      </div>

      {/* Profil Pengguna */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-medium">Hi, Messi</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
          <span className="text-gray-500 text-sm font-bold">👤</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
