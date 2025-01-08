import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigasi

import Pemandu1 from "../user/assets/pemandu1.jpeg";
import Pemandu2 from "./assets/pemandu2.jpeg";
import Pemandu3 from "./assets/pemandu3.jpeg";
import Pemandu4 from "./assets/pemandu4.jpeg";
import Pemandu5 from "./assets/pemandu5.jpeg";
import Pemandu6 from "./assets/pemandu6.jpeg";
import Pemandu7 from "./assets/pemandu7.jpeg";
import Pemandu8 from "./assets/pemandu8.jpeg";
import Pemandu9 from "./assets/pemandu9.jpeg";
import Pemandu10 from "./assets/pemandu10.jpeg";
import Pemandu11 from "./assets/pemandu11.jpeg";
import Pemandu12 from "./assets/pemandu12.jpeg";

const ListPemandu = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const navigate = useNavigate(); // Inisialisasi navigasi

  const handleGuideClick = (guide) => {
    // Navigasi ke halaman pemesanan dengan data pemandu
    navigate("/pemesanan", { state: { guide } });
  };

  const guides = [
    { id: 1, name: "Rizky Yohan", location: "Bandung Barat", price: 250000, gender: "laki-laki", image: Pemandu1 },
    { id: 2, name: "Yamazaki Jonggyu", location: "Kota Bandung", price: 350000, gender: "laki-laki", image: Pemandu2 },
    { id: 3, name: "Fadhilurrahman Ferry", location: "Kota Bandung", price: 300000, gender: "laki-laki", image: Pemandu3 },
    { id: 4, name: "Yuna", location: "Kab. Bandung", price: 250000, gender: "perempuan", image: Pemandu4 },
    { id: 5, name: "Lia Lia", location: "Kab. Bandung", price: 430000, gender: "perempuan", image: Pemandu5 },
    { id: 6, name: "Sarah Hana", location: "Bandung Barat", price: 350000, gender: "perempuan", image: Pemandu6 },
    { id: 7, name: "Asep Boing", location: "Kab. Bandung", price: 285000, gender: "laki-laki", image: Pemandu7 },
    { id: 8, name: "Park Somi", location: "Kota Bandung", price: 350000, gender: "perempuan", image: Pemandu8 },
    { id: 9, name: "Daffa Nova", location: "Bandung Barat", price: 160000, gender: "laki-laki", image: Pemandu9 },
    { id: 10, name: "Daniel Ahmad", location: "Bandung Barat", price: 275000, gender: "laki-laki", image: Pemandu10 },
    { id: 11, name: "Gugum Gunawan", location: "Kota Bandung", price: 350000, gender: "laki-laki", image: Pemandu11 },
    { id: 12, name: "Hana Ames", location: "Kab. Bandung", price: 350000, gender: "perempuan", image: Pemandu12 },
  ];

  // Filter data berdasarkan kriteria
  const filteredGuides = guides.filter((guide) => {
    const matchLocation = selectedLocation === "All" || guide.location === selectedLocation;
    const matchGender = selectedGender === "All" || guide.gender === selectedGender;
    const matchPrice = priceRange === "All" || (priceRange === "0-300000" && guide.price <= 300000) || (priceRange === "300000-500000" && guide.price > 300000 && guide.price <= 500000);
    return matchLocation && matchGender && matchPrice;
  });

  return (
    <div className="min-h-screen bg-[#FDF9F3]">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url(./assets/heroLP.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">Temukan Pemandu Wisata Terbaik</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">Jelajahi keindahan Bandung dan sekitarnya dengan pemandu profesional pilihan kami.</p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="container mx-auto mb-8 mt-8 px-4">
        <div className="mb-6 flex gap-4">
          <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-48 rounded-lg border border-gray-300 p-2">
            <option>All</option>
            <option>Bandung Barat</option>
            <option>Kota Bandung</option>
            <option>Kab. Bandung</option>
          </select>

          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-48 rounded-lg border border-gray-300 p-2">
            <option>All</option>
            <option value="0-300000">0 - 300.000</option>
            <option value="300000-500000">300.000 - 500.000</option>
          </select>

          <div>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="All" checked={selectedGender === "All"} onChange={(e) => setSelectedGender(e.target.value)} />
              <span>All</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="laki-laki" checked={selectedGender === "laki-laki"} onChange={(e) => setSelectedGender(e.target.value)} />
              <span>Laki-Laki</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="perempuan" checked={selectedGender === "perempuan"} onChange={(e) => setSelectedGender(e.target.value)} />
              <span>Perempuan</span>
            </label>
          </div>
        </div>
      </div>

      {/* Guide Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="rounded-xl bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => handleGuideClick(guide)}>
              <img src={guide.image} alt={guide.name} className="mb-3 h-48 w-full rounded-lg object-cover" />
              <div className="px-2 pb-2">
                <h3 className="font-medium">{guide.name}</h3>
                <p className="text-sm text-gray-600">{guide.location}</p>
                <p className="mt-2 text-orange-500">Rp {guide.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{guide.gender === "laki-laki" ? "Laki-Laki" : "Perempuan"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPemandu;
