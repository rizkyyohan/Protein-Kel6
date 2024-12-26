import React from "react";

const Chat = () => {
  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 max-w-xs bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <input
            type="text"
            placeholder="Cari Kontak"
            className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <ul>
          {[
            { name: "Rizky Yohan", role: "Pemandu Pria" },
            { name: "Hanna Anisa", role: "Pemandu Wanita" },
            { name: "Fadhlurahman Ferry", role: "Pemandu Pria" },
            { name: "Yuna", role: "Pemandu Wanita" },
            { name: "Asep Racing", role: "Pemandu Pria" },
            { name: "Daffa Efesus", role: "Pemandu Pria" },
            { name: "Park Somi", role: "Pemandu Wanita" },
          ].map((contact, index) => (
            <li
              key={index}
              className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b"
            >
              <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                {/* Placeholder for Avatar */}
                <span className="text-gray-700 font-semibold">{contact.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-700 font-semibold">R</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Rizky Yohan</p>
              <p className="text-xs text-gray-500">Pemandu Pria</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <i className="fas fa-phone text-gray-500"></i>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <i className="fas fa-video text-gray-500"></i>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <i className="fas fa-ellipsis-v text-gray-500"></i>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          <div className="flex">
            <div className="flex flex-col items-start">
              <div className="bg-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700">
                Hallo perkenalkan Nama saya Rizky Yohan, pemandu wisata Anda hari ini. Apa ada yang ingin Anda tanyakan sebelum kita mulai?
              </div>
              <span className="text-xs text-gray-500 mt-1">8:00 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex flex-col items-end">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                Terima kasih, Mas Rizky. Apakah kita akan mengunjungi semua tempat dalam paket wisata ini?
              </div>
              <span className="text-xs text-gray-500 mt-1">8:00 PM</span>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-start">
              <div className="bg-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700">
                Iya, kita akan mengunjungi semua tempat yang tertera termasuk tempat spot foto yang populer. Apakah ada tempat tertentu yang Anda tunggu-tunggu?
              </div>
              <span className="text-xs text-gray-500 mt-1">8:01 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex flex-col items-end">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                Saya penasaran dengan situs peninggalan sejarahnya. Apakah kita bisa mendapatkan informasi detail di sana?
              </div>
              <span className="text-xs text-gray-500 mt-1">8:02 PM</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tulis pesan..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" href="chat.jsx">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
