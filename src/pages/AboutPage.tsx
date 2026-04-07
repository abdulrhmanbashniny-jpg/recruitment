import React from 'react';
import { Target, Users, Shield, Rocket, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'رسالتنا',
      description: 'ربط الباحثين عن عمل بأفضل الفرص الوظيفية في السعودية'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'مجتمعنا',
      description: 'أكثر من 50,000 باحث عن عمل و 2,500 شركة توظيف'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'موثوقيتنا',
      description: 'جميع الوظائف والشركات يتم التحقق منها قبل النشر'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'تطورنا',
      description: 'أحدث التقنيات لتحسين تجربة البحث والتوظيف'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'تميزنا',
      description: 'الجوائز والتقديرات المحلية والدولية'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'تأثيرنا',
      description: 'نساهم في تنمية سوق العمل السعودي'
    }
  ];

  const milestones = [
    { year: '2015', title: 'التأسيس', description: 'انطلاق المنصة بأول 100 وظيفة' },
    { year: '2017', title: 'النمو', description: 'تجاوز 10,000 وظيفة و 500 شركة' },
    { year: '2019', title: 'التوسع', description: 'إطلاق تطبيق الهاتف المحمول' },
    { year: '2021', title: 'التميز', description: 'فوز بجائزة أفضل منصة توظيف' },
    { year: '2023', title: 'الريادة', description: 'تجاوز 50,000 مستخدم نشط' },
    { year: '2025', title: 'المستقبل', description: 'توسيع الخدمات لجميع دول الخليج' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            منصة التوظيف الرائدة في السعودية، نسعى لربط المواهب بالفرص الوظيفية المناسبة 
            وتقديم حلول توظيف مبتكرة للشركات والباحثين عن عمل
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-blue-600 mb-4">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              نسعى لبناء جسر يربط بين المواهب السعودية والعربية وبين أفضل الفرص الوظيفية 
              في السوق السعودي، من خلال تقديم منصة سهلة الاستخدام وآمنة تمكن الباحثين 
              عن عمل من إيجاد الوظائف المناسبة لمهاراتهم وتطلعاتهم المهنية.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-blue-600 mb-4">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            أن نكون المنصة الأولى والأكثر موثوقية للتوظيف في السعودية والمنطقة، 
            وأن نساهم بشكل فعال في تنمية الاقتصاد السعودي من خلال تمكين الكفاءات 
            وتسهيل عملية التوظيف للشركات والمؤسسات.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ما يميزنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة من المميزات التي تجعلنا الخيار الأمثل للباحثين عن عمل وأصحاب العمل
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">محطات رحلتنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مسيرة من النجاح والتطور منذ تأسيسنا وحتى اليوم
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">فريقنا</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            فريق من الخبراء والمتخصصين في مجال التوظيف والتقنية يعملون بجد 
            لتقديم أفضل تجربة للمستخدمين
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-2">فريق التقنية</h3>
              <p>مطورون ومصممون يضمنون سلاسة تجربة المستخدم</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold mb-2">فريق التوظيف</h3>
              <p>خبراء في سوق العمل والتوظيف</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-2">فريق الدعم</h3>
              <p>دعم فني وإداري على مدار الساعة</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">انضم إلى مجتمعنا</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            سواء كنت باحثاً عن عمل أو صاحب شركة، نحن هنا لمساعدتك في تحقيق أهدافك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
              سجل كباحث عن عمل
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
              سجل كصاحب عمل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;