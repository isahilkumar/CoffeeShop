import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { FaSearch, FaCartPlus, FaStar } from 'react-icons/fa';

const allProducts = [
    { id: 1, name: 'Espresso', price: 3.50, category: 'Hot', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop', rating: 4.8 },
    { id: 2, name: 'Cappuccino', price: 4.50, category: 'Hot', image: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?q=80&w=600&auto=format&fit=crop', rating: 4.9 },
    { id: 3, name: 'Caramel Latte', price: 4.80, category: 'Hot', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600&auto=format&fit=crop', rating: 4.7 },
    { id: 4, name: 'Café Mocha', price: 4.20, category: 'Hot', image: 'https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.8 },
    { id: 5, name: 'Cold Brew Classic', price: 4.00, category: 'Cold', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop', rating: 4.9 },
    { id: 6, name: 'Iced Vanilla Latte', price: 5.00, category: 'Cold', image: 'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.6 },
    { id: 7, name: 'Mocha Frappuccino', price: 5.50, category: 'Cold', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop', rating: 4.8 },
    { id: 8, name: 'Americano', price: 3.00, category: 'Hot', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=600&auto=format&fit=crop', rating: 4.5 },
];

const Menu = () => {
    const { addToCart } = useContext(CartContext);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [addedItem, setAddedItem] = useState(null);

    const categories = ['All', 'Hot', 'Cold'];

    const filteredProducts = allProducts.filter(product => {
        const matchCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedItem(product.id);
        setTimeout(() => setAddedItem(null), 1500);
    };

    return (
        <div className="min-h-screen bg-primary pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-secondary">Menu</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Explore our wide selection of handcrafted beverages made from the finest coffee beans around the world.</p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Categories */}
                    <div className="flex bg-dark p-1 rounded-full border border-white/10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-secondary text-primary shadow-md'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search beverages..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-dark bg-opacity-50 border border-white/20 text-white placeholder-gray-500 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-secondary transition-colors"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                </div>

                {/* Product Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                className="bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-300 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-secondary tracking-widest uppercase">
                                        {product.category}
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-yellow-500 flex items-center gap-1">
                                        <FaStar /> {product.rating}
                                    </div>
                                </div>

                                <div className="p-5 relative">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{product.name}</h3>
                                    <p className="text-secondary font-semibold text-lg mb-4">${product.price.toFixed(2)}</p>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-white/5 border border-white/10 text-white font-medium py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-all duration-300"
                                    >
                                        {addedItem === product.id ? (
                                            <span className="text-green-400 font-bold">Added to Cart!</span>
                                        ) : (
                                            <>
                                                <FaCartPlus /> Add to Cart
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-gray-400">No beverages found.</h3>
                        <button onClick={() => setSearchQuery('')} className="mt-4 text-secondary hover:underline">Clear Search</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Menu;
