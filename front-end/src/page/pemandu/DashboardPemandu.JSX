import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import TransStudio from "./assets/trans studio.jpeg";
import TamanHutan from "./assets/taman hutan.jpeg";
import TamanLembah from "./assets/taman lembah.jpeg";
import Pilat from "./assets/gambar 1.jpeg";
// import IconPemandu from "./assets/Ellipse 42.svg"; // Gambar untuk Pemandu Disabilitas
// import IconRekomendasi from "./assets/image 120.svg"; // Gambar untuk Rekomendasi Wisata
import MainImage from "./assets/gambar berkebutuhan.svg"; // Gambar utama untuk Petualangan Baru


const DashboardUser = () => {
  const destinations = [
    {
      id: 1,
      name: 'Trans Studio Bandung',
      location: 'Kota Bandung',
      image: TransStudio,
    },
    {
      id: 2,
      name: 'Taman Lembah Dewata',
      location: 'Kab. Bandung Barat',
      image: TamanLembah,
    },
    {
      id: 3,
      name: 'Taman Hutan Raya',
      location: 'Kab. Bandung',
      image: TamanHutan,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFAF2] flex flex-col">
      {/* Hero Section */}
      <div className="px-16 py-16 flex flex-wrap items-center relative">
        {/* Bagian Teks Selamat Datang */}
        <div className="w-full lg:w-1/2 pr-8">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            <span className="text-[#242277]">Selamat </span>
            <span className="text-[#FA9A0A]">datang di </span>
            <span className="text-[#FA9A0A]">website </span>
            <span className="text-[#242277]">kami</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Kami selalu membuat pelanggan kami nyaman dengan menyediakan sebanyak mungkin pilihan ramah disabilitas.
          </p>
          <button className="px-8 py-2.5 bg-[#1D1B4B] text-white rounded-md hover:bg-[#0f0e3b] transition">
            Eksplor
          </button>
        </div>

        {/* Bagian Gambar Utama */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img 
            src={Pilat} 
            alt="Destinasi Utama" 
            className="w-[500px] h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

     
      {/* Destinasi Section */}
      <div className="px-16 py-12">
        <h2 className="text-xl font-bold text-[#242277] uppercase mb-2">Top Destinasi</h2>
        <h3 className="text-3xl font-bold text-[#FA9A0A] mb-8">Eksplor top destinasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-bold text-lg mb-2 text-[#1D1B4B]">{destination.name}</h4>
              <p className="text-sm text-gray-600 mb-1">{destination.location}</p>
            </div>
          ))}
        </div>
      </div>

{/* Petualangan Baru Section */}
<div className="px-16 py-12 bg-[#FFFAF2] flex flex-col lg:flex-row gap-12">
  {/* Bagian Kiri - Teks */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-3xl font-bold text-[#242277]">Mencoba</h2>
    <h3 className="text-4xl font-bold text-[#FA9A0A] mb-4">
      Petualangan baru sebagai Pemandu
    </h3>
    <p className="text-gray-600 mb-8 leading-relaxed">
      Kami mendukung pemandu profesional untuk memberikan pengalaman 
      terbaik kepada para pengguna. berikut adalah layanan dan manfaat yang
      kami sediakan bagi anda sebagai pemandu.
    </p>

    {/* List Keunggulan */}
    <ul className="space-y-4">
      <li className="flex items-start gap-4">
        <div className="w-6 h-6 bg-[#FA9A0A] rounded-full mt-1"></div>
        <div>
          <h4 className="text-lg font-bold text-[#242277]">
            Keamanan dalam menjalankan tugas
          </h4>
          <p className="text-gray-600">
            Kami mendukung anda dengan platform yang membantu mengelola Pemesanan
            dan komunikasi langsung dengan pengguna, sehingga anda dapat fokus 
            memberikan layanan terbaik
          </p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <div className="w-6 h-6 bg-[#242277] rounded-full mt-1"></div>
        <div>
          <h4 className="text-lg font-bold text-[#242277]">
            Peluang Penghasilan yang Kompetitif
          </h4>
          <p className="text-gray-600">
            Kami menawarkan peluang penghasilan dari layanan pemandu wisata inklusif dengan
            sistem adil dan trasnparan.
          </p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <div className="w-6 h-6 bg-[#FA9A0A] rounded-full mt-1"></div>
        <div>
          <h4 className="text-lg font-bold text-[#242277]">
            Kenyamanan Dalam Manajemen Pesanan
          </h4>
          <p className="text-gray-600">
          Dengan sistem dashboard kami, Anda dapat dengan mudah mengelola jadwal,
           menerima pesanan, dan berkomunikasi langsung dengan pengguna.
          </p>
        </div>
      </li>
    </ul>
  </div>

  {/* Bagian Kanan - Gambar */}
  <div className="w-full lg:w-1/2 relative">
    <img
      src={MainImage}
      alt="Main"
      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
    />

  </div>
</div>

    </div>
  );
};

export default DashboardUser;
