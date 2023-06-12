import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/UI/Contact";
import Hero from "@/components/UI/Hero";
import Portfolio from "@/components/UI/Portfolio";
import Services from "@/components/UI/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
