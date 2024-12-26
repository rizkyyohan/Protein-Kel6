import React from 'react';

const TravelAble = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-900">TravelAble</div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Masuk</button>
      </header>

      {/* Hero Section */}
      <section className="p-10 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Mulai perjalanan Anda dengan <span className="text-orange-500">TravelAble</span> dan jelajahi destinasi tanpa batas!</h1>
        <p className="text-gray-600 mb-8">Rencanakan dan pesan perjalanan sempurna Anda dengan saran ahli, kiat perjalanan, informasi destinasi, dan inspirasi dari kami!</p>
      </section>

      {/* Popular Destinations */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Destinasi Populer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['Kebun Binatang Bandung', 'Farm House Susu Lembang', 'Dusun Bambu Leisure Park', 'Babakan Siliwangi'].map((destination, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <img src={`/images/destination-${index + 1}.jpg`} alt={destination} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-blue-900">{destination}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">TravelAble Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <img src="/images/blog-1.jpg" alt="Blog" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Mau liburan ke Bandung? Sambangi wisata terkenalnya</h3>
            <p className="text-gray-600">Tips untuk menjelajahi Bandung dan sekitarnya.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Artikel</h3>
            <p className="text-gray-600">Menyelami budaya Sunda di Saung Angklung Udjo.</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Dengan Pengalaman Kami, Kami Akan Melayani Anda</h2>
        <p className="text-gray-600 mb-8">Kami percaya bahwa dunia ini indah dan layak dijelajahi oleh semua orang, termasuk Anda!</p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">Eksplor</button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Tentang TravelAble</h3>
            <p className="text-sm">Platform wisata aksesibel untuk disabilitas dengan pemandu wisata terbaik.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Panduan Informasi</h3>
            <ul className="text-sm space-y-2">
              <li>Panduan Pengguna</li>
              <li>Tentang Kami</li>
              <li>Kontak Dukungan</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Hubungi Kami</h3>
            <ul className="text-sm space-y-2">
              <li>Alamat: Bojongsoang, Bandung</li>
              <li>Email: support@travelable.com</li>
              <li>Hotline: 0800-1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">© TravelAble</div>
      </footer>
    </div>
  );
};

export default TravelAble;
