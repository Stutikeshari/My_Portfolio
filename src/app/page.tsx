import Navbar from "@/components/Navbar/NavbarPage";
import HomePage from "@/components/Home/HomePage";
import AboutPage from "@/components/About/AboutPage";
import ResumePage from "@/components/Resume/ResumePage";
import Services from "@/components/Services/Service";
import Skills from "@/components/Skills/Skills";
import ProjectCards from "@/components/project/Project";
import CertificatePage from "@/components/Certificate/Certificate";
import SocialSection from "@/components/Social/SocialPage";
import ContactPage from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <HomePage />
    <AboutPage />
    <ResumePage />
    <Services />
    <Skills />
    <ProjectCards />
    <CertificatePage />
    <SocialSection />
    <ContactPage />
    <Footer />
    </>
  );
}
