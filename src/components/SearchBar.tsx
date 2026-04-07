import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
}

export default function SearchBar({ onSearch, onLocationChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const cities = [
    'جميع المدن',
    'الرياض',
    'جدة',
    'الدمام',
    'مكة المكرمة',
    'المدينة المنورة',
    'الخبر',
    'الطائف',
    'تبوك'
  ];

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = e.target.value;
    setSelectedLocation(location);
    onLocationChange(location === 'جميع المدن' ? '' : location);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-2">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="المسمى الوظيفي ، الشركة أو الكلمات الرئيسية"
              className="w-full p-4 pr-12 border-0 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none text-right"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>
        <div className="md:w-64">
          <div className="relative">
            <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="w-full p-4 pr-12 border-0 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none text-right appearance-none"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        <button 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          onClick={handleSearch}
        >
          <Search className="h-5 w-5" />
          بحث
        </button>
      </div>
    </div>
  );
}