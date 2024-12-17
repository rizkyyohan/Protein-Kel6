import React from "react";
import Image from "../assets/k1.png"; 
import k2 from "../assets/k2.png";
import k11 from "../assets/k11.png";
import k22 from "../assets/k22.png";
import TKA from "../assets/TKA.png";
import k33 from "../assets/k33.png";
import k44 from "../assets/k44.png";

const TentangKami = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      
      {/* Bagian Tentang Kami */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 mb-8">
        {/* Bagian Kiri: Teks */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-[#FA9A0A]">Kami</span>
          </h1>
          <p className="font-bold text-[#242277] leading-relaxed">
            <span className="font-bold text-[#FA9A0A]">TravelAble</span> dirancang untuk 
            memberikan informasi dan layanan menarik seputar destinasi wisata inklusif, 
            fasilitas aksesibilitas di tempat wisata, serta paket perjalanan yang 
            disesuaikan bagi penyandang disabilitas. Kami memudahkan pengguna dalam 
            mencari dan mendapatkan informasi terkini mengenai destinasi wisata yang 
            ramah disabilitas, serta menyediakan pemandu wisata profesional yang siap 
            membantu kebutuhan khusus Anda.
          </p>
        </div>

        {/* Bagian Kanan: Gambar dan Overlay */}
        <div className="relative flex-1">
          <img
            src={Image}
            alt="Tentang Kami"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Bagian Cerita Kami */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2 relative">
          <img
            src={k2}
            alt="Cerita kami"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            <span className="text-[#FA9A0A]">Cerita</span>{" "}
            <span className="text-[#242277]">Kami</span>
          </h1>
          <p className=" font-bold text-[#242277] leading-relaxed">
            Project ini dimulai dengan banyak riset dan brainstorming. Kami
            melakukan survei untuk memahami kebutuhan dan keinginan para
            wisatawan, khususnya penyandang disabilitas. Kami mengadakan diskusi
            dengan wisatawan dan bahkan melakukan beberapa perjalanan sendiri
            untuk mendapatkan wawasan yang lebih baik. Dengan dedikasi dan kerja
            keras, kami mengembangkan konsep{" "}
            <span className="font-semibold text-blue-600">TravelAble</span>, 
            sebuah platform yang tidak hanya membantu Anda merencanakan perjalanan, 
            tetapi juga menawarkan pengalaman yang mendalam dan bermakna.
          </p>
        </div>
      </div>

      {/* Bagian Artikel */}
      <div className="w-full max-w-6xl bg-gray-50 p-8 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          <span className="text-[#FA9A0A]">TravelAble</span>{" "}
          <span className="text-[#242277]">Artikel</span>
        </h1>

        {/* Kontainer Artikel */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kartu 1 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <button
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
          onClick={() => alert("Arahkan ke halaman rekomendasi!")}
        >
          <img
            src={k11}
            alt="Rekomendasi Bandung"
            className="w-full  object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </button>
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-lg font-semibold text-[#242277]">
                Pesona Bandung yang Tak Terlupakan
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Bandung, kota metropolitan yang selalu ramai dan dinamis, merupakan
                ibukota Indonesia yang menyimpan pesona unik dan tak terlupakan.
              </p>
            </div>
          </div>

          {/* Kartu 2 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <button
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
          onClick={() => alert("Arahkan ke halaman rekomendasi!")}
        >
          <img
            src={k22}
            alt="Rekomendasi Bandung"
            className="w-full  object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </button>
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-lg font-semibold text-[#242277]">
                Menelusuri Jejak Sejarah Bandung
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Bagi pecinta sejarah, Bandung menyimpan pesona masa lalu. Jelajahi
                kawasan Jalan Asia Afrika dan Gedung Merdeka.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button dengan Gambar */}
      <div className="w-full max-w-6xl p-8 mb-8">
        <button
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
          onClick={() => alert("Arahkan ke halaman rekomendasi!")}
        >
          <img
            src={TKA}
            alt="Rekomendasi Bandung"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Kartu Artikel  */}
      <div className="w-full max-w-6xl bg-gray-50 p-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kartu 3 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <button
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
          onClick={() => alert("Arahkan ke halaman rekomendasi!")}
        >
          <img
            src={k33}
            alt="Rekomendasi Bandung"
            className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </button>
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-lg font-semibold text-[#242277]">
                Menjelajahi Budaya Tradisional Bandung
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Bandung adalah kota yang kaya akan budaya Sunda dan keindahan alamnya.
                Kunjungi Saung Angklung Udjo untuk merasakan langsung keunikan musik
                angklung dan mengenal budaya khas Jawa Barat.
              </p>
            </div>
          </div>

          {/* Kartu 4 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <button
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              onClick={() => alert("Arahkan ke halaman rekomendasi!")}
            >
              <img
                src={k44}
                alt="Rekomendasi Bandung"
                className="w-full  object-cover group-hover:scale-110 transition-transform duration-300"
              />
          </button>
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-lg font-semibold text-[#242277]">
                Menikmati Keindahan Alam Bandung
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Di tengah hiruk pikuk kota, Bandung memiliki oase alam menyegarkan.
                Bersantailah di Taman Hutan Raya Ir. H. Djuanda dengan udara segar
                dan pemandangan asri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
