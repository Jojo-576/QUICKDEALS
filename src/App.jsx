import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Footer from "./components/Footer";
import BusinessStatusBar from "./components/BusinessStatusBar"; // ✅ ADD THIS

import DataPackages from "./pages/DataPackages";

// MTN
import MtnBundles from "./pages/mtn/MtnBundles";
import MtnPayment from "./pages/payment/MtnPayment";

// TELECEL
import TelecelBundles from "./pages/telecel/TelecelBundles";
import TelecelPayment from "./pages/payment/TelecelPayment";

// AIRTELTIGO
import AirtelTigoBundles from "./pages/airteltigo/AirtelTigoBundles";
import AirtelTigoPayment from "./pages/payment/AirtelTigoPayment";



// OTHER PAGES
import WaecChecker from "./pages/waec/WaecChecker";
import UniversityForms from "./pages/UniversityForms";
import PassportServices from "./pages/PassportServices";

import PassportApplication from "./pages/passport/PassportApplication";
import BirthCertificate from "./pages/birthCertificate/BirthCertificate";
import BusinessCertificate from "./pages/businessCertificate/BusinessCertificate";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// WALLET
import Wallet from "./pages/wallet/Wallet";

// CONTEXT & PROTECTION
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";








function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
          
          {/* HEADER */}
          <Header />

          {/* SPACE UNDER FIXED HEADER */}
          <div style={{ height: "80px" }}></div>

          {/* ROUTES */}
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <BusinessStatusBar /> {/* ✅ STATUS BAR */}
                  <Services />
                </>
              }
            />

            {/* DATA */}
            <Route path="/data-packages" element={<DataPackages />} />

            {/* MTN */}
            <Route path="/packages/mtn" element={<MtnBundles />} />
            <Route path="/payment/mtn" element={<MtnPayment />} />
           

            {/* TELECEL */}
            <Route path="/packages/telecel" element={<TelecelBundles />} />
            <Route path="/payment/telecel" element={<TelecelPayment />} />

            {/* AIRTELTIGO */}
            <Route path="/packages/airteltigo" element={<AirtelTigoBundles />} />
            <Route path="/payment/airteltigo" element={<AirtelTigoPayment />} />

            {/* SERVICES */}
            <Route path="/waec-checker" element={<WaecChecker />} />
            <Route path="/university-forms" element={<UniversityForms />} />
            <Route path="/passport-services" element={<PassportServices />} />
            


            <Route path="/passport/application" element={<PassportApplication />} />
            <Route path="/birth-certificate" element={<BirthCertificate />} />
            <Route path="/business-certificate" element={<BusinessCertificate />} />
            
            

            


            {/* AUTH */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* WALLET (PROTECTED) */}
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <Wallet />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* FOOTER */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
