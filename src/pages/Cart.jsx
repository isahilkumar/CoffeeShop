import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { FaTrashAlt, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useContext(CartContext);

    const total = getCartTotal();
    const tax = total * 0.08;
    const grandTotal = total + tax;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="bg-dark p-8 rounded-full inline-block mb-6 shadow-xl border border-white/5">
                        <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added any of our delicious premium coffees to your cart yet.</p>
                    <Link
                        to="/menu"
                        className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Menu
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center gap-4 mb-8">
                    <Link to="/menu" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                        <FaArrowLeft /> Continue Shopping
                    </Link>
                </div>

                <h1 className="text-4xl font-bold text-white mb-8">Shopping <span className="text-secondary">Cart</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-dark rounded-2xl p-6 border border-white/5 shadow-xl">
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                                <h3 className="text-xl font-semibold text-white">Cart Items ({cart.length})</h3>
                                <button
                                    onClick={clearCart}
                                    className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-6">
                                <AnimatePresence>
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                            className="flex flex-col sm:flex-row items-center gap-6 bg-primary/50 p-4 rounded-xl border border-white/5"
                                        >
                                            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="flex-grow text-center sm:text-left">
                                                <h4 className="text-lg font-bold text-white">{item.name}</h4>
                                                <p className="text-secondary font-medium">${item.price.toFixed(2)}</p>
                                            </div>

                                            <div className="flex items-center gap-4 bg-dark py-2 px-4 rounded-full border border-white/10">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="text-gray-400 hover:text-secondary transition-colors"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                                <span className="text-white font-bold w-6 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="text-gray-400 hover:text-secondary transition-colors"
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-white font-bold text-lg mb-2">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-500 hover:text-red-400 transition-colors p-2"
                                                    title="Remove Item"
                                                >
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-dark rounded-2xl p-6 border border-white/5 shadow-xl sticky top-28">
                            <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10">Order Summary</h3>

                            <div className="space-y-4 text-gray-300 mb-6">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-white font-semibold">${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Tax (8%)</span>
                                    <span className="text-white font-semibold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-400 font-semibold">Free</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-lg font-semibold">Total Amount</span>
                                    <span className="text-secondary text-2xl font-bold">${grandTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                                onClick={() => alert("Checkout flow to be implemented!")}
                            >
                                Proceed to Checkout
                            </button>

                            <div className="mt-6 flex justify-center gap-2 text-gray-500 text-sm">
                                <span>Secure payment powered by</span>
                                <span className="font-bold text-gray-400">Stripe</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
