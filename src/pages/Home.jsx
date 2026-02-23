import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SpecialOffers from '../components/SpecialOffers';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <AboutSection />
            <SpecialOffers />
            <Testimonials />
            <Gallery />
        </div>
    );
};

export default Home;
