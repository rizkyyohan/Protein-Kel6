import React from "react";
import artikelImage from "./assets/k44.png"; // Ganti dengan path gambar utama
import lokasi1 from "./assets/des16.png"; // Ganti dengan path gambar lokasi 1
import lokasi2 from "./assets/des17.png"; // Ganti dengan path gambar lokasi 2

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
          Menikmati Keindahan
          <span className="text-[#242277]"> Alam Bandung</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Bandung tidak hanya terkenal dengan suasana kota yang dinamis dan modern, 
        tetapi juga memiliki keindahan alam yang memukau dan menenangkan. Dikelilingi oleh pegunungan,
         Bandung menawarkan berbagai destinasi alam yang asri dan menyegarkan. Kota ini menjadi pilihan
         sempurna bagi Anda yang ingin melarikan diri sejenak dari hiruk-pikuk kehidupan perkotaan. 
         Dengan udara yang sejuk dan lingkungan yang hijau, Bandung memberikan pengalaman yang memanjakan mata dan pikiran.
        </p>
        {/* Gambar dan Teks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          <img
            src={lokasi1}
            alt="Saung Angklung Udjo"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            Taman Hutan Raya Ir. H. Djuanda
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Taman Hutan Raya (Tahura) adalah oase alam di tengah kota Bandung. 
            Dengan pepohonan rindang, udara segar, dan berbagai atraksi menarik, tempat ini cocok untuk keluarga, pasangan,
             atau wisatawan solo yang ingin menikmati suasana tenang.
            </p>
            <p className="text-gray-600 leading-relaxed">
            Hal yang bisa dilakukan:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
              <li>Bersantai sambil menikmati pemandangan alam.</li>
              <li>Menjelajahi berbagai gua bersejarah seperti Gua Jepang dan Gua Belanda.</li>
              <li>
              Trekking di jalur alam yang ramah untuk semua kalangan.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          <img
            src={lokasi2}
            alt="Saung Angklung Udjo"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            Curug Omas di Maribaya
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Tidak jauh dari Tahura, Anda dapat menemukan Curug Omas, air terjun indah yang menjadi favorit wisatawan. 
            Dengan aliran air yang deras dan dikelilingi pepohonan hijau, Curug Omas memberikan pengalaman yang menyegarkan.
            </p>
            <p className="text-gray-600 leading-relaxed">
            Hal yang bisa dilakukan:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
              <li>Berfoto dengan latar air terjun yang memukau.</li>
              <li>Menikmati piknik di area yang telah disediakan.</li>
            </ul>
          </div>
        </div>

        {/* Penutup */}
        <div className="mt-8">
          <h3 className="font-semibold text-[#242277] mb-2">Kenapa Harus Mengunjunginya?</h3>
          <p className="text-gray-600 leading-relaxed">
          Keindahan alam Bandung menawarkan ketenangan yang sulit ditemukan di kota besar lainnya. 
          Dengan udara yang sejuk dan pemandangan yang asri, tempat-tempat ini memberikan pengalaman relaksasi sekaligus petualangan 
          yang tak terlupakan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelKedua;
