import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import chat from "../assets/chat.png";

function Header() {
  const [username, setUsername] = useState("");
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
    navigate("/"); // Arahkan ke halaman destinasi
  };

  // Fungsi untuk membuka halaman edit profile
  const handleEditProfile = () => {
    navigate("/editprofileuser"); // Arahkan ke halaman edit profile
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
          onClick={() => (window.location.href = "/chatU")}
        >
          <img src={chat} alt="Chat Icon" className="w-12 h-12" />
        </button>
      </div>

      {/* Profil Pengguna */}
      <div className="relative flex items-center space-x-2">
        {/* Button untuk membuka dropdown */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-700 font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Hi, {username || "Guest"}
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-2">
              <li>
                <button
                  onClick={handleEditProfile}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Edit Profile user
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
