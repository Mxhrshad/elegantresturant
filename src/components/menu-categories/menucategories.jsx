import { Link } from "react-router";

const menuCategories = [
    { name: "APPETIZERS", path: "menu/appetizers", image: "/images/appetizers.jpg", description: "Start your culinary journey with our exquisite appetizers." },
    { name: "MAIN COURSES", path: "menu/maincourses", image: "/images/maincourses.jpg", description: "Indulge in our chef's masterfully crafted entrées." },
    { name: "DESSERTS", path: "menu/desserts", image: "/images/desserts.jpg", description: "Complete your meal with our decadent sweet creations." },
    { name: "BEVERAGES", path: "menu/beverages", image: "/images/beverages.jpg", description: "Complement your dining experience with our curated drinks." }
];

export default function MenuCategories() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 text-center">
            <h2 className="menucategoriesh2 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
                Our Menu
            </h2>
            <div className="w-20 h-1 mt-3 sm:mt-4 bg-orange-600 rounded"></div>
            <p className="text-gray-600 max-w-xl lg:max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                Discover our carefully curated selection of dishes, crafted with
                the finest ingredients and prepared with meticulous attention to
                detail.
            </p>
            
            <div className="w-full container mx-auto px-0 sm:px-6 lg:px-8 my-10 md:my-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {menuCategories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.path}
                            className="h-80 relative overflow-hidden rounded-xl shadow-lg group transform transition-transform duration-300 hover:scale-105"
                        >
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                            <div className="relative z-10 w-full h-full flex flex-col justify-end p-5">
                                <h2 className="text-white font-bold text-3xl tracking-wide uppercase">
                                    {category.name}
                                </h2>
                                <p className="text-gray-200 text-sm mt-2 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-75 group-hover:delay-100">
                                    {category.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}