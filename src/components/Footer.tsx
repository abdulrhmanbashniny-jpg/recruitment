import { Globe, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">تنقيب السعودية</h3>
                <p className="text-gray-400 text-sm">أكبر منصة للوظائف في العالم العربي</p>
              </div>
            </div>
            <p className="text-gray-400">
              اعثر على جميع الوظائف في العالم العربي على منصة واحدة
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">للباحثين عن عمل</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">البحث عن وظائف</a></li>
              <li><a href="#" className="hover:text-white transition-colors">إنشاء سيرة ذاتية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">نصائح التوظيف</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الشركات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">لأصحاب العمل</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">نشر وظيفة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">البحث عن سير ذاتية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">حلول التوظيف</a></li>
              <li><a href="#" className="hover:text-white transition-colors">التسعير</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">عن تنقيب</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">عن الشركة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors">المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 تنقيب السعودية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Award className="h-5 w-5" />
            <span>الشريك الرسمي لبرنامج التوطين في السعودية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}