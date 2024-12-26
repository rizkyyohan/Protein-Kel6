import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login.jsx'; // Pastikan huruf kapital
import Register from './components/register.jsx';
import TentangKami from './page/user/tentang_kami.jsx';
import Pemesanan from './page/user/pemesanan.jsx';
import Pembayaran from './page/user/pembayaran.jsx';
import HeaderUser from './layout/header user.jsx';
import Footer from './layout/footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
            path="/pembayaran" 
            element={
              <div>
                <HeaderUser />
                <Pembayaran />
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
