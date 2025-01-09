import React, { useState } from "react";

const HourSelection = () => {
  const [selectedHours, setSelectedHours] = useState(2);

  const hoursOptions = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleHoursChange = (hours) => {
    setSelectedHours(hours);
  };

  return (
    // <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 ">
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
        <button className="w-full bg-[#ff7900] text-white py-2 rounded-lg shadow-md hover:bg-orange-900 transition duration-150">
          Select Date and Time
        </button>
      </div>
    // </div>
  );
};

export default HourSelection;
