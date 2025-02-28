import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import ProgramList from "./components/ProgramList";
import Disciplines from "./components/Disciplines";
import FeaturedCountries from "./components/FeaturedCountries";
import BlogSection from "./components/BlogSection";
import SocialHighlights from "./components/SocialHighlights";
import Footer from "./components/Footer";
import ResultsPage from "./components/ResultsPage";
import UniversityPage from "./components/viewmore";
import BlogPage from "./components/BlogPage"; // Import BlogPage
import Waves from "./components/Waves"; // Ensure correct path
import Signin from './components/Signin'; // Import your Signin component
import Register from './components/Register';// Import your Register component
import Founder from './components/Founder'; // Import your Founder component
import "@fontsource/playwrite-in"; // Import font globally
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <>
      <Hero />
      <Filters />
      <ProgramList />
      <Disciplines />
      <FeaturedCountries />
      <BlogSection />
      <SocialHighlights />
      <Founder />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/programs/:id" element={<UniversityPage />} />
            <Route path="/blog" element={<BlogPage />} /> {/* Added BlogPage Route */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} /> 
             <Route path="/founder" element={<Founder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
