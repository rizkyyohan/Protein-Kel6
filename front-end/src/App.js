import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import TentangKami from "./page/user/tentang_kami.jsx";
import ListPemandu from "./page/user/ListPemandu.jsx";
import Pemesanan from "./page/user/pemesanan.jsx";
import Pembayaran from "./page/user/pembayaran.jsx";
import HeaderUser from "./layout/header user.jsx";
import HeaderPemandu from "./layout/header pemandu.jsx";
import Footer from "./layout/footer.jsx";
import LandingPage from "./components/LandingPage.jsx";
import DashboardUser from "./page/user/DashboardUser.jsx";
import Destinasi from "./page/user/destinasi.jsx";
import DashboardPemandu from "./page/pemandu/DashboardPemandu.jsx";
import JadwalPemandu from "./page/pemandu/jadwal pemandu.jsx";
import ChatU from "./page/user/chatU.jsx";
import ChatP from "./page/pemandu/chatP.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tentangkami"
            element={
              <div>
                <HeaderUser />
                <TentangKami />
                <Footer />
              </div>
            }
          />
          <Route
            path="/pemesanan"
            element={
              <div>
                <HeaderUser />
                <Pemesanan />
                <Footer />
              </div>
            }
          />

          <Route
            path="/ListPemandu"
            element={
              <div>
                <HeaderUser />
                <ListPemandu />
                <Footer />
              </div>
            }
          />

          <Route
            path="/ChatU"
            element={
              <div>
                <HeaderUser />
                <ChatU />
                <Footer />
              </div>
            }
          />

          <Route
            path="/ChatP"
            element={
              <div>
                <HeaderPemandu />
                <ChatP />
                <Footer />
              </div>
            }
          />

          <Route
            path="/LandingPage"
            element={
              <div>
                <LandingPage />
                <Footer />
              </div>
            }
          />

          <Route
            path="/DashboardPemandu"
            element={
              <div>
                <HeaderPemandu />
                <DashboardPemandu />
                <Footer />
              </div>
            }
          />

          <Route
            path="/DashboardUser"
            element={
              <div>
                <HeaderUser />
                <DashboardUser />
                <Footer />
              </div>
            }
          />

          <Route
            path="/destinasi"
            element={
              <div>
                <HeaderUser />
                <Destinasi />
                <Footer />
              </div>
            }
          />

          <Route
            path="/pembayaran"
            element={
              <div>
                <HeaderUser />
                <Pembayaran />
                <Footer />
              </div>
            }
          />

          <Route
            path="/jadwalpemandu"
            element={
              <div>
                <HeaderPemandu />
                <JadwalPemandu />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;