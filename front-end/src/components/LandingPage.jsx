import React from 'react';
import { ChevronRight, MapPin, Lock, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import G1 from "../components/assets/containter.png";
import G2 from "../components/assets/BabakanSiliwangi.png";
import G3 from "../components/assets/DusunBambu.png";
import G4 from "../components/assets/FarmHouse.png";
import G5 from "../components/assets/KebunBinatang.png";
import G6 from "../components/assets/Saung.png";

const TravelableLanding = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const popularDestinations = [
    {
      title: "Kebun Binatang Bandung",
      image: G5,
    },
    {
      title: "Farm House Susu Lembang",
      image: G4,
    },
    {
      title: "Dusun Bambu Leisure Park",
      image: G3,
    },
    {
      title: "Babakan Siliwangi",
      image: G2,
    }
  ];

  const blogPosts = [
    {
      title: "Menikmati budaya Sunda di Saung Angklung Udjo",
      image: G6,
      description: "Nikmati pertunjukan angklung yang memukau dan pembelajaran budaya lokal yang menarik di Saung Angklung Udjo."
    },
    {
      title: "5 Studio Photoshoot di Trans Studio Bandung",
      image: "/api/placeholder/300/200",
      description: "Berbagai background menarik dan serasa seperti di Trans Studio Bandung, tempat liburan indoor terbesar di Indonesia yang cocok untuk segala usia."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFAF4]">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          <span className="text-xl font-bold text-[#2B2A4C]">TravelAble</span>
        </div>
        <button 
          onClick={() => navigate('/login')} 
          className="bg-[#0047FF] text-white px-4 py-2 rounded-lg shadow-md"
        >
          Masuk
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-[#2B2A4C] mb-4 leading-tight">
            Mulai perjalanan Anda dengan{' '}
            <span className="text-[#FF7C57]">TravelAble</span> dan jelajahi destinasi tanpa batas!
          </h1>
          <p className="text-lg text-[#6F6F88] mb-8">
            Rencanakan dan jalani perjalanan sempurna Anda dengan saran ahli, kiat perjalanan, informasi destinasi, dan inspirasi dari kami!
          </p>
        </div>
        <div className="relative">
          <img 
            src={G1} 
            className="rounded-lg shadow-lg"
            alt="Travel"
          />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#2B2A4C] mb-2">Destinasi Populer</h2>
        <p className="text-lg text-[#6F6F88] mb-8">Liburan untuk membuat perjalanan Anda menyenangkan!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#2B2A4C]">{destination.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#FF7C57]">TravelAble Blog</h2>
          <button className="text-[#FF7C57] flex items-center font-medium">
            Selengkapnya
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#2B2A4C] mb-2">{post.title}</h3>
                <p className="text-[#6F6F88] text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFF5E9] rounded-full flex justify-center items-center mx-auto mb-4">
              <MapPin className="text-[#FF7C57]" />
            </div>
            <h3 className="font-semibold text-[#2B2A4C]">Asuransi yang terjamin</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFF5E9] rounded-full flex justify-center items-center mx-auto mb-4">
              <Lock className="text-[#FF7C57]" />
            </div>
            <h3 className="font-semibold text-[#2B2A4C]">Privasi yang terjaga</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFF5E9] rounded-full flex justify-center items-center mx-auto mb-4">
              <Clock className="text-[#FF7C57]" />
            </div>
            <h3 className="font-semibold text-[#2B2A4C]">Pemesanan cepat</h3>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-[#F7F9FC] py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Gambar */}
          <div className="relative flex justify-center items-center">
            <div className="bg-gradient-to-b from-[#2B2A4C] to-transparent rounded-full p-8">
              <img 
                src={require("../components/assets/image.png")} 
                alt="Panduan Eksklusif"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          {/* Konten */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#2B2A4C] mb-4">
              Panduan Eksklusif untuk Pemandu
            </h2>
            <p className="text-lg text-[#6F6F88] mb-6">
              Klik di bawah ini untuk panduan eksklusif pemandu yang mempermudah perjalanan Anda.
            </p>
            <button className="bg-[#FF7C57] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md">
              Panduan Pemandu
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2A4C] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-white">Tentang TravelAble</h4>
              <p className="text-sm text-[#B6B6D2]">
                Platform yang memberikan solusi perjalanan aksesibel untuk semua.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Panduan</h4>
              <ul className="text-sm text-[#B6B6D2] space-y-1">
                <li>Panduan Pengguna</li>
                <li>FAQ</li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Kontak</h4>
              <p className="text-sm text-[#B6B6D2]">info@travelable.com</p>
              <p className="text-sm text-[#B6B6D2]">+62 812 3456 7890</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelableLanding;
