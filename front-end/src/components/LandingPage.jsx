import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-white py-10 px-5 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mulai perjalanan Anda dengan <span className="text-orange-500">TravelAble</span> dan jelajahi destinasi tanpa batas!
        </h1>
        <p className="text-lg mb-6">
          Rencanakan dan pesan perjalanan sempurna Anda dengan saran ahli, kiat perjalanan, informasi destinasi, dan inspirasi dari kami!
        </p>
      </header>

      {/* Destinasi Populer Section */}
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Destinasi Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Kebun Binatang Bandung</h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Farm House Susu Lembang</h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Dusun Bambu Leisure Park</h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">Babakan Siliwangi</h3>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-5 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">TravelAble Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Mau liburan ke Bandung? Sambangi wisata terkenalnya</h3>
            <p className="text-sm text-gray-600">Tips</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Menyelami Budaya Sunda di Saung Angklung Udjo</h3>
            <p className="text-sm text-gray-600">Artikel</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Serunya Berpetualang di Trans Studio Bandung</h3>
            <p className="text-sm text-gray-600">Artikel</p>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <p className="text-lg font-bold">Asuransi yang terjamin saat Anda dalam perjalanan</p>
          </div>
          <div className="p-4">
            <p className="text-lg font-bold">Privasi yang terjamin</p>
          </div>
          <div className="p-4">
            <p className="text-lg font-bold">Waktu yang cepat saat mem-booking</p>
          </div>
        </div>
      </section>

      {/* Eksplor Section */}
      <section className="py-10 px-5 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dengan <span className="text-orange-500">Pengalaman Kami</span>, Kami Akan <span className="text-orange-500">Melayani Anda</span>
          </h2>
          <p className="text-lg mb-4">
            Halo, Para wisatawan! Kami percaya bahwa dunia ini indah dan layak dijelajahi oleh semua orang, termasuk Anda!
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-bold">Eksplor</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-10 px-5">
        <div className="text-center">
          <p className="mb-4">© 2024 TravelAble</p>
          <p>Alamat: Bojongsoang, Bandung | Email: support@travelable.com | Hotline: 0800-1234-5678</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
