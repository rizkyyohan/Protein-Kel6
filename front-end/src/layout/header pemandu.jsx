import React from "react";
import logo from "../assets/logo.png";

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
            <a href="#dashboard" className="text-[##242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium">
                Dashboard
            </a>
            <a href="#chat" className="text-[##242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium">
                Chat Pelanggan
            </a>
            <a href="#offers" className="text-[##242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium">
                Penawaran Tersedia
            </a>
            <a href="#schedule" className="text-[##242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium">
                Jadwal Pemandu
            </a>
        </nav>


      {/* Profil Pengguna */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-medium">Hi, HOHO</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
          <span className="text-gray-500 text-sm font-bold">👤</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
