import { motion } from 'framer-motion';

const images = [
    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/15750730/pexels-photo-15750730.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const Gallery = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary tracking-widest text-sm uppercase font-semibold">Discover</span>
                    <h2 className="text-4xl font-bold text-white mt-2">Our Gallery</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative overflow-hidden group rounded-xl aspect-[4/3] cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-secondary hover:text-primary transition-colors hover:border-secondary">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
