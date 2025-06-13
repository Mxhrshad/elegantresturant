import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your message! We will get back to you shortly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
                        Get In Touch
                    </h1>
                    <div className="w-24 h-1 mt-4 bg-orange-600 rounded mx-auto"></div>
                    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
                        We would be delighted to hear from you. For reservations or inquiries, please use the form below or contact us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="bg-gray-50 p-8 sm:p-10 rounded-lg">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                        
                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-4 text-2xl text-orange-600"></i>
                                <div>
                                    <h4 className="font-bold">Address</h4>
                                    <p>123 Gourmet Avenue, Culinary District, New York, NY 10001</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-phone mt-1 mr-4 text-2xl text-orange-600"></i>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p>+1 (212) 555-8765</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-4 text-2xl text-orange-600"></i>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p>reservations@elegance.com</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6 border-t pt-6">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-700">
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
                        </ul>
                    </div>
                    
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit"
                                    className="w-full px-8 py-4 bg-orange-600 text-white text-base font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-20">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.622934039869!2d-73.98785368459395!3d40.74844097932785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623777777777!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-xl"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}