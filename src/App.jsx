import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import your components
import { Header } from "./components";
import { Home, Login, CriminalDetails, Search } from "./pages";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criminaldetails/:id" element={<CriminalDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component
export default App;
