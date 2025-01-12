import React, { useState } from "react";
import DateTimePicker from "./Booknow";
import HourSelection from "./hourselection";
import BookingForm from "./Details";

function PricingTab({ onBookStudioClick, ...props }) {
  return (
    <div className={`h-full ${props.popular ? "dark" : ""}`}>
      <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
        <div className="mb-2">
          <div className="mb-5">
            <div className="mb-1 font-semibold text-black dark:text-slate-200">
              {props.planName}
            </div>
            <div className="mb-2 inline-flex items-baseline">
              <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                AED
              </span>
              <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">
                {props.price}
              </span>
              <span className="font-medium text-slate-500">/hour</span>
            </div>
            <div className="mb-5 text-sm text-slate-500">
              {props.planDescription}
            </div>
            <button
              onClick={() => onBookStudioClick(props)}
              className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
            >
              Book Studio
            </button>
          </div>
          <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
            Includes:
          </div>
          <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {props.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 font-medium text-slate-900 dark:text-slate-200 mb-4">
            What you get after the session
          </div>
          <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {props.results.map((results, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{results}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



function CheckoutStep({ bookingDetails, handlePreviousStep, handleNextStep }) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const totalCost = bookingDetails.price * bookingDetails.hours;
  const discountedTotal = totalCost - discount;

  const validPromoCodes = {
    SAVE10: 10, // AED 10 discount
    SAVE20: 20, // AED 20 discount
  };

  const applyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
      setError("");
    } else {
      setError("Invalid promo code");
      setDiscount(0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Checkout
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Studio:</span>
            <span className="text-gray-800">{bookingDetails.planName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Price per Hour:</span>
            <span className="text-gray-800">AED {bookingDetails.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Hours:</span>
            <span className="text-gray-800">{bookingDetails.hours}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Date:</span>
            <span className="text-gray-800">{bookingDetails.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Time Slot:</span>
            <span className="text-gray-800">{bookingDetails.timeSlot}</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between font-bold text-xl">
            <span>Total Cost:</span>
            <span>AED {discountedTotal}</span>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="mt-6">
          <label htmlFor="promoCode" className="block text-gray-600 font-medium mb-2">
            Promo Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter promo code"
            />
            <button
              onClick={applyPromoCode}
              className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Apply
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {discount > 0 && (
            <p className="text-green-600 mt-2">
              Promo code applied! You saved AED {discount}.
            </p>
          )}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handlePreviousStep}
            className="w-1/2 bg-gray-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            Back
          </button>
          <button
            onClick={handleNextStep} // Replace with actual payment function
            className="w-1/2 bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}






export default function PricingTable() {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    planName: "",
    price: 0,
    hours: 1,
    date: "",
    timeSlot: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const updateDetails = (field, value) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleBookStudioClick = (studioDetails) => {
    setBookingDetails({ ...bookingDetails, ...studioDetails });
    setStep(2); // Go directly to date and time selection (step 2)
  };


  return (
    <div className="mx-auto max-w-full">
      {step === 1 && (
        <div className="grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          <PricingTab
            planName="Audio & Video"
            price={300}
            planDescription="Perfect for podcast creators who need a professional setup for recording."
            features={[
              "3 Netflix Approved Cameras",
              "4 Shure Microphones",
              "Sound-Trested Room for clear, noise-free audio",
              "8 unique Background to choose from",
              "Warm and Professional Ambiance",
            ]}
            results={[
              "Raw audio files",
              "Raw video files from all cameras",
              "Images",
            ]}
            onBookStudioClick={handleBookStudioClick}
          />

          <PricingTab
            planName="Audio & Video + Standard Edit"
            price={600}
            planDescription="Ideal for creators seeking a polished, ready-to-Post podcast recording"
            features={[
              "3 Netflix Approved Cameras with Mixed Angles",
              "Synchronized Audio for seamless sound integration",
              "Unwanted Clips Removed: Clean editing to cut out unnecessary parts",
              "Ready-to-Post Result for your convenience",
              "No Graphics (Intro-Outro, Subtitles Included",
            ]}
            results={[
              "Raw audio files",
              "Raw video files from all cameras",
              "Images",
              "Fully mixed and synced episode ready to be published ",
            ]}
            onBookStudioClick={handleBookStudioClick}
          />

          <PricingTab
            planName="Audio & Video + Premium Edit"
            price={1200}
            planDescription="The ultimate solution for creators looking for a complete, professional podcast production."
            features={[
              "All features of standard package",
              "Fully Edited Podcast for a polished final result",
              "Up to 3 Revisions to ensure your satisfaction",
              "Up to 10 Edited Reels",
            ]}
            results={[
              "Raw audio files",
              "Raw video files from all cameras",
              "Images",
              "Fully Edited Podcast for a polished final result",
            ]}
            onBookStudioClick={handleBookStudioClick}
          />
        </div>
      )}

{step === 2 && (
        <HourSelection
          onConfirm={(selectedHours) => {
            updateDetails("hours", selectedHours);
            handleNextStep();
          }}
          onGoBack={handlePreviousStep}
        />
      )}

      {step === 3 && (
        <DateTimePicker
          selectedDate={bookingDetails.date}
          selectedTime={bookingDetails.timeSlot}
          onDateChange={(date) => updateDetails("date", date)}
          onTimeChange={(time) => updateDetails("timeSlot", time)}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}

      {step === 4 && (
        <CheckoutStep
          bookingDetails={bookingDetails}
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 5 && (
        <BookingForm
          bookingDetails={bookingDetails}
          handlePreviousStep={handlePreviousStep}
        />
      )}
    </div>
  );
}
