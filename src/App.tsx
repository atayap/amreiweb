import { useState } from 'react';

// Icons as components
const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AcademicIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AMREI</span>
          </div>
          
          <div className="items-center hidden space-x-8 md:flex">
            <a href="#about" className="font-medium text-gray-600 transition-colors hover:text-blue-600">About</a>
            <a href="#services" className="font-medium text-gray-600 transition-colors hover:text-blue-600">Services</a>
            <a href="#membership" className="font-medium text-gray-600 transition-colors hover:text-blue-600">Membership</a>
            <a href="#news" className="font-medium text-gray-600 transition-colors hover:text-blue-600">News</a>
            <a 
              href="https://t.me/amreiofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join Community
            </a>
          </div>

          <button 
            className="p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen && (
          <div className="py-4 border-t border-gray-100 md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="font-medium text-gray-600 transition-colors hover:text-blue-600">About</a>
              <a href="#services" className="font-medium text-gray-600 transition-colors hover:text-blue-600">Services</a>
              <a href="#membership" className="font-medium text-gray-600 transition-colors hover:text-blue-600">Membership</a>
              <a href="#news" className="font-medium text-gray-600 transition-colors hover:text-blue-600">News</a>
              <a 
                href="https://t.me/amreiofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Join Community
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden bg-white">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 hidden w-1/2 h-full bg-gradient-to-bl from-blue-600 via-blue-700 to-blue-800 lg:block">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute w-48 h-48 rounded-full top-20 right-20 bg-blue-400/20 blur-2xl"></div>
      </div>
    </div>

    <div className="relative z-10 flex items-center min-h-screen px-4 pt-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pt-0">
      <div className="grid items-center w-full gap-12 py-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Content */}
        <div className="order-2 text-center lg:text-left lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-100 rounded-full bg-blue-50">
            <div className="w-2 h-2 mr-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">Didirikan di Bogor, 21 Juli 2021</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="text-blue-600">AMREI</span>
          </h1>
          <h2 className="mb-6 text-xl font-semibold text-gray-700 sm:text-2xl lg:text-3xl">
            Asosiasi Marketer Real Estate Indonesia
          </h2>
          
          {/* Subheadline */}
          <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 lg:mx-0">
            Membangun komunitas marketer real estate yang profesional, kompeten, dan terpercaya di seluruh Indonesia.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row lg:items-start lg:justify-start">
            <a 
              href="https://t.me/amreiofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Join Community
            </a>
            <a 
              href="https://t.me/amreiofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-semibold text-gray-700 transition-all bg-white border-2 border-gray-200 sm:w-auto rounded-xl hover:border-blue-600 hover:text-blue-600"
            >
              <TelegramIcon />
              Join Telegram
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 sm:grid-cols-4">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">500+</div>
              <div className="mt-1 text-sm text-gray-500">Members</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">34</div>
              <div className="mt-1 text-sm text-gray-500">Provinsi</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">50+</div>
              <div className="mt-1 text-sm text-gray-500">Events</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-600 sm:text-3xl">3+</div>
              <div className="mt-1 text-sm text-gray-500">Tahun</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Card */}
        <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Main Card */}
            <div className="relative p-8 text-white shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl lg:p-10 shadow-blue-600/30">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-400/30 blur-xl"></div>
              
              {/* Logo */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <span className="text-3xl font-bold">A</span>
                </div>
                <h3 className="text-2xl font-bold">AMREI</h3>
                <p className="mt-1 text-sm text-blue-200">Official Community</p>
              </div>

              {/* Features List */}
              <div className="relative z-10 mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Edukasi & Training Profesional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Networking & Kolaborasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Industry Insights Terkini</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90">Sertifikasi & Pengembangan Karir</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative z-10 flex items-center gap-3 pt-6 border-t border-white/20">
                <a 
                  href="https://instagram.com/amreiofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-lg bg-white/10 hover:bg-white/20"
                >
                  <InstagramIcon />
                  @amreiofficial
                </a>
                <a 
                  href="https://t.me/amreiofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-lg bg-white/10 hover:bg-white/20"
                >
                  <TelegramIcon />
                  Telegram
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute flex items-center justify-center hidden w-20 h-20 transform bg-yellow-400 shadow-lg -top-4 -left-4 rounded-2xl rotate-12 sm:flex">
              <svg className="w-10 h-10 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <div className="absolute flex items-center justify-center hidden w-24 h-24 transform bg-blue-100 shadow-lg -bottom-6 -right-6 rounded-2xl -rotate-6 sm:flex">
              <BuildingIcon />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute hidden transform -translate-x-1/2 bottom-6 left-1/2 lg:block">
      <a href="#about" className="flex flex-col items-center text-gray-400 transition-colors hover:text-blue-600">
        <span className="mb-2 text-sm">Scroll Down</span>
        <div className="flex justify-center w-6 h-10 border-2 border-current rounded-full">
          <div className="w-1 h-2 mt-2 bg-current rounded-full animate-bounce"></div>
        </div>
      </a>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-20 bg-white md:py-28">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            About AMREI
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Indonesia's Premier Real Estate Marketer Association
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            AMREI (Asosiasi Marketer Real Estate Indonesia) is a national association dedicated to unifying and empowering real estate marketers across Indonesia. Established in Bogor on <strong>21 July 2021</strong>, we have grown to become the leading voice for real estate marketing professionals.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Our mission is to elevate the standards of real estate marketing in Indonesia through education, networking, and professional development. We believe in building a community where knowledge is shared, connections are made, and success is celebrated together.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl">
                <BuildingIcon />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Our Vision</h4>
                <p className="text-gray-600">To be the most trusted and influential real estate marketing association in Indonesia.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl">
                <UsersIcon />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">Our Mission</h4>
                <p className="text-gray-600">Empowering real estate marketers with knowledge, skills, and networks for success.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 p-8 text-white bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl md:p-12">
            <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10"></div>
            
            <h3 className="relative z-10 mb-6 text-2xl font-bold">Why Choose AMREI?</h3>
            <ul className="relative z-10 space-y-4">
              {[
                'National recognition and credibility',
                'Access to exclusive training programs',
                'Network with industry leaders',
                'Latest market insights and trends',
                'Professional certification support',
                'Community of trusted professionals'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute w-full h-full bg-blue-200 -z-10 top-4 left-4 rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <AcademicIcon />,
      title: 'Education & Training',
      description: 'Comprehensive training programs designed to enhance your real estate marketing skills and knowledge.'
    },
    {
      icon: <NetworkIcon />,
      title: 'Community Networking',
      description: 'Connect with fellow marketers, share experiences, and build valuable professional relationships.'
    },
    {
      icon: <ChartIcon />,
      title: 'Industry Insights',
      description: 'Stay updated with the latest market trends, analysis, and real estate industry developments.'
    },
    {
      icon: <TrendingIcon />,
      title: 'Professional Development',
      description: 'Grow your career with mentorship, certification support, and leadership opportunities.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            What We Do
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Empowering Real Estate Professionals
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide comprehensive support for real estate marketers to excel in their careers and contribute to the industry's growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl group hover:border-blue-200"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 transition-colors bg-blue-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="leading-relaxed text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Membership Section
const MembershipSection = () => {
  const benefits = [
    'Access to exclusive training and workshops',
    'Networking events with industry leaders',
    'Monthly industry reports and insights',
    'Professional certification programs',
    'Member directory and referral system',
    'Discounts on industry events and tools',
    'Legal and business consultation support',
    'Recognition and awards opportunities'
  ];

  return (
    <section id="membership" className="py-20 bg-white md:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="p-8 border border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl md:p-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Member Benefits</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Community & Membership
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Join Indonesia's Growing Real Estate Network
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Become part of AMREI and unlock a world of opportunities. Our members gain access to exclusive resources, connections, and support that accelerate their careers in real estate marketing.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Whether you're a seasoned professional or just starting out, AMREI provides the platform and community you need to succeed in the dynamic Indonesian real estate market.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <a 
                href="https://t.me/amreiofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-bold text-center text-white transition-all bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 hover:shadow-xl"
              >
                Become a Member
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 text-lg font-bold text-center text-gray-700 transition-all border-2 border-gray-300 rounded-xl hover:border-blue-600 hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// News Section
const NewsSection = () => {
  const news = [
    {
      date: 'December 2024',
      title: 'AMREI Year-End Gathering 2024',
      excerpt: 'Join us for our annual year-end gathering to celebrate achievements and set goals for 2025.',
      category: 'Event'
    },
    {
      date: 'November 2024',
      title: 'Real Estate Marketing Trends 2025',
      excerpt: 'Discover the emerging trends that will shape real estate marketing strategies in the coming year.',
      category: 'Insight'
    },
    {
      date: 'October 2024',
      title: 'New Partnership with Property Developers',
      excerpt: 'AMREI announces strategic partnerships with leading property developers across Indonesia.',
      category: 'Announcement'
    }
  ];

  return (
    <section id="news" className="py-20 md:py-28 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            News & Updates
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Latest from AMREI
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay informed with our latest announcements, events, and industry insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <article 
              key={index} 
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-white/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <CalendarIcon />
                  <span>{item.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Telegram CTA Section
const TelegramSection = () => (
  <section className="relative py-20 overflow-hidden md:py-28 bg-gradient-to-br from-blue-600 to-blue-800">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 bg-white rounded-full w-96 h-96 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 bg-blue-300 rounded-full w-96 h-96 blur-3xl"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 bg-white/20 rounded-2xl">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </div>
      
      <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        Join Our Telegram Community
      </h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-blue-100 md:text-xl">
        Connect with fellow real estate marketers, get instant updates, and participate in discussions. Our Telegram community is where the conversations happen.
      </p>
      
      <a 
        href="https://t.me/amreiofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-blue-700 transition-all transform bg-white shadow-lg rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
      >
        <TelegramIcon />
        Join t.me/amreiofficial
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="text-white bg-gray-900">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6 space-x-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <span className="text-2xl font-bold">AMREI</span>
          </div>
          <p className="max-w-md mb-6 leading-relaxed text-gray-400">
            Asosiasi Marketer Real Estate Indonesia - Building a community of professional, competent, and trusted real estate marketers since 2021.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/amreiofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-lg hover:bg-blue-600"
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://t.me/amreiofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-lg hover:bg-blue-600"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#about" className="transition-colors hover:text-white">About Us</a></li>
            <li><a href="#services" className="transition-colors hover:text-white">Our Services</a></li>
            <li><a href="#membership" className="transition-colors hover:text-white">Membership</a></li>
            <li><a href="#news" className="transition-colors hover:text-white">News & Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Connect With Us</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a 
                href="https://instagram.com/amreiofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <InstagramIcon />
                @amreiofficial
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/amreiofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <TelegramIcon />
                t.me/amreiofficial
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 border-t border-gray-800 md:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AMREI - Asosiasi Marketer Real Estate Indonesia. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Established in Bogor, 21 July 2021
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <NewsSection />
      <TelegramSection />
      <Footer />
    </div>
  );
}
