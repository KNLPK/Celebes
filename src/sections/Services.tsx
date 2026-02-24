import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Radio, Settings, Activity, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: HardHat,
    title: 'Construction',
    subtitle: 'Civil Engineering',
    description: 'Comprehensive civil engineering and building construction services. From foundation to finishing, we deliver projects with precision and quality.',
    features: ['Building Construction', 'Infrastructure Development', 'Project Management', 'Quality Assurance'],
    image: '/hero-bg.jpg',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    icon: Radio,
    title: 'Telecommunications',
    subtitle: 'Tower Infrastructure',
    description: 'Expert telecommunication infrastructure development including tower erection, installation, and maintenance for optimal network coverage.',
    features: ['Tower Erection', 'Antenna Installation', 'Network Planning', 'Maintenance Services'],
    image: '/telecom-tower.jpg',
    color: 'from-cyan-600 to-cyan-800',
  },
  {
    id: 3,
    icon: Settings,
    title: 'Managed Services',
    subtitle: 'Operations & Maintenance',
    description: 'End-to-end maintenance and operational support ensuring your infrastructure runs at peak performance around the clock.',
    features: ['24/7 Monitoring', 'Preventive Maintenance', 'Technical Support', 'Asset Management'],
    image: '/server-room.jpg',
    color: 'from-indigo-600 to-indigo-800',
  },
  {
    id: 4,
    icon: Activity,
    title: 'Walktest',
    subtitle: 'RF Drive Testing',
    description: 'Professional RF drive testing and network optimization services to ensure seamless connectivity and optimal signal strength.',
    features: ['Drive Testing', 'Network Optimization', 'Coverage Analysis', 'Performance Reporting'],
    image: '/tower-installation.jpg',
    color: 'from-teal-600 to-teal-800',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

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

      // Accordion entrance
      gsap.fromTo(
        accordionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="font-display text-sm font-semibold tracking-widest text-primary uppercase">
              What We Do
            </span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our Services
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions spanning construction, telecommunications, 
            and managed services to meet your infrastructure needs.
          </p>
        </div>

        {/* Service Accordion - Desktop */}
        <div
          ref={accordionRef}
          className="hidden lg:flex h-[600px] gap-2 rounded-2xl overflow-hidden shadow-2xl"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 industrial-ease ${
                activeIndex === index ? 'flex-[3]' : 'flex-1'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Icon - always visible */}
                <div
                  className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    activeIndex === index ? 'scale-100' : 'scale-90'
                  }`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title - always visible */}
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {service.title}
                </h3>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 industrial-ease ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-display text-sm text-white/70 mb-3">{service.subtitle}</p>
                  <p className="font-body text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center gap-2 text-secondary font-display font-semibold text-sm group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Number indicator */}
              <div className="absolute top-6 right-6 font-display font-bold text-6xl text-white/10">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards - Mobile */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg card-lift"
            >
              {/* Background Image */}
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70`} />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy">{service.title}</h3>
                    <p className="font-display text-xs text-gray-500">{service.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
