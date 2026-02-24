import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target, Lightbulb, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest standards of professionalism and ethical conduct.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for perfection in every project we undertake.',
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance animation
      const cards = cardsRef.current?.querySelectorAll('.vm-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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

      // Values animation
      const valueItems = valuesRef.current?.querySelectorAll('.value-item');
      if (valueItems) {
        gsap.fromTo(
          valueItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Glow pulse animation
      gsap.to('.glow-pulse', {
        opacity: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] glow-pulse" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-secondary" />
            <span className="font-display text-sm font-semibold tracking-widest text-secondary uppercase">
              Our Purpose
            </span>
            <div className="w-12 h-0.5 bg-secondary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Vision & Mission
          </h2>
        </div>

        {/* Vision & Mission Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Vision Card */}
          <div className="vm-card relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-dark rounded-2xl p-8 lg:p-10 h-full border border-white/10 hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                To be Indonesia's most trusted infrastructure partner, recognized for 
                excellence in construction, telecommunications, and managed services. 
                We aim to shape the nation's future through innovative and sustainable 
                infrastructure solutions.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-dark rounded-2xl p-8 lg:p-10 h-full border border-white/10 hover:border-secondary/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Delivering excellence through innovation, safety, and sustainable practices. 
                We are committed to providing world-class infrastructure solutions that 
                connect communities, drive economic growth, and improve quality of life 
                across Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-display font-bold text-xl text-white text-center mb-10">
            Our Core Values
          </h3>
          <div ref={valuesRef} className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-item text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-display font-semibold text-white mb-2">{value.title}</h4>
                <p className="font-body text-sm text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
