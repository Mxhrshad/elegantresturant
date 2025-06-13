import React, { useState } from 'react';

const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 22; hour++) {
        slots.push(`${hour}:00`);
        if (hour < 22) {
            slots.push(`${hour}:30`);
        }
    }
    return slots;
};

export default function ReservationSection() {
    const today = new Date().toISOString().split('T')[0];
    const timeSlots = generateTimeSlots();

    const [reservationData, setReservationData] = useState({
        guests: 2,
        date: today,
        time: '19:00',
        occasion: '',
        name: '',
        email: '',
        phone: '',
        requests: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservationData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Submitted:", reservationData);
        alert(`Thank you, ${reservationData.name}! Your table for ${reservationData.guests} on ${reservationData.date} at ${reservationData.time} is requested. We will confirm shortly via email.`);
        setReservationData({
            guests: 2,
            date: today,
            time: '19:00',
            occasion: '',
            name: '',
            email: '',
            phone: '',
            requests: ''
        });
    };

    return (
        <section 
            className="w-full min-h-screen py-16 md:py-24 bg-cover bg-center bg-fixed flex items-center justify-center relative"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl shadow-2xl p-8 sm:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Reserve Your Table
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
                            Join us for an unforgettable dining experience. Book your table in advance to ensure your place.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium mb-1">Number of Guests</label>
                                <select id="guests" name="guests" value={reservationData.guests} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    {[...Array(8).keys()].map(i => <option key={i+1} value={i+1} className="text-black">{i+1} Guest{i > 0 ? 's' : ''}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                                <input type="date" id="date" name="date" min={today} value={reservationData.date} onChange={handleInputChange} required className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                                <select id="time" name="time" value={reservationData.time} onChange={handleInputChange} required className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                                    {timeSlots.map(slot => <option key={slot} value={slot} className="text-black">{new Date(`1970-01-01T${slot}:00`).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</option>)}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="occasion" className="block text-sm font-medium mb-1">Occasion (Optional)</label>
                            <input type="text" id="occasion" name="occasion" placeholder="e.g., Birthday, Anniversary" value={reservationData.occasion} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                                <input type="text" id="name" name="name" required value={reservationData.name} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required value={reservationData.phone} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                            <input type="email" id="email" name="email" required value={reservationData.email} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>

                        <div>
                            <label htmlFor="requests" className="block text-sm font-medium mb-1">Special Requests (Optional)</label>
                            <textarea id="requests" name="requests" rows="4" placeholder="e.g., Allergies, window seat preference" value={reservationData.requests} onChange={handleInputChange} className="w-full bg-white/10 p-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button 
                                type="submit"
                                className="w-full sm:w-auto px-12 py-4 bg-orange-600 text-white text-base font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500"
                            >
                                Confirm Reservation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}