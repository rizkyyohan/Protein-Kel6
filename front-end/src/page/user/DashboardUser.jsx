import React, { useState } from 'react';

const DashboardPengguna = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const destinations = [
    "Trans Studio Bandung",
    "Farm House Lembang",
    "Dusun Bambu Leisure Park",
    "Orchid Forest Cikole",
    "Saung Angklung Udjo",
    "Tangkuban Perahu",
    "Kawah Putih",
    "Ranca Upas",
    "Museum Geologi Bandung",
    "Alun-Alun Kota Bandung",
    "Gedung Sate",
    "Cihampelas Walk"
  ];

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="TravelAble Logo" className="h-8" />
          <h1 className="text-lg font-bold text-indigo-600">TravelAble</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Chat Pelanggan</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Pemesanan Tersedia</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Jadwal Pemandu</a>
          <div className="text-indigo-600 font-medium">Hi, PEMANDU</div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Welcome Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-indigo-600">Selamat datang di website kami</h2>
              <p className="text-gray-600 mt-2">Kelola jadwal Anda, pantau pesanan, dan berikan pengalaman terbaik untuk para pengguna disabilitas.</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="./src/assets/Group 12460.png"
                alt="Welcome Image"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Eksplor</button>
            </div>
          </div>
        </section>

        {/* Pelayanan Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-2xl font-bold text-orange-600">PELAYANAN</h2>
        <p className="text-gray-700 mt-2">Top pelayanan terbaik kami untuk anda</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Pemandu Disabilitas</h3>
            <p className="text-gray-700 mt-2">
              Pemandu yang akan menjaga penyandang disabilitas
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Rekomendasi Wisata</h3>
            <p className="text-gray-700 mt-2">
              Pengguna dapat melihat destinasi ramah disabilitas
            </p>
          </div>
        </div>
      </section>

        {/* Top Destinations */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Top Destinasi</h3>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
              onClick={handlePrev}
            >
              &#8592;
            </button>
            <div className="overflow-hidden">
              <div className="grid grid-cols-3 gap-4">
                {destinations
                  .slice(currentSlide * ITEMS_PER_PAGE, currentSlide * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                  .map((destinasi, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <img
                        src={`/images/destinasi-${(currentSlide * ITEMS_PER_PAGE + index + 1)}.jpg`}
                        alt={destinasi}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-gray-800">{destinasi}</h4>
                        <p className="text-gray-600 mt-2">Kota Bandung</p>
                        <p className="text-indigo-600 font-semibold mt-2">Rp 20.000 - Rp 50.000</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </section>

        {/* Guide Opportunity Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Mencoba Petualangan Baru sebagai Pemandu</h3>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
              <img src="/images/guide-opportunity.jpg" alt="Guide Opportunity" className="rounded-lg shadow-md w-full" />
            </div>
            <div className="md:w-1/2">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kesempatan dalam meningkatkan tugas sesuai kebutuhan pelanggan.</li>
                <li>Peluang penghasilan yang kompetitif.</li>
                <li>Kenyamanan dalam manajemen pesanan melalui platform ini.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h4 className="font-bold">Tentang TravelAble</h4>
            <p className="text-sm mt-2">Rekomendasi wisata aksesibel untuk disabilitas dengan pemandu wisata terlatih.</p>
            <h5 className="font-semibold mt-4">Panduan Informasi</h5>
            <ul className="text-sm mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Panduan Pengguna</a></li>
              <li><a href="#" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="hover:underline">Kontak & Dukungan</a></li>
              <li><a href="#" className="hover:underline">FAQ's</a></li>
            </ul>
            <p className="mt-6">&copy; TravelAble</p>
          </div>

          {/* Middle Section */}
          <div>
            <h5 className="font-bold">Alamat</h5>
            <p className="text-sm mt-2">Bojongsoang, Bandung</p>
            <h5 className="font-bold mt-4">Email</h5>
            <p className="text-sm mt-2">support@travelable.com</p>
            <h5 className="font-bold mt-4">Hotline</h5>
            <p className="text-sm mt-2">0800-1234-5678</p>
          </div>

          {/* Right Section */}
          <div className="text-center">
            <img src="/logo.png" alt="TravelAble Logo" className="mx-auto h-12" />
            <h5 className="font-bold mt-4">Social Media</h5>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPengguna;
