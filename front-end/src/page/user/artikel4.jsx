import React from "react";
import artikelImage from "./assets/k33.png"; // Ganti dengan path gambar utama
import lokasi1 from "./assets/des11.png"; // Ganti dengan path gambar lokasi 1
import lokasi2 from "./assets/des13.png"; // Ganti dengan path gambar lokasi 2

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
          Menjelajahi Budaya
          <span className="text-[#242277]"> Tradisional Bandung</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Bandung adalah kota yang kaya akan budaya tradisional khas Sunda. Salah
          satu cara terbaik untuk merasakan kekayaan budaya ini adalah dengan
          mengunjungi destinasi-destinasi yang menawarkan pengalaman otentik
          budaya lokal. Mulai dari musik tradisional hingga seni pertunjukan,
          budaya Bandung selalu berhasil meninggalkan kesan mendalam bagi para
          pengunjung.
        </p>

        {/* Gambar dan Teks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          <img
            src={lokasi1}
            alt="Saung Angklung Udjo"
            className="w-full h-48 object-cover rounded-lg"
          />
                    <img
            src={lokasi2}
            alt="Tradisi Sunda"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
              Saung Angklung Udjo: Keajaiban Musik Tradisional
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saung Angklung Udjo adalah pusat seni budaya yang menjadi
              kebanggaan Bandung. Di sini, pengunjung dapat:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2">
              <li>Menyaksikan pertunjukan angklung interaktif.</li>
              <li>Belajar memainkan alat musik tradisional ini secara langsung.</li>
              <li>
                Mengenal filosofi angklung sebagai warisan budaya tak benda UNESCO.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-2">
              Pertunjukan di Saung Angklung Udjo tidak hanya menghibur tetapi juga
              mendidik, menjadikannya pengalaman yang tak terlupakan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#242277] mb-2">
              Tradisi Upacara Adat Sunda
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Selain Saung Angklung Udjo, Bandung juga menjadi rumah bagi
              berbagai upacara adat yang masih dilestarikan hingga kini, seperti
              Seren Taun dan Ngarot. Upacara ini menggambarkan rasa syukur
              masyarakat Sunda terhadap alam, lengkap dengan tarian dan musik
              tradisional yang memikat hati.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#242277] mb-2">
            Festival Seni Budaya Bandung
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Setiap tahun, Bandung menjadi tuan rumah berbagai festival budaya yang
            memamerkan keindahan seni lokal, seperti tari jaipong, karawitan, dan
            teater rakyat. Festival ini menjadi ajang yang sempurna untuk memahami
            lebih dalam tentang tradisi Bandung.
          </p>
        </div>

        {/* Penutup */}
        <div className="mt-8">
          <p className="text-gray-600 leading-relaxed">
            Menjelajahi Saung Angklung Udjo tidak hanya memberikan hiburan
            berkualitas tetapi juga wawasan tentang betapa kayanya kebudayaan
            Sunda yang diwariskan dari generasi ke generasi. Segera rencanakan
            kunjungan Anda dan nikmati pengalaman budaya yang otentik di Bandung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtikelKedua;
