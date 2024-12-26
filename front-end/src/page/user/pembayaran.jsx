import React, { useState, useEffect } from "react";
import qrisImg from './assets/qris.webp';
import ewalletImg from './assets/ewalet.webp';
import bcaImg from './assets/bca.webp';
import mandiriImg from './assets/mandiri.webp';
import briImg from './assets/bri.webp';
import dkiImg from './assets/bankdki.webp';

function PaymentPage() {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 jam dalam detik
  const [selectedVirtual, setSelectedVirtual] = useState(""); // State Virtual Account
  const [selectedMethod, setSelectedMethod] = useState(""); // State untuk metode lainnya

  // Hitung mundur waktu pembayaran
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    // Reset selected virtual account if not selecting virtual account method
    if (method !== "virtualAccount") {
      setSelectedVirtual("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4">
      {/* Bagian Kiri */}
      <div className="flex-1 bg-white rounded-md p-6 shadow-md mb-4 md:mb-0">
        <p className="text-sm text-gray-600 mb-4 bg-[#D9D9D9] rounded-md p-2">
          Yuk selesaikan pembayaran dalam{" "}
          <span className="text-orange-500 font-semibold">
            {formatTime(timeLeft)}
          </span>
        </p>

        <h2
          className="text-lg font-semibold mb-4 flex items-center cursor-pointer"
          onClick={() => handleMethodChange("virtualAccount")}
        >
          <div
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center mr-3 ${
              selectedMethod === "virtualAccount"
                ? "border-[#242277] bg-[#242277]"
                : "border-gray-400"
            }`}
          >
            {selectedMethod === "virtualAccount" && (
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            )}
          </div>
          Virtual Account
        </h2>
        {/* Virtual Account */}
        {selectedMethod === "virtualAccount" && (
          <div className="pl-6">
            {[
              { bank: "BCA Virtual Account", img: bcaImg },
              { bank: "BRI Virtual Account", img: briImg },
              { bank: "Mandiri Virtual Account", img: mandiriImg },
              { bank: "DKI Virtual Account", img: dkiImg },
            ].map(({ bank, img }) => (
              <label
                key={bank}
                className={`flex items-center p-2 border rounded-md cursor-pointer ${
                  selectedVirtual === bank ? "border-blue-500 bg-[#B3DBFF]" : ""
                } mb-2`}
              >
                <input
                  type="radio"
                  name="virtualAccount"
                  value={bank}
                  checked={selectedVirtual === bank}
                  onChange={() => setSelectedVirtual(bank)}
                  className="hidden"
                />
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <img src={img} alt={bank} className="w-full h-full object-contain rounded-md" />
                </div>
                <span className="text-gray-700 font-medium">{bank}</span>
              </label>
            ))}
          </div>
        )}
        {/* E-Wallet */}
        <div className="mt-4">
          <label
            className={`flex items-center p-2 border rounded-md cursor-pointer ${
              selectedMethod === "ewallet" ? "border-blue-500 bg-[#B3DBFF]" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="ewallet"
              checked={selectedMethod === "ewallet"}
              onChange={() => handleMethodChange("ewallet")}
              className="hidden"
            />
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <img src={ewalletImg} alt="E-Wallet" className="w-full h-full object-contain rounded-md" />
            </div>
            <span className="text-gray-700 font-medium">E-Wallet</span>
          </label>
        </div>

        {/* QRIS */}
        <div className="mt-4">
          <label
            className={`flex items-center p-2 border rounded-md cursor-pointer ${
              selectedMethod === "qris" ? "border-blue-500 bg-[#B3DBFF]" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="qris"
              checked={selectedMethod === "qris"}
              onChange={() => handleMethodChange("qris")}
              className="hidden"
            />
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <img src={qrisImg} alt="QRIS" className="w-full h-full object-contain rounded-md" />
            </div>
            <span className="text-gray-700 font-medium">QRIS</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            className="mt-6 py-2 px-4 rounded-md text-white font-semibold bg-[#FA9A0A] hover:bg-[#242277] focus:outline-none"
          >
            Lanjutkan
          </button>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full md:w-1/3 bg-white rounded-md p-6 shadow-md">
        <div className="flex items-center justify-between mb-4 bg-[#D9D9D9]">
          <h3 className="text-[#242277] text-sm font-semibold">Rincian tiket</h3>
          <p className="text-[#242277] text-sm">
            <strong>No. pesanan:</strong> 00011
          </p>
        </div>
        <p className="text-gray-700 mb-2">
          <strong>Detail pesanan:</strong>
        </p>
        <p className="text-[#242277] mb-2">
          <strong>Pemandu Rizky Yohan</strong>
        </p>
        <p className="text-[#A1A1A1] mb-2">Masa Berlaku: Rab, 20 Okt 2024</p>
        <p className="text-[#A1A1A1] mb-2">Jumlah tamu: Paket 1</p>
        <p className="text-[#A1A1A1] mb-2">Nama: Messi</p>
        <p className="text-[#A1A1A1] mb-2">Nomor: 089xxxx</p>
        <p className="text-[#A1A1A1] mb-2">Email: jumpa@gmail.com</p>
      </div>
    </div>
  );
}

export default PaymentPage;
