import React from "react";

const SchedulePage = () => {
  return (
    <div className="flex flex-col items-center px-6 py-8">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Jadwal Pemandu</h1>

      {/* Calendar Section */}
      <div className="flex gap-8 mb-6">
  {[
    {
      name: "Messi",
      location: "Taman Lembah Dewata",
      date: "Minggu, 20 Oktober 2024",
      img: "https://via.placeholder.com/60", // Ganti dengan gambar yang sesuai
    },
    {
      name: "Nyuak",
      location: "Trans Studio Bandung",
      date: "Selasa, 22 Oktober 2024",
      img: "https://via.placeholder.com/60", // Ganti dengan gambar yang sesuai
    },
    {
      name: "Aan Android",
      location: "Taman Lembah Dewata",
      date: "Rabu, 23 Oktober 2024",
      img: "https://via.placeholder.com/60", // Ganti dengan gambar yang sesuai
    },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center border p-4 rounded-lg shadow-md"
    >
      {/* Gambar Icon */}
      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full mb-2" />

      {/* Nama dan Lokasi */}
      <p className="font-semibold">{item.name}</p>
      <p className="text-gray-500 text-sm">{item.location}</p>

      {/* Tanggal */}
      <p className="font-bold text-lg mt-4">{item.date}</p>
    </div>
  ))}
</div>


      {/* Guide Details Card */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md flex flex-col gap-6">
  {/* Bagian Atas - Profil dan Lokasi */}
  <div className="flex flex-col md:flex-row items-start gap-6">
    {/* Profil Pemandu */}
    <div className="flex flex-col items-center md:items-start bg-gray-100 p-4 rounded-lg shadow-sm">
      <img
        src="https://via.placeholder.com/120" // Ganti dengan gambar profil
        alt="Guide"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <div className="text-sm">
        <p><span className="font-semibold">Nama:</span> Messi</p>
        <p><span className="font-semibold">Umur:</span> 22 Tahun</p>
        <p><span className="font-semibold">Disabilitas:</span> Intelektual</p>
        <p><span className="font-semibold">No. HP:</span> 081234567890</p>
      </div>
    </div>

    {/* Detail Lokasi dan Tanggal */}
    <div className="flex flex-1 flex-col gap-4">
      {/* Lokasi Tujuan */}
      <div className="flex items-start gap-4">
        <img
          src="https://via.placeholder.com/60" // Ganti dengan gambar lokasi
          alt="Location"
          className="w-16 h-16 rounded-md object-cover"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Taman Lembah Dewata</h2>
          <p className="text-gray-500">Kab. Bandung Barat</p>
          <p className="text-red-500 font-medium text-sm">4.3 ★</p>
        </div>
        <div className="bg-blue-700 text-white px-3 py-1 rounded-lg text-sm">
          20 Okt <br /> Minggu
        </div>
      </div>

      {/* Detail Lokasi Kumpul */}
      <div>
        <h3 className="text-gray-700 font-semibold mb-2">Detail lokasi Kumpul</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <img
            src="https://via.placeholder.com/300x150" // Ganti dengan gambar map
            alt="Map"
            className="w-full rounded-md mb-2"
          />
          <ul className="text-sm text-gray-600">
            <li>Jalan Telekomunikasi 2</li>
            <li>Sukapura, Kabupaten Bandung, 40267</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Harga Total */}
  <div className="text-right">
    <p className="text-gray-600">Harga Total</p>
    <p className="text-blue-700 font-bold text-2xl">Rp 640.000</p>
  </div>
</div>


      {/* Status Section */}
      <div className="w-full max-w-3xl mt-8">
        <h3 className="text-lg font-semibold mb-4">Status Koordinasi</h3>
        <div className="flex flex-col items-center">
            <select
            className="w-full max-w-md border p-2 rounded-lg mb-4"
            defaultValue=""
            >
                <option value="" disabled>
                    Pilih status
                </option>
                <option value="aktif">Aktif</option>
                <option value="malas">Malas</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Simpan
            </button>
        </div>
        </div>
    </div>
  );
};

export default SchedulePage;
