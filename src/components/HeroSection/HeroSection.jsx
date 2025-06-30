import { Link } from "react-router";

export default function HeroSection() {
    return (
        <div className="w-full h-[88vh] relative bg-[url('/images/background.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-r md:from-black/70 md:to-transparent"></div>
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 sm:px-10 md:pl-12 lg:pl-20 xl:pl-32 py-10 md:py-0">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold heroh1">
                        Culinary Excellence Redefined
                    </h1>
                    <p className="text-white mt-4 md:mt-6 mb-8 md:mb-10 text-base sm:text-lg max-w-lg lg:max-w-xl leading-relaxed">
                        Experience the perfect harmony of flavor, presentation, and ambiance at Elegance. Our master chefs craft each dish with passion and precision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6">
                        <Link to="/menu" className="w-full sm:w-auto px-6 py-3 bg-orange-700 hover:bg-orange-600 text-white text-sm sm:text-base font-medium rounded-lg shadow-md flex items-center justify-center transition duration-300 transform hover:scale-105">
                            View Menu
                            <svg 
                                className="w-5 h-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg" 
                            >
                                <path d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z"></path>
                            </svg>
                        </Link>
                        <Link to="/about" className="w-full sm:w-auto px-6 py-3 text-white text-sm sm:text-base font-medium rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
                            Our Story
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex md:w-2/5 lg:w-1/2 h-full">
                </div>
            </div>
        </div>
    );
}