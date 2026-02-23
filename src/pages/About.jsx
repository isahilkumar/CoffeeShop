import AboutSection from '../components/AboutSection';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-primary pt-10 pb-20">

            {/* About Hero */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Who We Are</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Passionate About <br /><span className="text-secondary">Every Cup</span></h1>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="w-full h-64 md:h-96 rounded-3xl overflow-hidden relative shadow-2xl border border-white/10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1200&auto=format&fit=crop"
                        alt="Coffee Shop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </motion.div>
            </div>

            <AboutSection />

        </div>
    );
};

export default About;
