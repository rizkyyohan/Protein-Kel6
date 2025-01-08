import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
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
        <Link
          to="/DashboardPemandu"
          className="text-[#242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/ChatP"
          className="text-[#242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium"
        >
          Chat Pelanggan
        </Link>
        <Link
          to="/Penawaran"
          className="text-[#242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium"
        >
          Penawaran Tersedia
        </Link>
        <Link
          to="/JadwalPemandu"
          className="text-[#242277] hover:text-purple-700 hover:bg-gray-200 px-4 py-2 rounded-full font-medium"
        >
          Jadwal Pemandu
        </Link>
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
