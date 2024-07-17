'use client'
import Companion from "@/components/Homepage/Companion/Companion";
import Faq from "@/components/Homepage/Faq/Faq";
import Footer from "@/components/Homepage/Footer/Footer";
import Hero from "@/components/Homepage/Hero/Hero";
import Information from "@/components/Homepage/Information/Information";
import Plans from "@/components/Homepage/Plans/Plans";
import Steps from "@/components/Homepage/Steps/Steps";
import Testimonial from "@/components/Homepage/Testimonial/Testimonial";
import Navbar from "@/components/shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Companion />
      <Information />
      <Testimonial />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
