import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedJobs from '../components/FeaturedJobs';
import QuickStats from '../components/QuickStats';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const stats = [
    { label: 'وظيفة جديدة اليوم', value: '127', icon: Briefcase },
    { label: 'شركة توظيف', value: '2,543', icon: Building },
    { label: 'مرشح نشط', value: '45,231', icon: Users },
    { label: 'وظيفة مميزة', value: '89', icon: Star },
  ];

  const categories = [
    { name: 'تكنولوجيا المعلومات', icon: '💻', count: 1245 },
    { name: 'المحاسبة والمالية', icon: '💰', count: 876 },
    { name: 'التسويق والمبيعات', icon: '📈', count: 654 },
    { name: 'الهندسة', icon: '⚙️', count: 987 },
    { name: 'الموارد البشرية', icon: '👥', count: 432 },
    { name: 'الخدمات الصحية', icon: '🏥', count: 765 },
    { name: 'التعليم', icon: '📚', count: 543 },
    { name: 'الإدارة', icon: '📊', count: 321 },
  ];

  const topCompanies = [
    { name: 'أرامكو السعودية', logo: '🏢', jobs: 245 },
    { name: 'سابك', logo: '🏭', jobs: 187 },
    { name: 'الاتصالات السعودية', logo: '📱', jobs: 156 },
    { name: 'البنك الأهلي', logo: '🏦', jobs: 132 },
    { name: 'الراجحي', logo: '💳', jobs: 121 },
    { name: 'الرياض', logo: '🏙️', jobs: 98 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ابحث عن وظيفتك المثالية في السعودية
            </h1>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى آلاف الباحثين عن عمل والشركات الرائدة في أكبر منصة توظيف سعودية
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="ابحث عن وظيفة، تخصص، أو شركة..."
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-right text-gray-800"
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
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-right text-gray-800"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <Link
                  to="/jobs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center"
                >
                  بحث
                </Link>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <span className="text-gray-600">الأكثر بحثاً:</span>
                {['مهندس برمجيات', 'محاسب', 'مدير مشاريع', 'مصمم جرافيك', 'مطور ويب'].map((tag) => (
                  <button
                    key={tag}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition duration-200"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 py-8">
        <QuickStats stats={stats} />
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">تصفح حسب التخصص</h2>
          <p className="text-gray-600">اختر من بين آلاف الوظائف في مختلف المجالات</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/jobs"
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.count.toLocaleString()} وظيفة</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">الوظائف المميزة</h2>
              <p className="text-gray-600">أفضل الفرص الوظيفية من الشركات الرائدة</p>
            </div>
            <Link
              to="/jobs"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              عرض جميع الوظائف
              <span>←</span>
            </Link>
          </div>
          <FeaturedJobs />
        </div>
      </div>

      {/* Top Companies */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">أفضل الشركات</h2>
          <p className="text-gray-600">انضم إلى الشركات الرائدة في سوق العمل السعودي</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {topCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{company.logo}</div>
              <h3 className="font-bold text-gray-800 mb-2">{company.name}</h3>
              <p className="text-blue-600 font-semibold">{company.jobs} وظيفة</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلة البحث عن وظيفتك اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            سجل الآن وانضم إلى مجتمع التوظيف الأكبر في السعودية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              تصفح الوظائف
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
              سجل كباحث عن عمل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;