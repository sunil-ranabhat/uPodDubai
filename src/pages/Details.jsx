import React, { useState, useEffect } from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import Login from "./Login";
import { toast } from "react-toastify";

const stripePromise = loadStripe("your-stripe-public-key"); // Replace with your actual Stripe Public Key

const BookingForm = ({ bookingDetails, handlePreviousStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    paymentMethod: "creditCard",
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // User state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Login popup state

  // Check login status on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData((prev) => ({
        ...prev,
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in before proceeding
    if (!user) {
      toast.error("Please log in to make a booking.");
      setIsPopupOpen(true);
      return;
    }

    setLoading(true);
    try {
      const sessionResponse = await fetch(
        "http://localhost:3001/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentMethod: formData.paymentMethod,
            bookingDetails,
            customerDetails: formData,
          }),
        }
      );

      if (!sessionResponse.ok)
        throw new Error("Failed to create checkout session");

      const session = await sessionResponse.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        toast.error(error.message);
        console.error("Stripe Checkout error:", error);
      } else {
        const storeResponse = await fetch(
          "http://localhost:3001/store-booking",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bookingDetails,
              customerDetails: formData,
            }),
          }
        );

        if (!storeResponse.ok) throw new Error("Failed to store booking");

       toast.success("Booking submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting booking form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setFormData((prev) => ({
      ...prev,
      name: storedUser.name || "",
      email: storedUser.email || "",
      phone: storedUser.phone || "",
    }));
    setIsPopupOpen(false); // Close the popup after successful login
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Customer Details & Payment Method */}
        <div className="p-6 md:p-8 bg-gray-50 border-r border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-orange-600">
            Customer Details
          </h2>

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
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="creditCard"
                  className="flex items-center space-x-2 font-medium"
                >
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
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="paypal"
                  className="flex items-center space-x-2 font-medium"
                >
                  <FaPaypal className="text-xl" />
                  <span>PayPal</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Submit Booking"}
            </button>
          </form>
        </div>

        {/* Right Section - Booking Summary */}
        <div className="p-6 md:p-8 bg-white">
          <h2 className="text-xl font-bold mb-6 text-orange-600">
            Booking Details
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-medium">{bookingDetails.planName}</p>
            <p>
              <span className="font-semibold">Date & Time:</span>{" "}
              {bookingDetails.date} at {bookingDetails.timeSlot}
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {bookingDetails.hours} hours
            </p>
          </div>

          <hr className="my-6 border-t border-gray-300" />

          <h3 className="text-lg font-semibold mt-8 mb-4">Payment Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>AED {bookingDetails.price * bookingDetails.hours}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>AED {bookingDetails.price * bookingDetails.hours}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePreviousStep}
              className="w-1/2 bg-gray-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <Login isPopupOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default BookingForm;


