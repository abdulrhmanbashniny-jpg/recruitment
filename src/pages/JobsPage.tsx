import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';
import JobCard from '../components/JobCard';
import FilterSidebar from '../components/FilterSidebar';
import QuickStats from '../components/QuickStats';

const JobsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'مهندس برمجيات',
      company: 'شركة التقنية المتقدمة',
      location: 'الرياض',
      salary: '25,000 - 35,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل يومين',
      logo: 'https://via.placeholder.com/50',
      featured: true
    },
    {
      id: 2,
      title: 'محلل بيانات',
      company: 'مجموعة البيانات الذكية',
      location: 'جدة',
      salary: '18,000 - 25,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل 3 أيام',
      logo: 'https://via.placeholder.com/50',
      featured: false
    },
    {
      id: 3,
      title: 'مدير مشاريع',
      company: 'شركة الإنشاءات الحديثة',
      location: 'الدمام',
      salary: '30,000 - 40,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل أسبوع',
      logo: 'https://via.placeholder.com/50',
      featured: true
    },
    {
      id: 4,
      title: 'مصمم جرافيك',
      company: 'وكالة الإبداع الرقمي',
      location: 'الرياض',
      salary: '12,000 - 18,000 ر.س',
      type: 'دوام جزئي',
      posted: 'قبل يوم',
      logo: 'https://via.placeholder.com/50',
      featured: false
    },
    {
      id: 5,
      title: 'محاسب قانوني',
      company: 'مكتب المحاسبة المتخصص',
      location: 'جدة',
      salary: '15,000 - 22,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل 4 أيام',
      logo: 'https://via.placeholder.com/50',
      featured: false
    },
    {
      id: 6,
      title: 'مطور ويب',
      company: 'شركة الحلول التقنية',
      location: 'الرياض',
      salary: '20,000 - 30,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل يومين',
      logo: 'https://via.placeholder.com/50',
      featured: true
    },
    {
      id: 7,
      title: 'أخصائي تسويق',
      company: 'وكالة التسويق الرقمي',
      location: 'الدمام',
      salary: '14,000 - 20,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل أسبوع',
      logo: 'https://via.placeholder.com/50',
      featured: false
    },
    {
      id: 8,
      title: 'مهندس شبكات',
      company: 'شركة الاتصالات المتقدمة',
      location: 'الرياض',
      salary: '22,000 - 32,000 ر.س',
      type: 'دوام كامل',
      posted: 'قبل 3 أيام',
      logo: 'https://via.placeholder.com/50',
      featured: false
    },
  ];

  const stats = [
    { label: 'وظيفة جديدة اليوم', value: '127', icon: Briefcase },
    { label: 'شركة توظيف', value: '2,543', icon: Briefcase },
    { label: 'مرشح نشط', value: '45,231', icon: Briefcase },
    { label: 'وظيفة مميزة', value: '89', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            ابحث عن وظيفتك المثالية
          </h1>
          <p className="text-lg text-center mb-8 opacity-90">
            أكثر من 10,000 وظيفة في مختلف المجالات والتخصصات
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ابحث عن وظيفة، تخصص، أو شركة..."
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="المدينة أو المنطقة..."
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStats stats={stats} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar />
          </div>

          {/* Jobs List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                الوظائف المتاحة ({jobs.length})
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={20} />
                <span>ترتيب حسب:</span>
                <select className="border border-gray-300 rounded-lg p-2">
                  <option>الأحدث</option>
                  <option>الأعلى راتباً</option>
                  <option>الأقرب موقعاً</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  السابق
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">4</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">5</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  التالي
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;