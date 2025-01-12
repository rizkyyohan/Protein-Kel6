import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const guide = location.state?.guide; // Data pemandu dari state

  // Redirect jika tidak ada data pemandu
  useEffect(() => {
    if (!guide) {
      navigate("/listpemandu");
    } else {
      setTotalPrice(guide.price); // Inisialisasi total harga dengan harga pemandu
    }
  }, [guide, navigate]);

  // Fungsi untuk toggle perlindungan ekstra
  const handleExtraToggle = () => {
    setExtraAdded((prev) => {
      const newExtraAdded = !prev;
      setTotalPrice((prevTotal) => (newExtraAdded ? prevTotal + 50000 : prevTotal - 50000));
      return newExtraAdded;
    });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage
  
    if (!token) {
      alert("Token tidak ditemukan. Silakan login ulang.");
      navigate("/login"); // Redirect ke halaman login
      return;
    }
  
    const data = {
      pengguna: localStorage.getItem("userId"), // Ambil ID pengguna dari localStorage
      pemandu: guide._id, // ID pemandu dari state guide
      destinasi: selectedDestination,
      tanggal_pemesanan: `${startDate} - ${endDate}`,
      alamat: "Alamat lengkap diambil dari form input", // Sesuaikan dari form
      status: "Pending",
      jumlah_orang: parseInt(selectedPeople.split(" ")[0]), // Ambil angka dari string (misalnya "2 Orang")
      total_harga: totalPrice,
      tambahan_perlindungan: extraAdded,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/pemesanan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sertakan token di header
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Pemesanan berhasil disimpan.");
        navigate("/pembayaran"); // Redirect ke halaman pembayaran
      } else {
        alert(`Gagal menyimpan pemesanan: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menyimpan pemesanan.");
    }
  };
  

  // Fungsi untuk menangani perubahan nomor telepon
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="flex flex-1">
        <div className="w-1/3 bg-white p-6 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">Pemesanan Anda</h2>
          <p className="text-sm text-gray-500 mb-4">Isi data anda pada pemesanan anda</p>
          {guide ? (
            <>
              <img src={guide.image} alt={guide.name} className="rounded-md w-32 h-32 object-cover mb-4" />
              <p className="font-semibold text-gray-700">{guide.name}</p>
              <p className="text-sm text-gray-500">{guide.location}</p>
              <p className="text-sm text-orange-500 mt-2">Rp {guide.price.toLocaleString()}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Profil Pemandu</button>
            </>
          ) : (
            <p className="text-red-500">Data pemandu tidak tersedia.</p>
          )}
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
              {showCalendar && (
                <div className="absolute bg-white shadow-md p-4 rounded-md z-10 mt-2">
                  <div className="flex gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mulai</label>
                      <input type="date" className="border border-gray-300 p-2 rounded-md w-full" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Selesai</label>
                      <input
                        type="date"
                        className="border border-gray-300 p-2 rounded-md w-full"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate}
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
                <input type="email" className="border border-gray-300 w-full p-2 rounded-md" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-2">Alamat Lengkap</label>
                <input type="text" className="border border-gray-300 w-full p-2 rounded-md" placeholder="Alamat Lengkap" />
              </div>
            </div>
          </div>

          {/* Rincian Harga */}
          <div className="mt-4 p-4 border rounded-md shadow-md bg-white">
            <h3 className="text-[#FA9A0A] text-lg font-bold mb-4">Rincian Harga</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Harga yang Anda bayar</span>
              <span className="text-lg font-bold text-[#FA9A0A]">Rp {totalPrice.toLocaleString()}</span>
            </div>
            <hr className="my-2 border-[#FA9A0A]-300" />
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Harga Pemandu</span>
              <span className="font-bold">Rp {guide.price.toLocaleString()}</span>
            </div>
            {extraAdded && (
              <div className="flex justify-between items-center text-sm mb-2">
                <span>Perlindungan Extra</span>
                <span className="font-bold">Rp 50.000</span>
              </div>
            )}
          </div>

          {/* Button Lanjutkan Ke Pembayaran */}
          <div className="mt-4 flex justify-end">
            <button
              className="bg-[#FA9A0A] text-white px-6 py-3 rounded-md hover:bg-[#e58907] shadow-md"
              onClick={handleSubmit}
            >
            Lanjutkan Ke Pembayaran
            </button>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
