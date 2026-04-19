import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Categories from '@/components/Categories';
import HowWeWork from '@/components/HowWeWork';
import CustomOrder from '@/components/CustomOrder';
import Works from '@/components/Works';
import Reviews from '@/components/Reviews';
import Salons from '@/components/Salons';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Categories />
      <HowWeWork />
      <CustomOrder />
      <Works />
      <Reviews />
      <Salons />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
