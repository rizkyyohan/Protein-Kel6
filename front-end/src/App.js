import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import TentangKami from "./page/user/tentang_kami.jsx";
import ListPemandu from "./page/user/ListPemandu.jsx";
import Pemesanan from "./page/user/pemesanan.jsx";
import Pembayaran from "./page/user/pembayaran.jsx";
import HeaderUser from "./layout/header user.jsx";
import HeaderPemandu from "./layout/header pemandu.jsx";
import Footer from "./layout/footer.jsx";
import DashboardUser from "./page/user/DashboardUser.jsx";
import Destinasi from "./page/user/destinasi.jsx";
import DashboardPemandu from "./page/pemandu/DashboardPemandu.jsx";
import JadwalPemandu from "./page/pemandu/jadwal pemandu.jsx";
import ChatU from "./page/user/chatU.jsx";
import ChatP from "./page/pemandu/chatP.jsx";
import Tawaran from "./page/pemandu/tawaran.jsx";
import DestinationDetail from "./page/user/detail destinasi.jsx";
import Artikel1 from "./page/user/artikel1.jsx";
import Artikel2 from "./page/user/artikel2.jsx";
import Artikel3 from "./page/user/artikel3.jsx";
import Artikel4 from "./page/user/artikel4.jsx";
import Artikel5 from "./page/user/artikel5.jsx";
import EditProfileUser from "./page/user/EditProfileUser.jsx";

const LandingLayout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

const UserLayout = ({ children }) => (
  <div>
    <HeaderUser />
    {children}
    <Footer />
  </div>
);

const PemanduLayout = ({ children }) => (
  <div>
    <HeaderPemandu />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <LandingLayout>
                <LandingPage />
              </LandingLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Pages */}
          <Route
            path="/tentangkami"
            element={
              <UserLayout>
                <TentangKami />
              </UserLayout>
            }
          />
          <Route
            path="/artikel1"
            element={
              <UserLayout>
                <Artikel1 />
              </UserLayout>
            }
          />
          <Route
            path="/artikel2"
            element={
              <UserLayout>
                <Artikel2 />
              </UserLayout>
            }
          />
                    <Route
            path="/artikel3"
            element={
              <UserLayout>
                <Artikel3 />
              </UserLayout>
            }
          />
          <Route
            path="/artikel4"
            element={
              <UserLayout>
                <Artikel4 />
              </UserLayout>
            }
          />
          <Route
            path="/editprofileuser"
            element={
              <UserLayout>
                <EditProfileUser />
              </UserLayout>
            }
          />
                              <Route
            path="/artikel5"
            element={
              <UserLayout>
                <Artikel5 />
              </UserLayout>
            }
          />
          <Route
            path="/pemesanan"
            element={
              <UserLayout>
                <Pemesanan />
              </UserLayout>
            }
          />
          <Route
            path="/listpemandu"
            element={
              <UserLayout>
                <ListPemandu />
              </UserLayout>
            }
          />
          <Route
            path="/chatU"
            element={
              <UserLayout>
                <ChatU />
              </UserLayout>
            }
          />
          <Route
            path="/dashboarduser"
            element={
              <UserLayout>
                <DashboardUser />
              </UserLayout>
            }
          />
          <Route
            path="/destinasi"
            element={
              <UserLayout>
                <Destinasi />
              </UserLayout>
            }
          />
          <Route
            path="/destinasi/:id"
            element={
              <UserLayout>
                <DestinationDetail />
              </UserLayout>
            }
          />
          <Route
            path="/pembayaran"
            element={
              <UserLayout>
                <Pembayaran />
              </UserLayout>
            }
          />

          {/* Pemandu Pages */}
          <Route
            path="/chatP"
            element={
              <PemanduLayout>
                <ChatP />
              </PemanduLayout>
            }
          />
          <Route
            path="/dashboardpemandu"
            element={
              <PemanduLayout>
                <DashboardPemandu />
              </PemanduLayout>
            }
          />
          <Route
            path="/tawaran"
            element={
              <PemanduLayout>
                <Tawaran />
              </PemanduLayout>
            }
          />
          <Route
            path="/jadwalpemandu"
            element={
              <PemanduLayout>
                <JadwalPemandu />
              </PemanduLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
