import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import CompaniesPage from './pages/CompaniesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/jobs', label: 'الوظائف' },
    { path: '/companies', label: 'الشركات' },
    { path: '/about', label: 'من نحن' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-gray-800">تنقيب السعودية</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 font-medium transition duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button className="text-gray-600 hover:text-blue-600 font-medium">
                  تسجيل الدخول
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200">
                  سجل مجاناً
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <button className="w-full text-gray-600 hover:text-blue-600 font-medium py-2">
                      تسجيل الدخول
                    </button>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mt-2">
                      سجل مجاناً
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold">تنقيب السعودية</span>
                </div>
                <p className="text-gray-400">
                  منصة التوظيف الرائدة في السعودية، نسعى لربط المواهب بالفرص الوظيفية المناسبة.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
                <ul className="space-y-2">
                  <li><Link to="/jobs" className="text-gray-400 hover:text-white transition duration-200">الوظائف</Link></li>
                  <li><Link to="/companies" className="text-gray-400 hover:text-white transition duration-200">الشركات</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-200">من نحن</Link></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">اتصل بنا</a></li>
                </ul>
              </div>

              {/* For Job Seekers */}
              <div>
                <h3 className="text-lg font-bold mb-4">للباحثين عن عمل</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">سجل سيرتك الذاتية</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">ابحث عن وظائف</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">نصائح للتوظيف</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">أسئلة شائعة</a></li>
                </ul>
              </div>

              {/* For Employers */}
              <div>
                <h3 className="text-lg font-bold mb-4">لأصحاب العمل</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">انشر وظيفة</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">ابحث عن موظفين</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">حلول التوظيف</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">التسعير</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 تنقيب السعودية. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;