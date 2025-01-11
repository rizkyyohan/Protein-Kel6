import React, { useState, useEffect } from "react";

const Chat = () => {
  const [contacts, setContacts] = useState([]); // State untuk kontak
  const [selectedContact, setSelectedContact] = useState(null); // Kontak yang dipilih
  const [messages, setMessages] = useState([]); // State untuk pesan
  const [newMessage, setNewMessage] = useState(""); // State untuk pesan baru
  const [errorMessage, setErrorMessage] = useState(""); // State untuk error

  // Fetch data kontak saat komponen dimuat
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/contacts"); // API GET untuk kontak
        const data = await response.json();
        if (response.ok) {
          setContacts(data); // Simpan data kontak ke state
        } else {
          console.error("Gagal mengambil kontak:", data.message);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  // Fetch data pesan berdasarkan kontak yang dipilih
  useEffect(() => {
    if (!selectedContact) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/chats?receiverId=${selectedContact.id}` // Filter pesan berdasarkan kontak
        );
        const data = await response.json();
        if (response.ok) {
          setMessages(data); // Simpan pesan ke state
        } else {
          setErrorMessage(data.message || "Gagal mengambil data chat");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        setErrorMessage("Terjadi kesalahan pada server.");
      }
    };

    fetchMessages();
  }, [selectedContact]);

  // Fungsi untuk mengirim pesan baru
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedContact) return; // Jangan kirim pesan kosong atau tanpa kontak

    try {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage
      if (!token) {
        console.error("Token tidak ditemukan.");
        alert("Anda harus login terlebih dahulu.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sertakan token di header Authorization
        },
        body: JSON.stringify({
          senderId: "677d32061e9c8cee067ebb9", // Ganti dengan ID user aktif
          receiverId: selectedContact.id, // Gunakan ID kontak yang dipilih
          isi_chat: newMessage,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) => [...prevMessages, data]); // Tambahkan pesan baru ke state
        setNewMessage(""); // Reset input
      } else {
        console.error("Gagal mengirim pesan:", data.message);
        alert(data.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error("Error saat mengirim pesan:", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

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
        {/* Render kontak */}
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={index}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b ${
                selectedContact?.id === contact.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedContact(contact)} // Set kontak yang dipilih
            >
              <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-700 font-semibold">
                  {contact.name.charAt(0)}
                </span>
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
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          {selectedContact ? (
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-700 font-semibold">
                  {selectedContact.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{selectedContact.name}</p>
                <p className="text-xs text-gray-500">{selectedContact.role}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Pilih kontak untuk memulai chat</p>
          )}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.senderId === "677d32061e9c8cee067ebb9" // Ganti ID ini dengan user aktif
                  ? "justify-end"
                  : ""
              }`}
            >
              <div
                className={`flex flex-col ${
                  message.senderId === "677d32061e9c8cee067ebb9"
                    ? "items-end"
                    : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-sm ${
                    message.senderId === "677d32061e9c8cee067ebb9"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {message.isi_chat}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        {selectedContact && (
          <div className="p-4 bg-white border-t flex items-center space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Kirim
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
