import SearchBar from './SearchBar';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
}

export default function HeroSection({ onSearch, onLocationChange }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            وظائف في <span className="text-blue-600">السعودية</span> اليوم
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            ١٠٧,٧١٧ وظيفة تم نشرها خلال آخر ثلاثة أشهر على منصة تنقيب. تصفح الوظائف وقدّم الآن.
          </p>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={onSearch} onLocationChange={onLocationChange} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">🔍 البحث المتقدم</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">💼 وظائف عن بعد</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">🏢 وظائف حكومية</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">📈 وظائف حديثة</span>
          </div>
        </div>
      </div>
    </section>
  );
}