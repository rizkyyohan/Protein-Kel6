import React from "react";
import artikelImage from "./assets/des21.png"; // Ganti dengan path gambar utama
import lokasi1 from "./assets/des22.png"; // Ganti dengan path gambar lokasi 1
import lokasi2 from "./assets/des23.png"; // Ganti dengan path gambar lokasi 2
import lokasi3 from "./assets/des24.png";
const ArtikelKedua = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#242277] mb-4">
          TravelAble
          <span className="text-[#FA9A0A]"> Artikel</span>
        </h1>
        <img
          src={artikelImage}
          alt="Menjelajahi Budaya Tradisional Bandung"
          className="w-full h-500 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-[#FA9A0A] mb-4">
          Mau Liburan Ke Bandung?
          {/* <span className="text-[#242277]"> Sembangi Wisata Terkenalnya</span> */}
        </h1>
        <h1 className="text-4xl font-bold text-[#242277]"> Sembangi Wisata Terkenalnya</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Bandung, Kota Kembang, merupakan destinasi favorit bagi wisatawan dengan suasana sejuk dan alam yang memukau. Selain itu, Bandung juga kaya akan wisata sejarah dan budaya yang menarik untuk dijelajahi.
        </p>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Bagi kamu yang ingin berlibur ke Bandung, berikut beberapa wisata terkenal yang wajib kamu kunjungi:
        </p>
 {/* Tempat 1 */}
         <div className="mt-8">
           <h2 className="text-2xl font-semibold text-[#242277] mb-2">
             1. Gedung Sate: Ikon kota Bandung yang terkenal dengan arsitektur kolonialnya. Gedung ini menjadi simbol kota dan sering dikunjungi wisatawan untuk berfoto serta menikmati sejarahnya.
           </h2>
           <img
             src={lokasi1}
             alt="Trans Studio Bandung"
             className="w-300 max-h-48 object-cover rounded-lg mb-4"
           />
         </div>
 
         {/* Tempat 2 */}
         <div className="mt-8">
           <h2 className="text-2xl font-semibold text-[#242277] mb-2">
             2. Jalan Braga: Jelajahi kawasan bersejarah ini yang penuh dengan bangunan kolonial dan suasana vintage. Di sini, kamu bisa menemukan banyak spot foto menarik, kafe, dan galeri seni.
           </h2>
           <img
             src={lokasi2}
             alt="Dusun Bambu"
             className="w-300 max-h-48 object-cover rounded-lg mb-4"
           />
         </div>
 
         {/* Tempat 3 */}
         <div className="mt-8">
           <h2 className="text-2xl font-semibold text-[#242277] mb-2">
             3. Museum Konferensi Asia-Afrika: Bandung dikenal sebagai tuan rumah Konferensi Asia-Afrika pada tahun 1955. Museum ini menyimpan berbagai peninggalan dan dokumentasi konferensi bersejarah tersebut.
           </h2>
           <img
             src={lokasi3}
             alt="Saung Angklung Udjo"
             className="w-300 max-h-48 object-cover rounded-lg mb-4"
           />
         </div>

        {/* Penutup */}
        <div className="mt-8">
          <p className="text-black-600 leading-relaxed">
            Semoga informasi ini membantu kamu dalam merencanakan liburan ke Bandung!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelKedua;
