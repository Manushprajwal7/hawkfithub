import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ClassesList from "./components/ClassesList";
export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ClassesList />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
