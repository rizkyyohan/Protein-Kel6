import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link dan useNavigate dari react-router-dom
import logo from "../assets/logo.png";

function Header() {
  const [username, setUsername] = useState(""); // State untuk menyimpan nama pengguna
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk mengontrol dropdown
  const navigate = useNavigate();

  // Ambil nama pengguna dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Simpan nama ke state
    }
  }, []);

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    localStorage.removeItem("username"); // Hapus username dari localStorage
    navigate("/"); // Arahkan ke halaman utama
  };

  // Fungsi untuk membuka halaman edit profile
  const handleEditProfile = () => {
    navigate("/edit profile"); // Arahkan ke halaman edit profile
  };

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
          to="/tawaran"
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
      <div className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-gray-700 font-medium">Hi, {username || "Guest"}</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
            <span className="text-gray-500 text-sm font-bold">👤</span>
          </div>
        </button>

        {/* Dropdown untuk Logout dan Edit Profile */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <button
              onClick={handleEditProfile}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
