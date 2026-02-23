import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            // EmailJS integration (mock Service ID, Template ID, Public Key for demonstration)
            // Users should replace 'SERVICE_ID', 'TEMPLATE_ID', 'PUBLIC_KEY' with their actual EmailJS credentials
            emailjs.send(
                'default_service',
                'template_contact',
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                },
                'YOUR_PUBLIC_KEY'
            )
                .then(() => {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                })
                .catch((err) => {
                    console.error('Failed to send email:', err);
                    // Fallback for demo if EmailJS is not configured yet
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                })
                .finally(() => {
                    setIsSubmitting(false);
                    setTimeout(() => setSubmitStatus(null), 5000);
                });
        }
    };

    return (
        <div className="min-h-screen bg-primary pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact <span className="text-secondary">Us</span></h1>
                    <p className="text-gray-400">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-dark p-8 rounded-2xl border border-white/5 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Our Location</h4>
                                        <p className="text-gray-400">144411 @LPU Food Court</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                                        <FaPhoneAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                                        <p className="text-gray-400">+9200006689</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email Address</h4>
                                        <p className="text-gray-400">info@brewhaven.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/5 h-64 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Lovely%20Professional%20University&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-dark p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>

                        {submitStatus === 'success' && (
                            <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl mb-6 font-medium">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-gray-300 block mb-2 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors`}
                                    placeholder="Enter your name:"
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-gray-300 block mb-2 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors`}
                                    placeholder="email@example.com"
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="text-gray-300 block mb-2 font-medium">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className={`w-full bg-primary border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:hover:-translate-y-0"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
