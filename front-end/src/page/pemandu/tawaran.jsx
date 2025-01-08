import React from "react";
import image1 from "./assets/u1.jpeg";
import image2 from "./assets/u2.jpeg";
import image3 from "./assets/u3.jpeg";
import image4 from "./assets/u4.png";

// Data dummy untuk penawaran
const offers = [
  {
    id: 1,
    name: "Nyual Saputra",
    destination: "Maribaya Natural Hot Spring",
    image: image1,
  },
  {
    id: 2,
    name: "Aan Android Sigma",
    destination: "Trans Studio Bandung",
    image: image2,
  },
  {
    id: 3,
    name: "Messi",
    destination: "Taman Lembah Dewata",
    image: image3,
  },
];

function Offers() {
  return (
    <div className="p-8">
      {/* Header Penawaran */}
      <h1 className="text-2xl font-bold text-black mb-6">Tawaran yang tersedia</h1>

      {/* Daftar Penawaran */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-black">{offer.name}</h3>
              <p className="text-gray-600">{offer.destination}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Penawaran */}
      <div className="border rounded-lg shadow-md p-6 bg-white mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Informasi Pengguna */}
          <div className="flex flex-col items-center">
            <img
              src={image3}
              alt="Messi"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <ul className="text-gray-700 text-sm">
              <li className="flex justify-between">
                <span className="font-medium">Nama:</span>
                <span>Messi</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Umur:</span>
                <span>22 Tahun</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Disabilitas:</span>
                <span>Intelektual</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">No. HP:</span>
                <span>081234567890</span>
              </li>
            </ul>
          </div>

          {/* Informasi Destinasi */}
          <div className="border rounded-md p-4">
            <div className="flex items-center gap-4">
              <img
                src={image4}
                alt="Taman Lembah Dewata"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-bold text-black text-lg">
                  Taman Lembah Dewata
                </h3>
                <p className="text-sm text-gray-600">Kab. Bandung Barat</p>
                <p className="text-sm text-orange-500 font-bold">4.3 ★</p>
              </div>
              <div className="ml-auto text-center">
                <p className="text-xs font-medium text-gray-600">20 Okt</p>
                <p className="text-xs font-medium text-gray-600">Minggu</p>
              </div>
            </div>

            {/* Detail Lokasi Kumpul */}
            <div className="mt-4">
              <h4 className="font-bold text-sm text-gray-700">
                Detail Lokasi Kumpul
              </h4>
              <ul className="text-sm text-blue-500 mt-2 space-y-1">
                <li>• Jalan Telekomunikasi 2</li>
                <li>• Sukapura, Kabupaten Bandung, 40267</li>
              </ul>
            </div>
          </div>

          {/* Harga Total */}
          <div className="flex flex-col justify-between">
            <h4 className="text-xl font-bold text-[#242277]">Harga Total</h4>
            <p className="text-3xl font-bold text-blue-500 mb-4">RP. 640.000</p>
            <div className="flex gap-4">
              <button className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                Terima
              </button>
              <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                Tolak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
