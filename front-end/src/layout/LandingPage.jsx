import React from 'react';
import { MapPin, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const popularDestinations = [
  { title: "Kebun Binatang Bandung", image: "/api/placeholder/300/200" },
  { title: "Farm House Susu Lembang", image: "/api/placeholder/300/200" },
  { title: "Dusun Bambu Leisure Park", image: "/api/placeholder/300/200" },
  { title: "Belanja Sitewew", image: "/api/placeholder/300/200" }
];

const blogPosts = [
  { title: "Mau Roaming ke Bandung? Simak tips terpentingnya!", image: "/api/placeholder/400/200" },
  { title: "Menjelajahi Budaya Sunda di Saung Angklung Udjo", image: "/api/placeholder/200/150" },
  { title: "Rekomendasi Tempat Studio Bandung", image: "/api/placeholder/200/150" }
];

const TravelAbleLanding = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="font-bold text-xl">TravelAble</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Masuk
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mulai perjalanan Anda dengan{' '}
            <span className="text-blue-600">TravelAble</span> dan jelajahi destinasi
            tanpa batas!
          </h1>
          <p className="text-gray-600 mb-8">
            Rencanakan dan jalani perjalanan sempurna Anda dengan saran oke!
            kiat perjalanan, informasi destinasi, dan inspirasi dari kami
          </p>
        </div>
        <div className="relative">
          <img 
            src="/api/placeholder/500/400"
            alt="Travel"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">Destinasi Populer</h2>
        <p className="text-gray-600 mb-8">Liburan untuk membuat perjalanan Anda menyenangkan!</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularDestinations.map((dest, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-600">TravelAble</span> Blog
          </h2>
          <button className="text-blue-600 font-semibold">Selengkapnya</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Asuransi yang terjamin saat anda dalam perjalanan</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Privasi yang terjamin</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Waktu yang cepat saat mem-booking</h3>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12 bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="/api/placeholder/200/200" alt="Building 1" className="rounded-lg" />
            <img src="/api/placeholder/200/200" alt="Building 2" className="rounded-lg" />
            <img src="/api/placeholder/400/300" alt="Building 3" className="col-span-2 rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Dengan <span className="text-orange-500">Pengalaman Kami</span>,<br />
              Kami Akan <span className="text-blue-600">Melayani Anda</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Halo, Para wisatawan! Kami percaya bahwa dunia ini
              indah dan perlu dijelajahi! Sebagai pemandu yang
              terpercaya Anda dengan bantuan spesial
            </p>
            <button 
              onClick={handleExploreClick} // Add onClick handler
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Eksplor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelAbleLanding;
