import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center -mt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
                >
                    <span className="text-secondary">Freshly Brewed</span> <br className="hidden md:block" /> Happiness
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto drop-shadow-md font-light"
                >
                    Awaken your senses with our artisanal coffee, handcrafted to perfection. Every sip tells a story of passion and quality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-secondary text-primary font-bold rounded-full overflow-hidden relative group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/30">
                        <span className="relative z-10">Order Now</span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></div>
                    </Link>
                    <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                        Explore Menu
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator animation */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-8 h-12 border-2 border-secondary rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-secondary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
