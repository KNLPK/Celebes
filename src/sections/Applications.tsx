import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Smartphone, 
  Monitor, 
  TrafficCone, 
  Camera, 
  Fuel, 
  MapPin, 
  CreditCard, 
  MessageSquare,
  CheckCircle,
  Clock,
  Users,
  FileText
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const applications = [
  {
    id: 1,
    name: 'MyInfotol',
    tagline: 'Aplikasi Informasi Pengguna Jalan Tol Astra',
    description: 'Comprehensive toll road information application providing real-time updates and services for highway users.',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-700',
    features: [
      { icon: Camera, label: 'CCTV Ruas Toll Astra' },
      { icon: MapPin, label: 'List Rest Area' },
      { icon: CreditCard, label: 'Perhitungan Tarif Toll' },
      { icon: FileText, label: 'Struk Digital' },
      { icon: MessageSquare, label: 'Opini Anda' },
      { icon: Fuel, label: 'List SPBU Terdekat' },
      { icon: MapPin, label: 'Lokasi Wisata Terdekat' },
      { icon: TrafficCone, label: 'Info Gangguan & Pemeliharaan' },
    ],
  },
  {
    id: 2,
    name: 'Internal Celebes',
    tagline: 'Aplikasi Ticketing Petugas Lapangan',
    description: 'Internal field staff management application for streamlined operations and task tracking.',
    icon: Users,
    color: 'from-cyan-500 to-cyan-700',
    features: [
      { icon: CheckCircle, label: 'Ticketing Penugasan' },
      { icon: MapPin, label: 'Tracking Lokasi' },
      { icon: Clock, label: 'Schedule' },
      { icon: CheckCircle, label: 'Absensi Petugas' },
      { icon: Camera, label: 'Before & After' },
      { icon: Clock, label: 'Timeline Project' },
      { icon: FileText, label: 'Report' },
    ],
  },
  {
    id: 3,
    name: 'Traffic Monitoring System',
    tagline: 'Aplikasi Monitoring Ruas Toll ASTRA',
    description: 'Advanced traffic monitoring and management system for toll road operations.',
    icon: Monitor,
    color: 'from-indigo-500 to-indigo-700',
    features: [
      { icon: Monitor, label: 'Dashboard Management' },
      { icon: Clock, label: 'Jadwal Shift' },
      { icon: CreditCard, label: 'Transaction' },
      { icon: FileText, label: 'Laporan Laka Lantas' },
      { icon: Camera, label: 'CCTV Analytics & ANPR' },
      { icon: Smartphone, label: 'App Tablet untuk Petugas' },
      { icon: TrafficCone, label: 'Deteksi Event & Kecepatan' },
    ],
  },
];

export default function Applications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.app-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="applications"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-secondary" />
            <span className="font-display text-sm font-semibold tracking-widest text-secondary uppercase">
              Technology Solutions
            </span>
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our Applications
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto">
            Innovative digital solutions developed in-house to enhance operational 
            efficiency and customer experience.
          </p>
        </div>

        {/* Applications Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="app-card group relative"
            >
              {/* Card */}
              <div className="relative glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Header with gradient */}
                <div className={`relative bg-gradient-to-br ${app.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">{app.name}</h3>
                      <p className="font-display text-xs text-white/70">{app.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Decorative circle */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
                    {app.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {app.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        <feature.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="font-body text-xs text-white/80">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-white/60 mb-4">
            Interested in our technology solutions?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-display font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-glow-cyan"
          >
            Contact Us for Demo
          </a>
        </div>
      </div>
    </section>
  );
}
