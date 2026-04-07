import React, { useState } from 'react';
import { Filter, DollarSign, MapPin, Briefcase } from 'lucide-react';

const FilterSidebar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([5000, 50000]);
  const [jobType, setJobType] = useState<string>('all');

  const categories = [
    { id: 1, name: 'تكنولوجيا المعلومات', count: 1245 },
    { id: 2, name: 'المحاسبة والمالية', count: 876 },
    { id: 3, name: 'التسويق والمبيعات', count: 654 },
    { id: 4, name: 'الهندسة', count: 987 },
    { id: 5, name: 'الموارد البشرية', count: 432 },
    { id: 6, name: 'الخدمات الصحية', count: 765 },
    { id: 7, name: 'التعليم', count: 543 },
    { id: 8, name: 'الإدارة', count: 321 },
  ];

  const cities = [
    { id: 1, name: 'الرياض', count: 2345 },
    { id: 2, name: 'جدة', count: 1876 },
    { id: 3, name: 'الدمام', count: 1456 },
    { id: 4, name: 'مكة المكرمة', count: 987 },
    { id: 5, name: 'المدينة المنورة', count: 765 },
    { id: 6, name: 'الخبر', count: 654 },
    { id: 7, name: 'الطائف', count: 543 },
    { id: 8, name: 'تبوك', count: 432 },
  ];

  const jobTypes = [
    { id: 'all', name: 'جميع أنواع الوظائف' },
    { id: 'full-time', name: 'دوام كامل' },
    { id: 'part-time', name: 'دوام جزئي' },
    { id: 'contract', name: 'عقود' },
    { id: 'remote', name: 'عمل عن بعد' },
    { id: 'internship', name: 'تدريب' },
  ];

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          التخصصات
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`w-full flex justify-between items-center p-3 rounded-lg transition duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'hover:bg-gray-50 border border-transparent'
              }`}
              onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cities Filter */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          المدن
        </h3>
        <div className="space-y-2">
          {cities.map((city) => (
            <button
              key={city.id}
              className={`w-full flex justify-between items-center p-3 rounded-lg transition duration-200 ${
                selectedCity === city.id
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'hover:bg-gray-50 border border-transparent'
              }`}
              onClick={() => setSelectedCity(city.id === selectedCity ? null : city.id)}
            >
              <span className="font-medium">{city.name}</span>
              <span className="text-gray-500 text-sm">{city.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-blue-600" />
          نطاق الراتب (ر.س)
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>5,000</span>
            <span>50,000</span>
          </div>
          <input
            type="range"
            min="5000"
            max="50000"
            step="1000"
            value={salaryRange[0]}
            onChange={(e) => setSalaryRange([parseInt(e.target.value), salaryRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center">
            <span className="font-bold text-blue-600">
              {salaryRange[0].toLocaleString()} - {salaryRange[1].toLocaleString()} ر.س
            </span>
          </div>
        </div>
      </div>

      {/* Job Type */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          نوع الوظيفة
        </h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <button
              key={type.id}
              className={`w-full text-right p-3 rounded-lg transition duration-200 ${
                jobType === type.id
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'hover:bg-gray-50 border border-transparent'
              }`}
              onClick={() => setJobType(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition duration-200"
        onClick={() => {
          setSelectedCategory(null);
          setSelectedCity(null);
          setSalaryRange([5000, 50000]);
          setJobType('all');
        }}
      >
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
};

export default FilterSidebar;