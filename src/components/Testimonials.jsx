import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "The absolute best coffee I've ever had. The aroma alone is enough to wake you up, but the taste is out of this world. Fast delivery too!"
    },
    {
        id: 2,
        name: "Mike Chen",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "I order from BrewHaven every morning. Their espresso blend is unmatched, and I love that they use ethically sourced beans."
    },
    {
        id: 3,
        name: "Emily Davis",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4,
        text: "Great atmosphere when you visit, and their cold brews are the perfect summer drink. Highly recommend the caramel macchiato."
    },
    {
        id: 4,
        name: "James Wilson",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 5,
        text: "A coffee lover's paradise! The meticulous roasting process really shows in the final cup. Outstanding customer service."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-dark">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-secondary tracking-widest text-sm uppercase font-semibold">Reviews</span>
                    <h2 className="text-4xl font-bold text-white mt-2">What Our Customers Say</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="pb-16"
                >
                    {testimonials.map((test) => (
                        <SwiperSlide key={test.id}>
                            <div className="bg-primary p-8 rounded-2xl shadow-xl h-full border border-white/5 relative mt-8">
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                    <img src={test.image} alt={test.name} className="w-16 h-16 rounded-full border-4 border-dark shadow-md" />
                                </div>
                                <div className="flex justify-center gap-1 text-secondary mb-4 mt-6">
                                    {[...Array(test.rating)].map((_, i) => (
                                        <FaStar key={i} size={14} />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">&quot;{test.text}&quot;</p>
                                <h4 className="text-white font-semibold">{test.name}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
