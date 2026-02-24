import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Telecommunication Tower Installation',
    subtitle: 'Pemasangan Tower Telekomunikasi',
    description: 'Installation of telecommunication towers across multiple locations in Indonesia, ensuring optimal network coverage and connectivity.',
    location: 'Various Locations, Indonesia',
    year: '2014 - Present',
    client: 'Major Telecom Providers',
    image: '/telecom-tower.jpg',
    category: 'Telecommunications',
  },
  {
    id: 2,
    title: 'Toll Gate Construction',
    subtitle: 'Pembangunan Gerbang Tol',
    description: 'Construction of main toll gate facilities for Hutama Karya, featuring modern design and advanced traffic management systems.',
    location: 'Cipali & Jombang',
    year: '2021 - Present',
    client: 'PT Astra Infra Solution',
    image: '/toll-gate.jpg',
    category: 'Construction',
  },
  {
    id: 3,
    title: 'Traffic Monitoring System',
    subtitle: 'Sistem Monitoring Lalu Lintas',
    description: 'Development and implementation of comprehensive traffic monitoring systems with CCTV analytics and ANPR integration.',
    location: 'Jombang-Mojokerto Toll Road',
    year: '2021 - Present',
    client: 'PT Astra Infra Solution',
    image: '/traffic-monitoring.jpg',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Tower Maintenance Project',
    subtitle: 'Pemeliharaan Tower',
    description: 'Ongoing maintenance and optimization of telecommunication towers ensuring 99.9% uptime and peak performance.',
    location: 'Jakarta - Banten Area',
    year: '2020 - Present',
    client: 'PT Centratama Menara Indonesia',
    image: '/tower-installation.jpg',
    category: 'Managed Services',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

      // Carousel entrance
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="font-display text-sm font-semibold tracking-widest text-primary uppercase">
                Our Work
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy">
              Featured Projects
            </h2>
          </div>
          <p className="font-body text-gray-600 max-w-md mt-4 lg:mt-0">
            Showcasing our expertise across construction, telecommunications, 
            and technology infrastructure projects.
          </p>
        </div>

        {/* Project Carousel */}
        <div ref={carouselRef} className="relative">
          {/* Main Display */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 industrial-ease ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                </div>
              ))}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white font-display text-xs font-semibold px-4 py-2 rounded-full">
                  {currentProject.category}
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative min-h-[400px]">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 industrial-ease ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-display text-6xl font-bold text-primary/10">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="font-display text-sm text-secondary font-semibold mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-navy mb-4">
                    {project.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-body text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-body text-sm">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Building className="w-5 h-5 text-primary" />
                      <span className="font-body text-sm">{project.client}</span>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-glow">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-primary ring-offset-2 scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
