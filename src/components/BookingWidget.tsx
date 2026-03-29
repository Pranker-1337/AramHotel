import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLanguage } from './LanguageContext';
import { Calendar, Users, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export const BookingWidget: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useLanguage();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date(Date.now() + 86400000));
  const [guests, setGuests] = useState(1);

  return (
    <div className={cn("bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4", className)}>
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Check In */}
        <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-100 pb-2 md:pb-0 md:pr-4">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1">
            <Calendar size={12} className="text-accent" />
            {t.booking.checkIn}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="text-primary font-medium focus:outline-none"
            dateFormat="MMM dd, yyyy"
          />
        </div>

        {/* Check Out */}
        <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-100 pb-2 md:pb-0 md:pr-4">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1">
            <Calendar size={12} className="text-accent" />
            {t.booking.checkOut}
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || new Date()}
            className="text-primary font-medium focus:outline-none"
            dateFormat="MMM dd, yyyy"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1">
            <Users size={12} className="text-accent" />
            {t.booking.guests}
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full bg-transparent text-primary font-medium focus:outline-none cursor-pointer appearance-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
        <Search size={18} className="group-hover:scale-110 transition-transform" />
        {t.booking.search}
      </button>
    </div>
  );
};
