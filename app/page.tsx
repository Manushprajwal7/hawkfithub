import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import TrainersList from "./components/TrainersList";
import ClassesList from "./components/ClassesList";
export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TrainersList />
      <ClassesList />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
