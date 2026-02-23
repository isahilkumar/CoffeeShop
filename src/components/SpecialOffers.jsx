import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpecialOffers = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 24,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 1);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const copyPromo = () => {
        navigator.clipboard.writeText("BREW50");
        alert("Promo code 'BREW50' copied!");
    };

    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-dark to-primary border border-secondary/30 p-8 md:p-12 rounded-3xl shadow-2xl relative"
                >
                    <span className="absolute -top-4 -right-4 bg-secondary text-primary font-bold py-2 px-6 rounded-full transform rotate-12 shadow-lg">
                        50% OFF
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Weekend Special Offer
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                        Get 50% off on all specialty coffees this weekend only. Don't miss out on your favorite blends!
                    </p>

                    <div className="flex justify-center gap-4 mb-8">
                        <div className="bg-primary/80 border border-white/10 p-4 rounded-xl shadow-inner min-w-[80px]">
                            <span className="text-3xl font-bold text-secondary">{timeLeft.hours.toString().padStart(2, '0')}</span>
                            <p className="text-xs text-gray-400 mt-1 uppercase">Hours</p>
                        </div>
                        <div className="text-3xl font-bold text-secondary self-center mb-5">:</div>
                        <div className="bg-primary/80 border border-white/10 p-4 rounded-xl shadow-inner min-w-[80px]">
                            <span className="text-3xl font-bold text-secondary">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                            <p className="text-xs text-gray-400 mt-1 uppercase">Mins</p>
                        </div>
                        <div className="text-3xl font-bold text-secondary self-center mb-5">:</div>
                        <div className="bg-primary/80 border border-white/10 p-4 rounded-xl shadow-inner min-w-[80px]">
                            <span className="text-3xl font-bold text-secondary">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                            <p className="text-xs text-gray-400 mt-1 uppercase">Secs</p>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-full p-2 pl-6 shadow-inner">
                        <span className="text-gray-300 font-mono tracking-widest text-lg">BREW50</span>
                        <button
                            onClick={copyPromo}
                            className="bg-secondary text-primary font-bold py-2 px-6 rounded-full hover:bg-white transition-colors"
                        >
                            Copy Code
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SpecialOffers;
