export default function Footer(){
    return(
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">ELEGANCE</h3>
              <p className="text-gray-400 mb-6">
                Experience the art of fine dining in an atmosphere of
                sophisticated elegance.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-500"></i>
                  <span>
                    123 Gourmet Avenue, Culinary District, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3 text-amber-500"></i>
                  <span>+1 (212) 555-8765</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-amber-500"></i>
                  <span>reservations@elegance.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>4:00 PM - 9:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Weekend Brunch</span>
                  <span>11:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on special events, new menu items,
                and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500 border-none"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                  Subscribe
                </button>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Elegance Fine Dining. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}