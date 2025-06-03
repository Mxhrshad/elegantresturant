import { Link } from "react-router"; // Or "react-router-dom"
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full shadow-md relative z-10"> {/* Added z-10 for stacking context */}
            <div className="h-20 flex justify-between items-center px-4 md:px-8">
                
                <div className="hidden md:flex gap-4 md:gap-8">
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-orange-700 transition duration-300 text-sm md:text-base"
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className="text-gray-800 hover:text-orange-700 transition duration-300 text-sm md:text-base"
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-800 hover:text-orange-700 transition duration-300 text-sm md:text-base"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-800 hover:text-orange-700 transition duration-300 text-sm md:text-base"
                    >
                        Contact
                    </Link>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <Link to="/" className="cursor-pointer"> {/* Made the title a link to home */}
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 hover:scale-105 transition duration-300 navbarh2">
                            ELEGANT
                        </h2>
                    </Link>
                    <p className="text-sm text-gray-600">Fine Dining Experience</p>
                </div>

                <div className="hidden md:block">
                    <Link to="/reservation"> {/* Added to="/reservation" for consistency */}
                        <div className="w-auto px-4 md:px-6 h-10 bg-orange-700 rounded flex justify-center items-center text-white shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300 cursor-pointer text-sm md:text-base">
                            Make a Reservation
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-gray-800 focus:outline-none z-30" // Added z-30
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 transform ${
                            isMenuOpen ? "rotate-180" : "rotate-0" // Icon spins 180 degrees
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            // Path morphs from hamburger to X
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Panel - Animated */}
            <div
                id="mobile-menu"
                className={`
                    md:hidden bg-amber-50 px-4 pt-2 pb-4 absolute top-full left-0 right-0 shadow-lg
                    transition-all duration-300 ease-in-out transform origin-top z-20 
                    ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
                `} // Classes for slide-down and fade-in/out animation
            >
                <Link
                    to="/"
                    className="block text-gray-800 hover:text-orange-700 transition duration-300 text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/menu"
                    className="block text-gray-800 hover:text-orange-700 transition duration-300 text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Menu
                </Link>
                <Link
                    to="/about"
                    className="block text-gray-800 hover:text-orange-700 transition duration-300 text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="block text-gray-800 hover:text-orange-700 transition duration-300 text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Link>
                <Link
                    to="/reservation"
                    className="block w-full text-center bg-orange-700 text-white rounded py-2.5 mt-2 hover:bg-orange-600 transition duration-300 text-sm" // Adjusted padding slightly
                    onClick={() => setIsMenuOpen(false)}
                >
                    Make a Reservation
                </Link>
            </div>
        </div>
    );
}