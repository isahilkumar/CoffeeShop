import { motion } from 'framer-motion';
import { FaCoffee, FaShippingFast, FaLeaf } from 'react-icons/fa';

const features = [
    { icon: <FaLeaf size={32} />, title: 'Quality Beans', desc: 'Ethically sourced, 100% organic beans.' },
    { icon: <FaCoffee size={32} />, title: 'Fresh Roast', desc: 'Roasted daily for the perfect aroma.' },
    { icon: <FaShippingFast size={32} />, title: 'Fast Delivery', desc: 'Hot and delicious, delivered fast.' },
];

const AboutSection = () => {
    return (
        <section className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4 relative"
                    >
                        <div className="space-y-4 pt-12">
                            <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" alt="Coffee Pouring" className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300" />
                        </div>
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" alt="Coffee Setup" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300" />
                        </div>
                        <div className="absolute -z-10 bg-secondary/20 w-3/4 h-3/4 rounded-full blur-3xl -top-10 -left-10"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">A Legacy of <br /><span className="text-secondary">Perfect Roasts</span></h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Born from a passion for the perfect cup, BrewHaven has grown into a sanctuary for coffee lovers. We believe that coffee is more than just a drink; it's an experience. We meticulously select beans from the finest farms around the globe to ensure every sip brings joy.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-start gap-2 bg-primary p-4 rounded-xl shadow-lg border border-white/5 hover:border-secondary/50 transition-colors">
                                    <div className="text-secondary bg-dark p-3 rounded-lg shadow-inner">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mt-2">{feature.title}</h4>
                                    <p className="text-gray-400 text-xs">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
