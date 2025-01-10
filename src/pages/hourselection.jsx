import React, { useState } from "react";

const HourSelection = ({ onConfirm, onGoBack }) => {
  const [selectedHours, setSelectedHours] = useState(2);

  const hoursOptions = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleHoursChange = (hours) => {
    setSelectedHours(hours);
  };

  const handleConfirmClick = () => {
    onConfirm(selectedHours); // Call parent callback with selected hours
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-xl font-bold text-black text-center mb-6">
          How Many Hours?
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 flex items-center justify-center text-8xl font-bold text-black">
            {selectedHours}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          {hoursOptions.map((hours) => (
            <button
              key={hours}
              onClick={() => handleHoursChange(hours)}
              className={`w-10 h-10 rounded-full text-white text-lg ${
                selectedHours === hours
                  ? "bg-[#ff7900]"
                  : "bg-gray-300 hover:bg-[#ff7900]"
              }`}
            >
              {hours}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {/* Go Back Button */}
          <button
            onClick={onGoBack}
            className="w-1/2 bg-gray-300 text-black py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-150 mr-2"
          >
            Go Back
          </button>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmClick}
            className="w-1/2 bg-[#ff7900] text-white py-2 rounded-lg shadow-md hover:bg-orange-900 transition duration-150"
          >
            Select Date and Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default HourSelection;

