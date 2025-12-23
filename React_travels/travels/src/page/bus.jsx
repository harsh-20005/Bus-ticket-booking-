import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Bus1 from '../assets/bus1.png';
import Bus2 from '../assets/bus.png';
import Bus3 from '../assets/bus5.png';
import Bus4 from '../assets/bus4.png';
import Bus5 from '../assets/bus7.png';
import Bus6 from '../assets/bus10.png';

const busData = [
  {
    id: 1,
    image: Bus1,
    title: "Luxury Tourist Bus",
    capacity: "60 Passengers",
    type: "luxurybus",
    price: "720",
    features: ["AC", "WiFi", "Recliner Seats"]
  },
  {
    id: 2,
    image: Bus2,
    title: "Standard Tourist Bus",
    capacity: "45 Passengers",
    type: "touristbus",
    price: "580",
    features: ["AC", "Comfortable Seats"]
  },
  {
    id: 3,
    image: Bus3,
    title: "Private Charter Bus",
    capacity: "35 Passengers",
    type: "privatebus",
    price: "1200",
    features: ["Premium Interior", "Privacy"]
  },
  {
    id: 4,
    image: Bus4,
    title: "Deluxe Coach",
    capacity: "50 Passengers",
    type: "deluxebus",
    price: "1600",
    features: ["AC", "Entertainment System"]
  },
  {
    id: 5,
    image: Bus5,
    title: "Executive Bus",
    capacity: "40 Passengers",
    type: "luxurybus",
    price: "4150",
    features: ["Leather Seats", "Mini Bar"]
  },
  {
    id: 6,
    image: Bus6,
    title: "Mini Tourist Bus",
    capacity: "25 Passengers",
    type: "touristbus",
    price: "560",
    features: ["AC", "Compact Size"]
  },
];

const Bus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredBuses = useMemo(() => {
    return busData.filter(bus => {
      const matchesSearch =
        bus.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.capacity.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || bus.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10">
      {/* Search and filter */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-6 py-5 items-center">
        <div className="flex items-center gap-x-2.5 w-full">
          <input
            type="text"
            placeholder="Search buses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full appearance-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-100 dark:bg-neutral-800 px-3 h-12 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            className="bg-violet-600 hover:bg-violet-700 transition-colors h-11 px-4 rounded-md text-white"
            aria-label="Search buses"
          >
            <FaSearch />
          </button>
        </div>

        <div className="w-full">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 px-3 h-12 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">Select Bus Type</option>
            <option value="touristbus">Tourist Bus</option>
            <option value="privatebus">Private Bus</option>
            <option value="luxurybus">Luxury Bus</option>
            <option value="deluxebus">Deluxe Bus</option>
          </select>
        </div>
      </div>

      {/* Bus Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => (
            <Link
              to={`/bus/bus-details/${bus.id}`}
              key={bus.id}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={bus.image}
                alt={`${bus.title} image`}
                className="w-full aspect-video object-contain object-center"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-violet-600">
                    {bus.title}
                  </h2>
                  <span className="text-sm text-neutral-500 dark:text-neutral-300">{bus.capacity}</span>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Features: {bus.features.join(', ')}
                </div>
                <div className="text-base font-medium text-violet-600 dark:text-violet-400">
                  {bus.price}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-neutral-600 dark:text-neutral-400">
            No buses found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bus;
