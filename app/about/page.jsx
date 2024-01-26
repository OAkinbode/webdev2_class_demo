import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutComp from "@/components/aboutComp";

const About = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-screen">
        <AboutComp />
      </div>

      <Footer />
    </div>
  );
};

export default About;
