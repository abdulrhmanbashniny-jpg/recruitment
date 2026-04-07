import React from 'react';
import { Home, Search, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-gray-800 mb-4">
          404
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          الصفحة غير موجودة
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          يمكنك العودة إلى الصفحة الرئيسية أو تصفح الوظائف المتاحة.
        </p>
        
        {/* Illustration */}
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500">لم نتمكن من العثور على ما تبحث عنه</p>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/"
            className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <Home className="w-8 h-8 text-blue-600 mb-3" />
            <span className="font-semibold text-gray-800">الصفحة الرئيسية</span>
            <span className="text-gray-600 text-sm mt-1">العودة إلى البداية</span>
          </Link>
          
          <Link
            to="/jobs"
            className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <Search className="w-8 h-8 text-blue-600 mb-3" />
            <span className="font-semibold text-gray-800">تصفح الوظائف</span>
            <span className="text-gray-600 text-sm mt-1">آلاف الفرص الوظيفية</span>
          </Link>
          
          <Link
            to="/companies"
            className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <Briefcase className="w-8 h-8 text-blue-600 mb-3" />
            <span className="font-semibold text-gray-800">الشركات</span>
            <span className="text-gray-600 text-sm mt-1">أفضل الشركات التوظيفية</span>
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="ابحث عن وظيفة أو شركة..."
              className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-right"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        {/* Contact Support */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-2">هل تحتاج إلى مساعدة؟</h3>
          <p className="text-gray-600 mb-4">
            يمكنك التواصل مع فريق الدعم للحصول على المساعدة
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            اتصل بالدعم
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;