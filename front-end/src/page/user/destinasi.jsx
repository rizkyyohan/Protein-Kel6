import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import D1 from "./assets/D1.png";
import des1 from "./assets/des1.png";
import des2 from "./assets/des2.png";
import des3 from "./assets/des3.png";
import des4 from "./assets/des4.png";
import des5 from "./assets/des5.png";
import des6 from "./assets/des6.png";
import des7 from "./assets/des7.png";
import des8 from "./assets/des8.png";
import des9 from "./assets/des9.png";
import des10 from "./assets/des10.png";
import des11 from "./assets/des11.png";
import des12 from "./assets/des12.png";

const HeaderBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const navigate = useNavigate();

  // Daftar kategori
  const categories = ["Semua", "Alam", "Hiburan", "Museum", "Rekreasi"];

  // Daftar destinasi
  const destinations = [
    { id: 1, title: "Dusun Bambu", price: "Rp. 20.000 - Rp. 30.000", img: des1 },
    { id: 2, title: "Babakan Siliwangi", price: "Rp. 5.000 - Rp. 10.000", img: des2 },
    { id: 3, title: "Museum Geologi", price: "Rp. 10.000 - Rp. 15.000", img: des3 },
    { id: 4, title: "Fairy Garden", price: "Rp. 30.000 - Rp. 40.000", img: des4 },
    { id: 5, title: "Taman Lansia", price: "Gratis", img: des5 },
    { id: 6, title: "Kebun Binatang", price: "Rp. 30.000 - Rp. 50.000", img: des6 },
    { id: 7, title: "Trans Studio Bandung", price: "Rp. 120.000 - Rp. 150.000", img: des7 },
    { id: 8, title: "Museum Asia-Afrika", price: "Rp. 5.000 - Rp. 10.000", img: des8 },
    { id: 9, title: "Floating Market", price: "Rp. 20.000 - Rp. 25.000", img: des9 },
    { id: 10, title: "Farmhouse Lembang", price: "Rp. 25.000 - Rp. 30.000", img: des10 },
    { id: 11, title: "Saung Angklung Udjo", price: "Rp. 40.000 - Rp. 50.000", img: des11 },
    { id: 12, title: "Maribaya Hot Spring", price: "Rp. 40.000 - Rp. 60.000", img: des12 },
  ];

  const handleImageClick = (id) => {
    navigate(`/destinasi/${id}`); // Navigasi ke halaman detail dengan id
  };

  return (
    <div className="w-full m-0 p-0">
      {/* Gambar Latar */}
      <div className="relative h-[400px] w-full">
        <img
          src={D1}
          alt="Keindahan Perjalanan"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Konten */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Jelajahi Keindahan <br />
            <span className="text-yellow-500">Perjalanan</span>
          </h1>
          <p className="mt-4 text-white text-sm sm:text-lg max-w-xl">
            Perjalanan adalah hak setiap orang. Dengan transportasi inklusif, kami membawa Anda menuju tujuan tanpa batasan.
          </p>
        </div>
      </div>

      {/* Kontainer Flex untuk Bagian Kiri dan Kanan */}
      <div className="flex flex-col md:flex-row items-start px-6 sm:px-12 mt-8 gap-6">
        {/* Bagian Kiri */}
        <div className="md:w-1/2 text-left mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#242277] leading-tight">
            Destinasi Populer <br />
            Oleh <span className="text-[#FA9A0A]">TravelAble</span>
          </h1>
        </div>

        {/* Bagian Kanan */}
        <div className="md:w-1/2 flex items-start border-l-4 border-[#242277] pl-6">
          <div>
            <h2 className="text-2xl font-bold text-[#242277]">
              Temukan <span className="text-[#FA9A0A]">Destinasi Terbaik</span>
            </h2>
            <p className="mt-4 text-[#242277] text-sm sm:text-base leading-relaxed">
              Jelajahi berbagai kategori wisata populer yang telah disesuaikan untuk semua kebutuhan Anda. Mulai dari
              keindahan alam hingga hiburan modern, kami hadir untuk memberikan rekomendasi terbaik yang dapat diakses
              oleh semua orang.
            </p>
          </div>
        </div>
      </div>

      {/* Kategori Pilihan dan Kisaran Harga */}
      <div className="flex flex-col md:flex-row justify-between px-6 sm:px-12 mt-8 gap-6">
        {/* Kategori Pilihan */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-[#242277] font-semibold text-center mb-4">Kategori</h2>
          <div className="flex justify-around items-center gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {/* Lingkaran di Kiri */}
                <div
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                    selectedCategory === category
                      ? "border-[#FA9A0A] text-[#FA9A0A]"
                      : "border-gray-300 text-gray-300"
                  }`}
                >
                  {selectedCategory === category && (
                    <div className="w-2.5 h-2.5 bg-[#FA9A0A] rounded-full"></div>
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    selectedCategory === category ? "text-[#FA9A0A]" : "text-[#242277]"
                  }`}
                >
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kisaran Harga */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
          <h2 className="text-[#242277] font-semibold mb-2">Kisaran Harga</h2>
          <div className="border border-[#242277] rounded-md p-2 text-sm text-[#242277]">
            Rp. 0 - 2.000.000+
          </div>
        </div>
      </div>

      {/* Destinasi Pilihan */}
      <div className="p-6 bg-[#fefcf4]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => handleImageClick(item.id)}
            >
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                {/* Judul */}
                <h2 className="text-lg font-semibold text-[#242277]">{item.title}</h2>
                {/* Lokasi */}
                <p className="text-sm text-gray-500">Bandung, Indonesia</p>
                {/* Harga */}
                <p className="text-sm font-medium mt-2" style={{ color: "#F85E9F" }}>
                  {item.price}
                </p>
                {/* Rating Bintang */}
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium" style={{ color: "#FF5722" }}>
                    ★ 4.4
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
