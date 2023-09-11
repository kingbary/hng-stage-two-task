import { Outlet } from "react-router-dom";
import HeroSection from "../components/hero/HeroSection";
import FeaturedMovies from "../components/featuredMovies/FeaturedMovies";
import Footer from "../components/footer/Footer";

export default function Root() {
  return (
    <>
      <HeroSection />
      <FeaturedMovies />
      <Footer />
      <Outlet />
    </>
  );
}
