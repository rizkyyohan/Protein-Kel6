import React from "react";
import artikelImage from "./assets/k22.png"; // Ganti dengan path gambar utama
import lokasi1 from "./assets/des14.png"; // Ganti dengan path gambar lokasi 1
import lokasi2 from "./assets/des15.png"; // Ganti dengan path gambar lokasi 2

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
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-[#FA9A0A] mb-4">
          Menelusuri Jejak
          <span className="text-[#242277]"> Sejarah Bandung</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Bandung bukan hanya kota dengan keindahan alam yang menawan, tetapi juga
          menyimpan banyak cerita sejarah yang menarik untuk ditelusuri. Kawasan Jalan
          Asia Afrika dan Gedung Merdeka menjadi saksi bisu perjalanan panjang sejarah
          Indonesia, terutama dalam Konferensi Asia-Afrika yang fenomenal.
        </p>

        {/* Konten Pertama */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
              Gedung Merdeka: Simbol Kemerdekaan dan Diplomasi
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Gedung Merdeka adalah bangunan bersejarah yang menjadi lokasi utama
              Konferensi Asia-Afrika pada tahun 1955. Dengan arsitektur kolonial yang
              megah dan interior klasik, gedung ini menggambarkan semangat kebangsaan
              yang tinggi.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
              Hal yang Bisa Dilakukan:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
              <li>Menjelajahi museum yang menyimpan arsip dan artefak terkait Konferensi Asia-Afrika.</li>
              <li>Berfoto di depan gedung dengan latar arsitektur kolonialnya yang ikonik.</li>
            </ul>
          </div>
          <div>
            <img
              src={lokasi2}
              alt="Jalan Asia Afrika"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Konten Kedua */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <div>
          <img
              src={lokasi1}
              alt="Gedung Merdeka"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
              Jalan Asia Afrika: Kawasan Bersejarah yang Hidup
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kawasan ini tidak hanya terkenal sebagai pusat sejarah, tetapi juga sebagai
              tempat yang penuh dengan aktivitas budaya. Sepanjang jalan, Anda akan
              menemukan bangunan tua yang terawat dengan baik, lengkap dengan lampu jalan
              yang menambah kesan nostalgia.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
              Hal yang Bisa Dilakukan:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
              <li>Menyusuri jalan dengan berjalan kaki sambil menikmati suasana tempo dulu.</li>
              <li>Mengunjungi berbagai kafe dan toko suvenir yang menawarkan pengalaman unik.</li>
            </ul>
          </div>
        </div>

        {/* Penutup */}
        <div className="mt-8">
          <h3 className="font-semibold text-[#242277] mb-2">Kenapa Harus Mengunjunginya?</h3>
          <p className="text-gray-600 leading-relaxed">
            Menelusuri jejak sejarah Bandung adalah cara terbaik untuk memahami perjalanan
            bangsa Indonesia dalam kancah internasional. Selain menambah wawasan, Anda
            juga akan merasa lebih dekat dengan semangat perjuangan masa lalu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelKedua;
