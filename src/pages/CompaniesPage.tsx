import React, { useState } from 'react';
import { Search, Building, MapPin, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompaniesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const companies = [
    {
      id: 1,
      name: 'أرامكو السعودية',
      logo: '🏢',
      industry: 'النفط والغاز',
      location: 'الظهران',
      employees: '70,000+',
      jobs: 245,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: 'سابك',
      logo: '🏭',
      industry: 'البتروكيماويات',
      location: 'الرياض',
      employees: '40,000+',
      jobs: 187,
      rating: 4.7,
      featured: true
    },
    {
      id: 3,
      name: 'الاتصالات السعودية',
      logo: '📱',
      industry: 'الاتصالات',
      location: 'الرياض',
      employees: '25,000+',
      jobs: 156,
      rating: 4.6,
      featured: true
    },
    {
      id: 4,
      name: 'البنك الأهلي',
      logo: '🏦',
      industry: 'الخدمات المالية',
      location: 'الرياض',
      employees: '18,000+',
      jobs: 132,
      rating: 4.5,
      featured: false
    },
    {
      id: 5,
      name: 'الراجحي',
      logo: '💳',
      industry: 'الخدمات المالية',
      location: 'الرياض',
      employees: '15,000+',
      jobs: 121,
      rating: 4.4,
      featured: false
    },
    {
      id: 6,
      name: 'الرياض',
      logo: '🏙️',
      industry: 'التطوير العقاري',
      location: 'الرياض',
      employees: '12,000+',
      jobs: 98,
      rating: 4.3,
      featured: false
    },
    {
      id: 7,
      name: 'STC حلول',
      logo: '📶',
      industry: 'التقنية',
      location: 'الرياض',
      employees: '8,000+',
      jobs: 87,
      rating: 4.2,
      featured: false
    },
    {
      id: 8,
      name: 'ماجد الفطيم',
      logo: '🛍️',
      industry: 'التجزئة',
      location: 'جدة',
      employees: '10,000+',
      jobs: 76,
      rating: 4.1,
      featured: false
    },
    {
      id: 9,
      name: 'الزامل للصناعة',
      logo: '🏗️',
      industry: 'الصناعة',
      location: 'الدمام',
      employees: '7,000+',
      jobs: 65,
      rating: 4.0,
      featured: false
    },
    {
      id: 10,
      name: 'الخزف السعودي',
      logo: '🏺',
      industry: 'الصناعة',
      location: 'الرياض',
      employees: '5,000+',
      jobs: 54,
      rating: 3.9,
      featured: false
    },
    {
      id: 11,
      name: 'التعاونية للتأمين',
      logo: '🛡️',
      industry: 'التأمين',
      location: 'الرياض',
      employees: '4,000+',
      jobs: 43,
      rating: 3.8,
      featured: false
    },
    {
      id: 12,
      name: 'الإنماء للاستثمار',
      logo: '📊',
      industry: 'الاستثمار',
      location: 'الرياض',
      employees: '3,000+',
      jobs: 32,
      rating: 3.7,
      featured: false
    },
  ];

  const industries = [
    'جميع الصناعات',
    'النفط والغاز',
    'البتروكيماويات',
    'الاتصالات',
    'الخدمات المالية',
    'التقنية',
    'التجزئة',
    'الصناعة',
    'التأمين',
    'الاستثمار',
    'التعليم',
    'الصحة'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            اكتشف أفضل الشركات في السعودية
          </h1>
          <p className="text-lg text-center mb-8 opacity-90">
            أكثر من 2,500 شركة توظيف في مختلف القطاعات
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن شركة أو صناعة..."
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-right text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-semibold text-gray-700">الصناعات:</span>
            {industries.map((industry, index) => (
              <button
                key={index}
                className="bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-4 py-2 rounded-lg transition duration-200"
              >
                {industry}
              </button>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              الشركات ({companies.length})
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <span>ترتيب حسب:</span>
              <select className="border border-gray-300 rounded-lg p-2">
                <option>الأكثر وظائف</option>
                <option>الأعلى تقييماً</option>
                <option>الأكبر حجماً</option>
                <option>الأحدث</option>
              </select>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className={`bg-white rounded-xl shadow-md border ${
                company.featured ? 'border-blue-300 border-2' : 'border-gray-200'
              } p-6 hover:shadow-lg transition duration-300`}
            >
              {company.featured && (
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ مميزة
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{company.logo}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{company.name}</h3>
                  <p className="text-gray-600">{company.industry}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{company.employees} موظف</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{company.jobs} وظيفة متاحة</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{company.rating} تقييم</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link
                  to={`/company/${company.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition duration-300"
                >
                  عرض الشركة
                </Link>
                <Link
                  to="/jobs"
                  className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 rounded-lg font-semibold transition duration-300"
                >
                  الوظائف
                </Link>
              </div>
            </div>
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
  );
};

export default CompaniesPage;