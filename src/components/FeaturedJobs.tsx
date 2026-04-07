import React from 'react';
import { Star, MapPin, Briefcase, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedJobs: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: 'مهندس برمجيات',
      company: 'شركة التقنية المتقدمة',
      location: 'الرياض',
      salary: '25,000 - 35,000 ر.س',
      type: 'دوام كامل',
      logo: '💻',
      featured: true
    },
    {
      id: 2,
      title: 'مدير مشاريع',
      company: 'شركة الإنشاءات الحديثة',
      location: 'الدمام',
      salary: '30,000 - 40,000 ر.س',
      type: 'دوام كامل',
      logo: '👨‍💼',
      featured: true
    },
    {
      id: 3,
      title: 'محلل بيانات',
      company: 'مجموعة البيانات الذكية',
      location: 'جدة',
      salary: '18,000 - 25,000 ر.س',
      type: 'دوام كامل',
      logo: '📊',
      featured: true
    },
    {
      id: 4,
      title: 'مطور ويب',
      company: 'شركة الحلول التقنية',
      location: 'الرياض',
      salary: '20,000 - 30,000 ر.س',
      type: 'دوام كامل',
      logo: '🌐',
      featured: true
    },
    {
      id: 5,
      title: 'أخصائي تسويق',
      company: 'وكالة التسويق الرقمي',
      location: 'الدمام',
      salary: '14,000 - 20,000 ر.س',
      type: 'دوام كامل',
      logo: '📈',
      featured: true
    },
    {
      id: 6,
      title: 'مهندس شبكات',
      company: 'شركة الاتصالات المتقدمة',
      location: 'الرياض',
      salary: '22,000 - 32,000 ر.س',
      type: 'دوام كامل',
      logo: '🔌',
      featured: true
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200 p-6 hover:shadow-lg transition duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 rounded-lg">
                <span className="text-2xl">{job.logo}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{job.title}</h4>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star className="w-3 h-3" />
              مميز
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              to={`/job/${job.id}`}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition duration-300"
            >
              التقديم الآن
            </Link>
            <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition duration-300">
              حفظ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedJobs;