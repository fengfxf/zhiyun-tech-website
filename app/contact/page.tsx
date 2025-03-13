import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
} 