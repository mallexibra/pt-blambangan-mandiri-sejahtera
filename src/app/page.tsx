import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "./_section/Header";
import About from "./_section/About";
import Services from "./_section/Services";
import Contact from "./_section/Contact";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
