import React, { useState } from 'react';
import { FaCreditCard, FaPaypal, FaRegCreditCard } from 'react-icons/fa'; // You can install react-icons if not yet installed
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-stripe-public-key'); // Your Stripe Public Key

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the backend to create a Stripe session
    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethod: formData.paymentMethod }), // Pass the selected payment method
    });

    const session = await response.json();

    // Redirect the user to Stripe's hosted checkout page
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section - Customer Details & Payment Method */}
        <div className="p-6 md:p-8 bg-gray-50 border-r border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-orange-600">Customer Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">Payment Method</h3>
            <div className="mb-4 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === 'creditCard'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="creditCard" className="flex items-center space-x-2 font-medium">
                  <FaCreditCard className="text-xl" />
                  <span>Credit Card</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="paypal" className="flex items-center space-x-2 font-medium">
                  <FaPaypal className="text-xl" />
                  <span>PayPal</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={formData.paymentMethod === 'bankTransfer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="bankTransfer" className="flex items-center space-x-2 font-medium">
                  <FaRegCreditCard className="text-xl" />
                  <span>Bank Transfer</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Submit Booking
            </button>
          </form>
        </div>

        {/* Right Section - Booking Details & Payment Summary */}
        <div className="p-6 md:p-8 bg-white">
          <h2 className="text-xl font-bold mb-6 text-orange-600">Booking Details</h2>

          <div className="space-y-4">
            <p className="text-lg font-medium">5H Video + Audio (Premium Edit) - UPS 2</p>
            <p>
              <span className="font-semibold">Date & Time:</span> 8 January 2025 at 6:00 pm
            </p>
            <p>
              <span className="font-semibold">Location:</span> Location 1, Gautam
            </p>
            <p>
              <span className="font-semibold">Duration:</span> 5 hours
            </p>
          </div>

          <hr className="my-6 border-t border-gray-300" />

          <h3 className="text-lg font-semibold mt-8 mb-4">Payment Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>AED 5,714.29</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>AED 285.71</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>AED 6,000</span>
            </div>
          </div>

          <hr className="my-6 border-t border-gray-300" />

          <div className="mt-8 flex gap-4">
            <button className="w-1/2 bg-[#ff7900] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;




