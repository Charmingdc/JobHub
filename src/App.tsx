import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage"
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import PWABadge from "./PWABadge.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage /> } />
      </Routes>
      <PWABadge />
    </>
  );
}

export default App;
