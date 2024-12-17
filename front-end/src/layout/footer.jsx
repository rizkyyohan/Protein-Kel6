import React from "react";
import logo from "../assets/logo123.png";

function Footer() {
  return (
    <footer className="bg-[#242277] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Kolom 1: Tentang TravelAble */}
        <div>
          <h2 className="text-lg font-bold">Tentang TravelAble</h2>
          <p className="mt-2 text-sm">
            Rekomendasi wisata aksesibel untuk disabilitas dengan pemandu wisata terlatih.
          </p>
          <h2 className="text-lg font-bold mt-6">Panduan Informasi</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#panduan" className="hover:underline">Panduan Pengguna</a></li>
            <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#kontak" className="hover:underline">Kontak & Dukungan</a></li>
            <li><a href="#faq" className="hover:underline">FAQ's</a></li>
          </ul>
        </div>

        {/* Kolom 2: Alamat, Email, Hotline */}
        <div className="space-y-6">
          {/* Alamat */}
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png" 
              alt="alamat" 
              className="w-6 h-6"
            />
            <div>
              <span className="font-bold block">Alamat:</span>
              <span>Bojongsoang, Bandung</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
              alt="email" 
              className="w-6 h-6"
            />
            <div>
              <span className="font-bold block">Email:</span>
              <span>support@travelable.com</span>
            </div>
          </div>

          {/* Hotline */}
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/15/15476.png" 
              alt="hotline" 
              className="w-6 h-6"
            />
            <div>
              <span className="font-bold block">Hotline:</span>
              <span>0800-1234-5678</span>
            </div>
          </div>
        </div>

        {/* Kolom 3: Logo dan Media Sosial */}
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="TravelAble Logo"
              className="w-32 h-auto object-contain"
            />
          </div>
          <h2 className="text-lg font-bold">Social Media</h2>
          <div className="flex justify-center space-x-4">
            <a href="#facebook" className="hover:opacity-75">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" 
                alt="Facebook" 
                className="w-6 h-6"
              />
            </a>
            <a href="#twitter" className="hover:opacity-75">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" 
                alt="Twitter" 
                className="w-6 h-6"
              />
            </a>
            <a href="#instagram" className="hover:opacity-75">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                className="w-6 h-6"
              />
            </a>
            <a href="https://wa.me/088227805724" className="hover:opacity-75">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        © TravelAble
      </div>
    </footer>
  );
}

export default Footer;
