import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "./_section/Header";
import About from "./_section/About";
import Services from "./_section/Services";
import Contact from "./_section/Contact";
import Overlay from "@/components/Overlay";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <div id="home" className="w-full bg-neutral">
        <Header />
        <About />
      </div>
      <Services />
      <Contact />
      <Overlay />
      <Footer />
    </main>
  );
}
