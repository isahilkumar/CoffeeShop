import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">BREW<span className="text-white">HAVEN</span></h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Freshly brewed happiness delivered straight to your cup. We source the finest beans globally.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                        <li><Link to="/menu" className="hover:text-secondary transition-colors">Menu</Link></li>
                        <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>123 Coffee Street, NY 10001</li>
                        <li>+1 (555) 123-4567</li>
                        <li>info@brewhaven.com</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                            <FaFacebook size={18} />
                        </a>
                        <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} BrewHaven. Developed by Sahil Kumar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
