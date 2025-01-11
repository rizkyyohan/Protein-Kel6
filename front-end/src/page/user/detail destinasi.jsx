import React from "react";
import { useParams } from "react-router-dom";
import des1 from "./assets/des1.png";
import des2 from "./assets/des2.png";
import des3 from "./assets/des3.png";
import des4 from "./assets/des4.png";
import des5 from "./assets/des5.png";
import des6 from "./assets/des6.png";
import des7 from "./assets/des7.png";
import des8 from "./assets/des8.png";
import des9 from "./assets/des9.png";
import des10 from "./assets/des10.png";
import des11 from "./assets/des11.png";
import des12 from "./assets/des12.png";
import db1 from "./assets/detail wisata image/db1.png";
import db2 from "./assets/detail wisata image/db2.png";
import db3 from "./assets/detail wisata image/db3.png";
import db4 from "./assets/detail wisata image/db4.png";
import db5 from "./assets/detail wisata image/db5.png";
import bs1 from "./assets/detail wisata image/bs1.png";
import bs2 from "./assets/detail wisata image/bs2.png";
import bs3 from "./assets/detail wisata image/bs3.png";
import bs4 from "./assets/detail wisata image/bs4.png";
import bs5 from "./assets/detail wisata image/bs5.png";
import mg1 from "./assets/detail wisata image/mg1.png";
import mg2 from "./assets/detail wisata image/mg2.png";
import mg3 from "./assets/detail wisata image/mg3.png";
import mg4 from "./assets/detail wisata image/mg4.png";
import mg5 from "./assets/detail wisata image/mg5.png";
import fg1 from "./assets/detail wisata image/fg1.png";
import fg2 from "./assets/detail wisata image/fg2.png";
import fg3 from "./assets/detail wisata image/fg3.png";
import fg4 from "./assets/detail wisata image/fg4.png";
import fg5 from "./assets/detail wisata image/fg5.png";
import ts1 from "./assets/detail wisata image/ts1.png";
import ts2 from "./assets/detail wisata image/ts2.png";
import ts3 from "./assets/detail wisata image/ts3.png";
import ts4 from "./assets/detail wisata image/ts4.png";
import ts5 from "./assets/detail wisata image/ts5.png";
import kb1 from "./assets/detail wisata image/kb1.png";
import kb2 from "./assets/detail wisata image/kb2.png";
import kb3 from "./assets/detail wisata image/kb3.png";
import kb4 from "./assets/detail wisata image/kb4.png";
import kb5 from "./assets/detail wisata image/kb5.png";
import tsb1 from "./assets/detail wisata image/tsb1.png";
import tsb2 from "./assets/detail wisata image/tsb2.png";
import tsb3 from "./assets/detail wisata image/tsb3.png";
import tsb4 from "./assets/detail wisata image/tsb4.png";
import tsb5 from "./assets/detail wisata image/tsb5.png";
import msaa1 from "./assets/detail wisata image/msaa1.png";
import msaa2 from "./assets/detail wisata image/msaa2.png";
import msaa3 from "./assets/detail wisata image/msaa3.png";
import msaa4 from "./assets/detail wisata image/msaa4.png";
import msaa5 from "./assets/detail wisata image/msaa5.png";
import fm1 from "./assets/detail wisata image/fm1.png";
import fm2 from "./assets/detail wisata image/fm2.png";
import fm3 from "./assets/detail wisata image/fm3.png";
import fm4 from "./assets/detail wisata image/fm4.png";
import fm5 from "./assets/detail wisata image/fm5.png";
import flg1 from "./assets/detail wisata image/flg1.png";
import flg2 from "./assets/detail wisata image/flg2.png";
import flg3 from "./assets/detail wisata image/flg3.png";
import flg4 from "./assets/detail wisata image/flg4.png";
import flg5 from "./assets/detail wisata image/flg5.png";
import sau1 from "./assets/detail wisata image/sau1.png";
import sau2 from "./assets/detail wisata image/sau2.png";
import sau3 from "./assets/detail wisata image/sau3.png";
import sau4 from "./assets/detail wisata image/sau4.png";
import sau5 from "./assets/detail wisata image/sau5.png";
import mhs1 from "./assets/detail wisata image/mhs1.png";
import mhs2 from "./assets/detail wisata image/mhs2.png";
import mhs3 from "./assets/detail wisata image/mhs3.png";
import mhs4 from "./assets/detail wisata image/mhs4.png";
import mhs5 from "./assets/detail wisata image/mhs5.png";
// Import gambar lainnya...

// Data destinasi
const destinations = [
  {
    id: 1,
    title: "Dusun Bambu Leisure Park",
    description:
      "Dusun Bambu Leisure Park adalah tempat wisata alam di Bandung yang menawarkan suasana asri dan nyaman, serta ramah bagi pengunjung dengan disabilitas. Berbagai fasilitas di sini dirancang untuk memastikan kenyamanan semua pengunjung, termasuk mereka yang menggunakan kursi roda atau memiliki kebutuhan khusus.",
    images: [des1, db1, db2, db3, db4, db5],
    facilities: [
      "Area parkir luas dengan akses mudah.",
      "Jalur ramah kursi roda di seluruh area.",
      "Toilet ramah disabilitas dengan fasilitas lengkap.",
    ],
    reviews: [
      { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
      { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
      { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
    ],
  },
  // Tambahkan destinasi lain di sini...
  {
    id: 2,
    title: "Babakan Siliwangi",
    description:
      "Babakan Siliwangi, sering disebut Baksil adalah salah satu hutan kota tertua di Bandung yang menawarkan suasana alami di tengah hiruk-pikuk kota. Tempat ini menyediakan jalur pedestrian sepanjang 2 km yang dikelilingi pepohonan rindang, sehingga cocok untuk berjalan santai, berolahraga ringan, atau sekadar menikmati udara segar. Tempat ini sering digunakan untuk acara seni dan budaya yang terbuka untuk umum.",
    images: [des2, bs1, bs2, bs3, bs4, bs4, bs5],
    facilities: [
      "Area parkir luas dengan akses mudah.",
      "Jalur ramah kursi roda di seluruh area.",
      "Toilet ramah disabilitas dengan fasilitas lengkap.",
    ],
    reviews: [
      { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
      { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
      { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
    ],
  },
    // Tambahkan destinasi lain di sini...
    {
        id: 3,
        title: "Museum Geologi",
        description:
       "Museum Geologi Bandung adalah tempat bersejarah yang memiliki koleksi lengkap tentang fosil, mineral, dan artefak geologi dari berbagai wilayah Indonesia. Museum ini terbagi dalam beberapa ruangan tematik, seperti ruangan Sejarah Kehidupan dan Sumber Daya Alam. Selain menjadi tempat wisata, museum ini juga sering digunakan untuk kegiatan edukasi siswa dan peneliti.",
        images: [des3, mg1, mg2, mg3, mg4, mg5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 4,
        title: "Fairy Garden",
        description:
          "Fairy Garden adalah taman bertema dongeng yang dirancang untuk menghidupkan imajinasi anak-anak dan keluarga. Tempat ini memiliki beberapa zona tematik, seperti Fairy Kitchen, Flower Garden, dan Art Factory. Selain wahana permainan, pengunjung juga dapat mengikuti berbagai workshop kreatif, seperti seni melukis dan kerajinan tangan.",
        images: [des4, fg1, fg2, fg3, fg4, fg5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 5,
        title: "Taman Lansia",
        description:
          "Taman Lansia adalah salah satu ruang terbuka hijau di Bandung yang didesain untuk memberikan kenyamanan bagi lansia dan penyandang disabilitas. Taman ini dilengkapi dengan jalur pedestrian yang teduh, bangku-bangku untuk bersantai, dan air mancur sebagai daya tarik. Lokasinya yang strategis di dekat Gedung Sate membuat taman ini menjadi tempat favorit untuk bersantai setelah berjalan-jalan di sekitar kawasan tersebut.",
        images: [des5, ts1, ts2, ts3, ts4, ts5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 6,
        title: "Kebun Binatang Bandung",
        description:
         "Kebun Binatang Bandung adalah salah satu destinasi wisata keluarga yang menyuguhkan pengalaman edukasi tentang satwa lokal dan eksotis. Selain koleksi satwa, terdapat area permainan anak, danau kecil untuk berperahu, serta ruang terbuka hijau untuk piknik. Tempat ini sering menjadi tujuan wisata pendidikan bagi sekolah-sekolah di Bandung.",
        images: [des6, kb1, kb2, kb3, kb4, kb5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 7,
        title: "Trans Studio Bandung",
        description:
          "Trans Studio Bandung adalah sebuah taman hiburan indoor terbesar di Indonesia yang terletak di kota Bandung. Dengan berbagai macam wahana seru, pertunjukan menarik, dan fasilitas lengkap, tempat ini menjadi destinasi favorit bagi keluarga. anak-anak dan ramah disabilitas",
        images: [des7, tsb1, tsb2, tsb3, tsb4, tsb5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 8,
        title: "Museum Asia-Afrika",
        description:
       "Museum Konferensi Asia Afrika adalah sebuah museum yang terletak di Bandung, Indonesia, yang menyimpan dan memamerkan sejarah Konferensi Asia Afrika tahun 1955. Konferensi ini merupakan peristiwa bersejarah yang sangat penting dalam sejarah dunia, di mana negara-negara Asia dan Afrika berkumpul untuk membahas masalah-masalah bersama dan mencari solusi perdamaian dunia.",
        images: [des8, msaa1, msaa2, msaa3, msaa4, msaa5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 9,
        title: "Floating Market",
        description:
         "Floating Market Lembang adalah sebuah destinasi wisata unik di Bandung yang menghadirkan suasana pasar apung yang khas. Konsep pasar tradisional yang dipadukan dengan keindahan alam sekitar membuat tempat ini menjadi salah satu favorit wisatawan.",
        images: [des9, fm1, fm2, fm3, fm4, fm5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 10,
        title: "Farmhouse Lembang",
        description:
          "Farmhouse Lembang adalah sebuah destinasi wisata yang menawarkan pengalaman unik dengan konsep pedesaan yang kental. Terletak di kawasan Lembang, Bandung, tempat ini menyuguhkan suasana yang asri dan sejuk, sempurna untuk melepas penat dari hiruk pikuk kota.",
        images: [des10, flg1, flg2, flg3, flg4, flg5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
    // Tambahkan destinasi lain di sini...
    {
        id: 11,
        title: "Saung Angklung Udjo",
        description:
         "Saung Angklung Udjo adalah sebuah tempat yang sangat istimewa di Bandung, Jawa Barat, yang didedikasikan untuk melestarikan dan mengembangkan budaya Sunda, khususnya alat musik tradisional angklung.",
        images: [des11, sau1, sau2, sau3, sau4, sau5],
        facilities: [
          "Area parkir luas dengan akses mudah.",
          "Jalur ramah kursi roda di seluruh area.",
          "Toilet ramah disabilitas dengan fasilitas lengkap.",
        ],
        reviews: [
          { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
          { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
          { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
        ],
      },
                // Tambahkan destinasi lain di sini...
  {
    id: 12,
    title: "Maribaya Hot Spring",
    description:
      "Maribaya Natural Hot Spring adalah sebuah destinasi wisata alam yang populer di Lembang, Bandung. Tempat ini menawarkan pengalaman berendam air panas alami yang menyegarkan dan pemandangan alam yang indah. Dengan konsep yang modern dan fasilitas yang lengkap, Maribaya telah menjadi salah satu tempat favorit bagi wisatawan yang ingin melepas penat dan menikmati keindahan alam.",
      images: [des12, mhs1, mhs2, mhs3, mhs4, mhs5],
    facilities: [
      "Area parkir luas dengan akses mudah.",
      "Jalur ramah kursi roda di seluruh area.",
      "Toilet ramah disabilitas dengan fasilitas lengkap.",
    ],
    reviews: [
      { name: "Andi", review: "Tempatnya sangat nyaman!", rating: 5 },
      { name: "Budi", review: "Fasilitas ramah disabilitas sangat membantu.", rating: 4 },
      { name: "Citra", review: "Pemandangan alamnya luar biasa.", rating: 5 },
    ],
  },
                          
];

const DestinationDetail = () => {
  const { id } = useParams(); // Ambil parameter id dari URL
  const destination = destinations.find((dest) => dest.id === parseInt(id)); // Cari destinasi berdasarkan id

  const [selectedTicket, setSelectedTicket] = React.useState(null); // State untuk data tiket
  const [showPopup, setShowPopup] = React.useState(false); // State untuk kontrol popup

  const handleTicketClick = () => {
    setSelectedTicket({
      adult: "Rp. 20.000,- (Dewasa)",
      child: "Rp. 10.000,- (Anak-anak)",
      info: [
        "Tiket masuk ke area wisata.",
        "Akses kursi roda di area utama.",
        "Fasilitas toilet dan tempat istirahat ramah disabilitas.",
        "Area parkir yang luas.",
      ],
      validity: "Berlaku pada hari yang sama dengan pembelian tiket.",
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedTicket(null);
  };

  if (!destination) {
    return <p>Destinasi tidak ditemukan.</p>;
  }

  return (
    <div className="p-6 bg-[#fefcf4]">
      {/* Header Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6">
  <div className="w-full md:w-2/3 text-center md:text-left">
    <h1 className="text-4xl font-bold text-[#242277]">{destination.title}</h1>
    <h2 className="text-2xl font-semibold text-[#FA9A0A] mt-2">{destination.subtitle}</h2>
    <p className="mt-4 text-gray-600 leading-relaxed">{destination.description}</p>
    <button
      onClick={handleTicketClick}
      className="mt-6 px-6 py-3 bg-[#FA9A0A] text-white rounded-md hover:bg-[#f9880f] transition duration-300"
    >
      Info Tiket
    </button>
  </div>
  <div className="w-full md:w-1/3">
    <img
      src={destination.images[0]}
      alt={destination.title}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
  </div>
</div>


      {/* Spot Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#242277] text-center">
          Spot {destination.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {destination.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Spot ${destination.title} ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Fasilitas Section */}
      <div className="mt-8">
        {/* <h2 className="text-2xl font-bold text-[#FA9A0A]">
          Fasilitas Ramah Disabilitas di {destination.title}
        </h2> */}
        <h2 style={{ textAlign: "center" }} className="text-2xl font-bold text-[#FA9A0A]">
          Fasilitas Ramah Disabilitas di {destination.title}
        </h2>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          {destination.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Review Section */}
      <div className="mt-8">
        {/* <h2 className="text-2xl font-bold text-[#242277]">
          Apa Kata Mereka Tentang {destination.title}
        </h2> */}
        <h2 style={{ textAlign: "center" }} className="text-2xl font-bold text-[#242277]">
          Apa Kata Mereka Tentang {destination.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {destination.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <p className="text-lg font-bold text-[#242277]">{review.name}</p>
              <p className="text-sm text-gray-600 mt-2">{review.review}</p>
              <p className="text-[#FF5722] mt-2 font-semibold">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-400">
                  {"☆".repeat(5 - review.rating)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Section */}
      {showPopup && selectedTicket && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-[#242277]">Tiket masuk {destination.title}</h2>
            <div className="mt-4">
              <p className="text-[#F85E9F] font-medium">{selectedTicket.adult}</p>
              <p className="text-[#F85E9F] font-medium">{selectedTicket.child}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-[#242277]">Harga Termasuk:</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                {selectedTicket.info.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-[#242277]">Masa Berlaku Tiket:</h3>
              <p className="text-gray-600 text-sm mt-2">{selectedTicket.validity}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
