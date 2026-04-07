import { Briefcase, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">تنقيب السعودية</h1>
              <p className="text-gray-600 text-sm">أكبر منصة للوظائف في العالم العربي</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">البحث عن وظائف</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">نشر وظيفة</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">المدونة</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <User className="h-5 w-5" />
              <span>تسجيل الدخول</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              <Briefcase className="h-5 w-5" />
              <span>نشر وظيفة</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}