import { useEffect, useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Building2,
  User,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Users,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'contact', ref: contactRef },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'الرئيسية', ref: heroRef },
    { id: 'about', label: 'عني', ref: aboutRef },
    { id: 'experience', label: 'الخبرة', ref: experienceRef },
    { id: 'projects', label: 'المشاريع', ref: projectsRef },
    { id: 'skills', label: 'المهارات', ref: skillsRef },
    { id: 'contact', label: 'التواصل', ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 py-3' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">أحمد أبو العينين</div>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-sky-400 bg-sky-400/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(222_47%_6%)_100%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="animate-fade-in mb-8">
              <Badge className="px-4 py-2 text-sm bg-sky-500/10 text-sky-400 border-sky-500/30 hover:bg-sky-500/20">
                <Briefcase className="w-4 h-4 ml-2" />
                محاسب & مستشار تنفيذي لنظام Odoo
              </Badge>
            </div>

            {/* Name */}
            <h1 className="animate-slide-up text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gradient">أحمد</span>
              <span className="text-foreground"> أبو العينين</span>
            </h1>

            {/* Title */}
            <p className="animate-slide-up delay-200 text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              محاسب متخصص في تنفيذ وتطبيق أنظمة Odoo ERP، مع خبرة في إدارة المبيعات والمشتريات والمخزون
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up delay-300 flex flex-wrap justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg rounded-xl glow"
                onClick={() => scrollToSection(contactRef)}
              >
                <Mail className="w-5 h-5 ml-2" />
                تواصل معي
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg rounded-xl"
                onClick={() => scrollToSection(experienceRef)}
              >
                <Briefcase className="w-5 h-5 ml-2" />
                الخبرات المهنية
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-slide-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: '+5', label: 'مشاريع منفذة' },
                { value: '+3', label: 'سنوات خبرة' },
                { value: '+10', label: 'شركة تعاونت معها' },
                { value: '100%', label: 'نسبة رضا العملاء' },
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative glass rounded-3xl p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-sky-400/50 glow">
                    <img 
                      src="/profile.jpg" 
                      alt="أحمد أبو العينين" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">أحمد أبو العينين</h3>
                  <p className="text-muted-foreground">Junior Odoo Implementation Consultant</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <GraduationCap className="w-6 h-6 mx-auto mb-2 text-sky-400" />
                    <div className="text-sm text-muted-foreground">التعليم</div>
                    <div className="font-semibold">بكالوريوس تجارة</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <MapPin className="w-6 h-6 mx-auto mb-2 text-sky-400" />
                    <div className="text-sm text-muted-foreground">الموقع</div>
                    <div className="font-semibold">كفر الشيخ، مصر</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
                <User className="w-4 h-4 ml-2" />
                نبذة عني
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                محاسب <span className="text-gradient">شغوف</span> بالتقنية
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  أعمل كمنفذ نظم محاسبية في شركة الحلول المالية، متخصص في تنفيذ وتطبيق نظام Odoo ERP للعملاء في مختلف القطاعات.
                </p>
                <p>
                  حاصل على بكالوريوس تجارة شعبة محاسبة من جامعة كفر الشيخ عام 2024، وأمتلك خبرة عملية في إدارة المبيعات والمشتريات والمخزون ونقاط البيع.
                </p>
                <p>
                  أسعى دائماً لتطوير مهاراتي في مجال الأنظمة المحاسبية وتقديم أفضل الحلول للعملاء لمساعدتهم في تحسين أداء أعمالهم.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <span>ahmedaboeleinin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <span dir="ltr">+20 106 874 5532</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <span>مصر – محافظة كفر الشيخ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
              <GraduationCap className="w-4 h-4 ml-2" />
              التعليم
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">المؤهل الدراسي</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass border-0 overflow-hidden hover:glow transition-all duration-500">
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">جامعة كفر الشيخ</h3>
                    <p className="text-muted-foreground mb-4">2020 – 2024</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sky-400" />
                      <span className="font-semibold">بكالوريوس تجارة شعبة محاسبة – 2024</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
              <Briefcase className="w-4 h-4 ml-2" />
              الخبرة المهنية
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">مسيرتي المهنية</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="glass border-0 overflow-hidden hover:glow transition-all duration-500">
              <CardHeader className="p-8 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">شركة الحلول المالية</h3>
                      <p className="text-muted-foreground">منفذ نظم محاسبية – Odoo</p>
                    </div>
                  </div>
                  <Badge className="w-fit bg-green-500/10 text-green-400 border-green-500/30">
                    2024 – حتى الآن
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-sky-400 font-semibold mb-6">Junior Odoo Implementation Consultant</p>
                <ul className="space-y-4">
                  {[
                    'تنفيذ وتطبيق نظام Odoo ERP للعملاء',
                    'تهيئة وحدات المبيعات، المشتريات، المخزون، المحاسبة',
                    'إعداد المستخدمين وتحديد الصلاحيات',
                    'اختبار النظام وتقديم الدعم الفني للمستخدمين',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
              <Code className="w-4 h-4 ml-2" />
              المشاريع
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">المشاريع المنفذة</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="glass border-0 overflow-hidden hover:glow transition-all duration-500 group">
              <CardHeader className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">مجموعة أعمال الكبار</h3>
                <Badge className="bg-sky-500/10 text-sky-400 border-sky-500/30">2024</Badge>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• مطاعم جمل وبو بو الوجبات السريعة</li>
                  <li>• مجموعة الكبار للمقاولات العامة</li>
                  <li>• مركز الخليج للصرافة</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">تطبيق نظام Odoo ERP مع نقاط البيع (POS)</p>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="glass border-0 overflow-hidden hover:glow transition-all duration-500 group">
              <CardHeader className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">شركة بيت المكملات</h3>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">2024 – 2025</Badge>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• العمل على 3 فروع</li>
                  <li>• تنفيذ نظام نقاط البيع (POS)</li>
                  <li>• إدارة وتهيئة نظام المخزون</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">متابعة حركة الأصناف والتقارير اليومية</p>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="glass border-0 overflow-hidden hover:glow transition-all duration-500 group">
              <CardHeader className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">أطفال المشاعر الراقية</h3>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30">2025</Badge>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• تنفيذ نظام نقاط البيع على Odoo ERP</li>
                  <li>• تدريب المستخدمين على النظام</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">ضمان استخدام صحيح وممتاز للنظام</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
              <Settings className="w-4 h-4 ml-2" />
              المهارات
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">مهاراتي التقنية</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: 'تنفيذ وتطبيق نظام Odoo ERP',
                color: 'from-sky-400 to-blue-600',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'إدارة وحدات Sales – Purchase – Inventory',
                color: 'from-emerald-400 to-emerald-600',
              },
              {
                icon: <FileSpreadsheet className="w-6 h-6" />,
                title: 'تحليل وتوثيق متطلبات العمل',
                color: 'from-purple-400 to-purple-600',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'إعداد المستخدمين والصلاحيات',
                color: 'from-orange-400 to-orange-600',
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: 'اختبار الأنظمة (System Testing)',
                color: 'from-pink-400 to-pink-600',
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: 'دعم المستخدمين والتدريب الأساسي',
                color: 'from-cyan-400 to-cyan-600',
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'العمل ضمن فريق وتنفيذ التعليمات',
                color: 'from-indigo-400 to-indigo-600',
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: 'إعداد التسويات البنكية والقوائم المالية',
                color: 'from-rose-400 to-rose-600',
              },
              {
                icon: <FileSpreadsheet className="w-6 h-6" />,
                title: 'إتقان Excel المتقدم وبرامج ERP',
                color: 'from-amber-400 to-amber-600',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'المراجعة المالية والتدقيق',
                color: 'from-teal-400 to-teal-600',
              },
              {
                icon: <FileSpreadsheet className="w-6 h-6" />,
                title: 'إعداد التقارير المالية والتحليل المالي',
                color: 'from-violet-400 to-violet-600',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'مهارات تواصل وتنظيم جيدة',
                color: 'from-lime-400 to-lime-600',
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/30">
              <Mail className="w-4 h-4 ml-2" />
              التواصل
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">تواصل معي</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              لا تتردد في التواصل معي للاستفسارات أو الفرص المهنية
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  <a
                    href="mailto:ahmedaboeleinin@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">البريد الإلكتروني</div>
                      <div className="text-lg font-semibold">ahmedaboeleinin@gmail.com</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-sky-400 transition-colors" />
                  </a>

                  <a
                    href="tel:+201068745532"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">رقم الهاتف</div>
                      <div className="text-lg font-semibold" dir="ltr">+20 106 874 5532</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">الموقع</div>
                      <div className="text-lg font-semibold">مصر – محافظة كفر الشيخ</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-gradient mb-2">أحمد أبو العينين</h3>
              <p className="text-sm text-muted-foreground">محاسب & مستشار تنفيذي لنظام Odoo</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:ahmedaboeleinin@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/20 hover:text-sky-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+201068745532"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
            © 2025 أحمد أبو العينين. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
