export default function AboutSection() {
    return (
        <div className="bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
                        The Story of Elegance
                    </h1>
                    <div className="w-24 h-1 mt-4 bg-orange-600 rounded mx-auto"></div>
                    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
                        A journey of passion, precision, and the pursuit of culinary perfection.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At Elegance, we believe that fine dining is an immersive experience—an art form that engages all the senses. It begins with a deep respect for the ingredients, continues with the passion and creativity of our culinary team, and culminates in a memorable moment shared at your table. Our philosophy is rooted in the fusion of classic techniques with modern innovation, creating dishes that are both familiar and surprisingly new.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to sourcing the finest seasonal ingredients, celebrating local producers while also searching the globe for unique flavors that inspire us. Every plate that leaves our kitchen is a testament to our dedication to quality and our desire to provide an unparalleled dining experience.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img 
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                            alt="Elegant restaurant interior with warm lighting" 
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop" 
                            alt="Portrait of a professional chef" 
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Chef</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our culinary vision is led by Executive Chef Jean-Pierre Dubois, a master of his craft with over two decades of experience in Michelin-starred kitchens across Europe. Chef Dubois brings a profound understanding of flavor dynamics and a passion for artistic presentation to every dish.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            "Food, for me, is about creating emotion," says Chef Dubois. "It's about telling a story on a plate. At Elegance, we source ingredients that have their own stories, and we honor them by preparing them with integrity and creativity. We invite you to be a part of our story."
                        </p>
                    </div>
                </div>

                 <div className="bg-white p-8 sm:p-12 rounded-lg shadow-xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
                     <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        From the farm to your table, our commitment to excellence is unwavering. We pride ourselves on creating a warm, inviting atmosphere where service is impeccable and every detail is considered. We look forward to welcoming you to Elegance for an unforgettable evening.
                    </p>
                     <a 
                        href="/menu"
                        className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white text-base font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                    >
                        Explore the Menu
                    </a>
                </div>

            </div>
        </div>
    );
}