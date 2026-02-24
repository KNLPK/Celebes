import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2011',
    title: 'Company Founded',
    description: 'Established in Palu, Central Sulawesi by Tonny Chandra, focusing on construction and trading.',
  },
  {
    year: '2014',
    title: 'Telecom Expansion',
    description: 'Expanded into telecommunications construction, building towers across Indonesia.',
  },
  {
    year: '2020',
    title: 'Managed Services',
    description: 'Partnered with PT Centratama Menara Indonesia for manage service and walktest operations.',
  },
  {
    year: '2021',
    title: 'Toll Road Management',
    description: 'Awarded contract by PT Astra Infra Solution for Cipali and Jombang toll road management.',
  },
];

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: TrendingUp, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Expert Team' },
  { icon: Award, value: 'ISO', label: 'Certified' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: 100 },
        {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline items
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <div ref={contentRef}>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="font-display text-sm font-semibold tracking-widest text-primary uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              Building Indonesia's
              <span className="text-gradient block">Future Together</span>
            </h2>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              Established in 2011, PT Celebes Kontruksindo has grown from a local construction 
              firm to a national leader in infrastructure and telecommunications. Founded by 
              Tonny Chandra in Palu, Central Sulawesi, we have built our reputation on quality, 
              safety, and innovation.
            </p>

            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Our headquarters at Jalan Tupai No. 06, Perum. Permata Hijau I Blok B, 
              Tatura Selatan, Palu Selatan serves as the hub for our operations across 
              Indonesia. From construction to telecommunications, managed services to toll 
              road operations, we deliver excellence in every project.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-2xl text-navy">{stat.value}</div>
                  <div className="font-body text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Timeline */}
          <div className="relative">
            {/* Image */}
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-12"
              style={{ willChange: 'transform' }}
            >
              <img
                src="/about-image.jpg"
                alt="Business professionals"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative">
              <h3 className="font-display font-bold text-xl text-navy mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="timeline-item relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] border-2 border-white shadow-md" />
                    <div className="font-display font-bold text-secondary text-sm mb-1">
                      {milestone.year}
                    </div>
                    <h4 className="font-display font-semibold text-navy mb-1">
                      {milestone.title}
                    </h4>
                    <p className="font-body text-sm text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
