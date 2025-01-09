import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hours, setHours] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const times = {
    '2025-01-08': ['11:00 am', '12:00 pm', '1:00 pm'],
    '2025-01-09': ['4:00 pm', '6:00 pm', '7:00 pm'],
  };

  const getTimeSlots = () => {
    const dateString = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(
      selectedDate.getDate()
    ).padStart(2, '0')}`;
    return times[dateString] || [];
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime(''); // Reset time on date change
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

  const handleHoursChange = (event) => {
    setHours(Number(event.target.value));
  };

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const pricePerHour = 1200;
  const totalPrice = hours * pricePerHour * (1 - discount);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFF2D7] text-white p-4 md:p-8">
      <div className="bg-[#C4DFE6] rounded-lg shadow-lg w-full max-w-5xl p-6 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">Book Your Service</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Date Picker Section */}
          <div className="md:col-span-2 p-4 md:p-6 bg-[#E7E8D1] rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => handleMonthChange(-1)}
                className="text-lg px-3 py-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
              >
                {'<'}
              </button>
              <h3 className="text-xl text-black font-medium">
                {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
              </h3>
              <button
                onClick={() => handleMonthChange(1)}
                className="text-lg px-3 py-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
              >
                {'>'}
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleDateClick(i + 1)}
                  className={`p-3 rounded-lg transition-colors font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 ${
                    selectedDate.getDate() === i + 1 &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-lg text-black font-semibold mb-3">Available Time Slots</h4>
              <div className="flex flex-wrap gap-3">
                {getTimeSlots().length > 0 ? (
                  getTimeSlots().map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeClick(time)}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 ${
                        selectedTime === time ? 'bg-orange-500 text-white' : 'bg-gray-700 text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="text-black">No time slots available for the selected date.</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg text-black font-semibold mb-3">Select Duration (Hours)</h4>
              <input
                type="number"
                min="1"
                value={hours}
                onChange={handleHoursChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>

          {/* Service Details Section */}
          <div className="p-4 md:p-6 bg-[#E7E8D1] rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Service Details</h3>
            <p className="mb-2 font-medium text-black">1H Video + Audio (Premium Edit)</p>
            <p className="mb-1 text-black">Date: <span className="font-semibold text-black">{selectedDate.toDateString()}</span></p>
            <p className="mb-1 text-black">Time: <span className="font-semibold">{selectedTime || 'Not selected'}</span></p>
            <p className="mb-1 text-black">Location: <span className="font-semibold">Sanyog</span></p>
            <p className="mb-1 text-black">Duration: <span className="font-semibold">{hours} hour{hours > 1 ? 's' : ''}</span></p>
            <div className="mb-4 text-black">
              <h4 className="text-lg font-semibold mb-2 ">Promo Code</h4>
              <div className="flex gap-2 flex-wrap">
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoCodeChange}
                  placeholder="Enter promo code"
                  className="flex-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  onClick={applyPromoCode}
                  className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
            <p className="mb-4 text-black">Price: <span className="font-semibold">AED {totalPrice.toFixed(2)}</span></p>
            <Link
              to="/details"
              className="w-full bg-orange-500 py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              disabled={!selectedTime}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;

