import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { HiOutlineShoppingBag, HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const { getCartCount } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-md shadow-lg border-b border-white/10 transition-all duration-300 left-0 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-secondary tracking-wider">BREW<span className="text-white">HAVEN</span></span>
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium transition-colors hover:text-secondary ${isActive(link.path) ? 'text-secondary border-b-2 border-secondary' : 'text-light'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/cart" className="relative text-light hover:text-secondary transition-colors">
                            <HiOutlineShoppingBag size={28} />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-secondary text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <Link to="/cart" className="relative text-light">
                            <HiOutlineShoppingBag size={26} />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-2 bg-secondary text-primary text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-light focus:outline-none focus:text-secondary"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary w-full shadow-lg absolute top-20 left-0 border-t border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive(link.path) ? 'bg-white/10 text-secondary' : 'text-light hover:bg-white/5 hover:text-secondary'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
