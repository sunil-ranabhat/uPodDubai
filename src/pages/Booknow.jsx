import React, { useState } from 'react';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const times = {
    '2025-01-08': ['11:00 am', '12:00 pm', '1:00 pm'],
    '2025-01-09': ['4:00 pm', '6:00 pm', '7:00 pm'],
    // Add more dates with available times
  };

  const getTimeSlots = () => {
    const dateString = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(
      selectedDate.getDate()
    ).padStart(2, '0')}`;
    return times[dateString] || [];
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleMonthChange = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-5xl p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-4 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Select a Date and Time</h2>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => handleMonthChange(-1)}
                className="text-xl px-2 py-1 bg-orange-500 rounded hover:bg-orange-600"
              >
                {'<'}
              </button>
              <h3 className="text-lg font-medium">
                {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
              </h3>
              <button
                onClick={() => handleMonthChange(1)}
                className="text-xl px-2 py-1 bg-orange-500 rounded hover:bg-orange-600"
              >
                {'>'}
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleDateClick(i + 1)}
                  className={`p-2 rounded hover:bg-orange-500 transition-colors ${
                    selectedDate.getDate() === i + 1 &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear
                      ? 'bg-orange-500'
                      : 'bg-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {getTimeSlots().map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`p-2 rounded hover:bg-orange-500 transition-colors ${
                    selectedTime === time ? 'bg-orange-500' : 'bg-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">Service Details</h3>
            <p className="mb-1">1H Video + Audio (Premium Edit) - UPS 1</p>
            <p className="mb-1">
              {selectedDate.toDateString()} at {selectedTime}
            </p>
            <p className="mb-1">Location 1</p>
            <p className="mb-1">Sanyog</p>
            <p className="mb-1">1 hr</p>
            <p className="mb-4">AED 1,200</p>
            <button className="w-full bg-orange-500 py-2 rounded hover:bg-orange-600 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
