import React, { useState } from 'react';

const DateTimePicker = ({ selectedDate, selectedTime, onDateChange, onTimeChange, handleNextStep, handlePreviousStep }) => {
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'
  ];

  const isFormComplete = () => selectedDate !== '' && selectedTime !== '';

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
      
      {/* Date Picker */}
      <label className="block text-gray-600 mb-2" htmlFor="date">
        Select Date
      </label>
      <input
        type="date"
        id="date"
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
      
      {/* Time Slot Picker */}
      <label className="block text-gray-600 mb-2" htmlFor="time">
        Select Time Slot
      </label>
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            className={`p-2 border rounded-md ${
              selectedTime === time
                ? 'bg-blue-500 text-white'
                : 'bg-white border-gray-300'
            } hover:bg-blue-100`}
            onClick={() => onTimeChange(time)}
          >
            {time}
          </button>
        ))}
      </div>
      
      {/* Selected Info */}
      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
          <p className="text-gray-700">
            You have selected: <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6">
        <button
          onClick={handleNextStep}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isFormComplete() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-700 cursor-not-allowed'
          }`}
          disabled={!isFormComplete()}
        >
          Next Step
        </button>
        <button
          onClick={handlePreviousStep}
          className="w-full mt-4 py-3 px-6 rounded-lg font-medium bg-gray-700 text-white hover:bg-gray-800 transition-colors"
        >
          Previous Step
        </button>
      </div>
    </div>
  );
};


export default DateTimePicker;
