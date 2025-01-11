import React from "react";
import { useParams } from "react-router-dom";
import artikelImage from "./assets/des.webp"; // Ganti dengan path gambar utama
import lokasi1 from "./assets/des18.png"; // Ganti dengan path gambar lokasi 1
import lokasi2 from "./assets/des19.png"; // Ganti dengan path gambar lokasi 2
import lokasi3 from "./assets/des20.png"; // Ganti dengan path gambar lokasi 3

const Artikel = () => {
  //   const { id } = useParams(); // Ambil id dari parameter URL (jika menggunakan dinamis)

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#242277] mb-4">
            TravelAbel
            <span className="text-[#FA9A0A]">Artikel</span>
        </h1>
        <img
          src={artikelImage}
          alt="Pesona Bandung"
          className="w-full max-h-500 object-cover rounded-lg mb-6"
        />
        <h2 className="text-4xl  text-[#FA9A0A] mb-4">
          Pesona Bandung yang
          <span className="text-[#242277]"> Tak Terlupakan</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Bandung adalah kota yang selalu menghadirkan kejutan. Terletak di kaki
          Gunung Tangkuban Perahu, kota ini dikenal sebagai destinasi favorit
          untuk wisata alam, kuliner, dan sejarah. Artikel ini akan membahas
          beberapa tempat yang wajib Anda kunjungi saat berwisata ke Bandung.
        </p>

        {/* Tempat 1 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            1. Trans Studio Bandung
          </h2>
          <p>
            Kenapa Tak Terlupakan?
          </p>
          <p className="text-gray-600 leading-relaxed">
          Sebagai taman bermain indoor terbesar di Asia Tenggara, Trans Studio Bandung menghadirkan pengalaman seru dan berkesan dengan berbagai wahana kelas dunia yang cocok untuk semua kalangan.
          </p>
          <img
            src={lokasi1}
            alt="Trans Studio Bandung"
            className="w-full max-h-48 object-cover rounded-lg mb-4"
          />
        </div>

        {/* Tempat 2 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            2. Dusun Bambu
          </h2>
          <p>Kenapa Tak Terlupakan</p>
          <p className="text-gray-600 leading-relaxed">
          Dusun Bambu menghadirkan suasana tenang di tengah keindahan alam pegunungan. Tempat ini memadukan konsep wisata alam dengan kenyamanan modern, menciptakan pengalaman yang sulit dilupakan.
          </p>
          <img
            src={lokasi2}
            alt="Dusun Bambu"
            className="w-full max-h-48 object-cover rounded-lg mb-4"
          />
        </div>

        {/* Tempat 3 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            3. Saung Angklung Udjo
          </h2>
          <p>Kenapa Tak Terlupakan?</p>
          <p className="text-gray-600 leading-relaxed">
          Sebagai pusat seni dan budaya, Saung Angklung Udjo menawarkan pengalaman mendalam tentang tradisi Sunda melalui musik angklung interaktif dan pertunjukan seni lainnya. Ini adalah tempat yang sempurna untuk menikmati pesona budaya lokal.
          </p>
          <img
            src={lokasi3}
            alt="Saung Angklung Udjo"
            className="w-full max-h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
        Bandung tidak hanya menawarkan tempat wisata yang memukau, tetapi juga menghadirkan pengalaman yang inklusif bagi semua kalangan. Dengan fasilitas yang terus diperbarui dan dukungan terhadap aksesibilitas, Bandung membuktikan diri sebagai kota yang ramah bagi wisatawan, termasuk penyandang disabilitas. Setiap destinasi menawarkan keunikan tersendiri, memastikan setiap momen yang Anda habiskan di Bandung menjadi kenangan yang tak terlupakan.
        </p>

        {/* Penutup */}
        <div className="mt-8">
          <p className="text-gray-600 leading-relaxed">
            Jadi, tunggu apa lagi? Segera rencanakan perjalanan Anda ke Bandung
            dan nikmati pengalaman tak terlupakan di tempat-tempat terbaik ini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
