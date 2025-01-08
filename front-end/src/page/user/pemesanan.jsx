import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

function BookingPage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [showDestinations, setShowDestinations] = useState(false);
  const [showPeopleOptions, setShowPeopleOptions] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [extraAdded, setExtraAdded] = useState(false);
  const location = useLocation();
  const guide = location.state; // Terima data pemandu

  const handleExtraToggle = () => {
    setExtraAdded((prev) => !prev);
  };

  const destinations = [
    "Dusun Bambu",
    "Babakan Siliwangi",
    "Museum Geologi",
    "Fairy Garder",
    "Taman Lansia",
    "Kebun Binatang Bandung",
    "Trans Studio Bandung",
    "Floating Market Lembang",
    "Farmhouse lembang",
    "Saung Angklung Udjo",
    "Maribaya Natural Hot Spring",
  ];

  const peopleOptions = ["1 Orang", "2 Orang", "3 Orang", "4 Orang"];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Hanya angka yang diperbolehkan
      setPhoneNumber(value);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="flex flex-1">
        <div className="w-1/3 bg-white p-6 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">Pemesanan Anda</h2>
          <p className="text-sm text-gray-500 mb-4">Isi data anda pada pemesanan anda</p>
          <img src="https://via.placeholder.com/150" alt="Pemandu" className="rounded-md w-32 h-32 object-cover mb-4" />
          <p className="font-semibold text-gray-700">Rizky Yohan</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Profil Pemandu</button>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Destinasi */}
            <div className="relative">
              <button className="w-full border border-gray-300 p-2 rounded-md text-left" onClick={() => setShowDestinations((prev) => !prev)}>
                📍 Pilih Destinasi
                <span className="float-right">▼</span>
              </button>
              {showDestinations && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-full z-10">
                  {destinations.map((destination) => (
                    <div
                      key={destination}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedDestination(destination);
                        setShowDestinations(false);
                      }}
                    >
                      {destination}
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-2 w-full border border-gray-300 p-2 rounded-md bg-gray-100">{selectedDestination || "Belum memilih destinasi"}</div>
            </div>

            {/* Mulai Kapan */}
            <div className="relative">
              <button className="w-full border border-gray-300 p-2 rounded-md text-left flex justify-between items-center" onClick={() => setShowCalendar(!showCalendar)}>
                📅 Mulai Kapan
                <span>▼</span>
              </button>

              {/* Dropdown Kalender */}
              {showCalendar && (
                <div className="absolute bg-white shadow-md p-4 rounded-md z-10 mt-2">
                  <div className="flex gap-4">
                    {/* Kalender Mulai */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mulai</label>
                      <input type="date" className="border border-gray-300 p-2 rounded-md w-full" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>

                    {/* Kalender Selesai */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Selesai</label>
                      <input
                        type="date"
                        className="border border-gray-300 p-2 rounded-md w-full"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate} // Tanggal selesai minimal harus setelah tanggal mulai
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-2 w-full border border-gray-300 p-2 rounded-md bg-gray-100">{startDate && endDate ? `${startDate} - ${endDate}` : "Belum memilih tanggal"}</div>
            </div>

            {/* Berapa Orang */}
            <div className="relative">
              <button className="w-full border border-gray-300 p-2 rounded-md text-left" onClick={() => setShowPeopleOptions((prev) => !prev)}>
                👥 Berapa Orang?
                <span className="float-right">▼</span>
              </button>
              {showPeopleOptions && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-full z-10">
                  {peopleOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedPeople(option);
                        setShowPeopleOptions(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-2 w-full border border-gray-300 p-2 rounded-md bg-gray-100">{selectedPeople || "Belum memilih jumlah orang"}</div>
            </div>
          </div>

          {/* Data Pemesan */}
          <div>
            <h3 className="text-lg font-bold mb-2">Data Pemesan</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <input type="text" className="border border-gray-300 w-full p-2 rounded-md" placeholder="Nama Lengkap" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">No Handphone</label>
                <input type="text" className="border border-gray-300 w-full p-2 rounded-md" placeholder="No Handphone" value={phoneNumber} onChange={handlePhoneNumberChange} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="border border-gray-300 w-full p-2 rounded-md" placeholder="Email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-2">Alamat Lengkap</label>
                <input type="text" className="border border-gray-300 w-full p-2 rounded-md" placeholder="Alamat Lengkap" />
              </div>
            </div>
          </div>

          {/* Sering Ditambahkan */}
          <div className="mt-8 p-4 border rounded-md shadow-md text-gray">
            <h3 className="text-[#242277] font-bold mb-2">Sering Ditambahkan Ke Pesanan</h3>
            <div className="flex items-center">
              <input type="checkbox" id="extraProtection" checked={extraAdded} onChange={handleExtraToggle} className="w-5 h-5 mr-4" />
              <label htmlFor="extraProtection" className="text-lg font-semibold">
                Perlindungan Extra
              </label>
            </div>
            <p className="mt-2 text-sm">Perlindungan Extra adalah layanan tambahan dari Pemandu TravelAble untuk mempersiapkan peralatan medis tambahan seperti P3K dan alat lainnya yang bisa didiskusikan di kolom chat.</p>
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="font-bold">Info</span>
              <span className="font-bold">RP. 50.000/pax</span>
            </div>
          </div>

          {/* Detail Lokasi Kumpul */}
          <div className="mt-8 p-4 border rounded-md shadow-md bg-white">
            <h3 className="text-[#242277] text-lg font-bold mb-4">Detail Lokasi Kumpul</h3>
            <div className="rounded-md overflow-hidden mb-4">
              <img src="https://via.placeholder.com/500x300" alt="Lokasi Kumpul" className="w-full" />
            </div>
            <ul className="text-sm text-gray-700 list-disc pl-4">
              <li>Jalan Telekomunikasi 2</li>
              <li>Sukapura, Kabupaten Bandung, 40267</li>
            </ul>
          </div>
          {/*buatkan rincian harga tepat berada di bawah di detail lokasi kumpul*/}
          {/* Rincian Harga */}
          <div className="mt-4 p-4 border rounded-md shadow-md bg-white">
            <h3 className="text-[#FA9A0A] text-lg font-bold mb-4">Rincian Harga</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Harga yang Anda bayar</span>
              <span className="text-lg font-bold text-[#FA9A0A]">RP. 420.000</span>
            </div>
            <hr className="my-2 border-[#FA9A0A]-300" />
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Paket (1x)</span>
              <span className="font-bold">RP. 320.000</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Pemandu Spesialis</span>
              <span className="font-bold">RP. 50.000</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Titik Penjemputan</span>
              <span className="font-bold">RP. 50.000</span>
            </div>
          </div>
          {/* Button Lanjutkan Ke Pembayaran */}
          <div className="mt-4 flex justify-end">
            <button className="bg-[#FA9A0A] text-white px-6 py-3 rounded-md hover:bg-[#e58907] shadow-md" onClick={() => (window.location.href = "/pembayaran")}>
              Lanjutkan Ke Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
