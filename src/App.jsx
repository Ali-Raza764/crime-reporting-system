import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, Loader } from "./components";

// * Lazyly Load all the pages to increase Browser Loading speed
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Search = lazy(() => import("./pages/Search"));
const CriminalDetails = lazy(() => import("./pages/CriminalDetails"));
const CreateCriminal = lazy(() => import("./pages/CreateCriminal"));
const Admin = lazy(() => import("./pages/Admin"));
const CrimeMap = lazy(() => import("./pages/CrimeMap"));
const Surveilance = lazy(() => import("./pages/Surveilance"));
const Community = lazy(() => import("./pages/Community"));
const Analytics = lazy(() => import("./pages/Analytics"));
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criminaldetails/:id" element={<CriminalDetails />} />
          <Route path="/createcriminal" element={<CreateCriminal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/crimemap" element={<CrimeMap />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/surveilance" element={<Surveilance />} />
          <Route path="/community" element={<Community />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

// Export the App component
export default App;
