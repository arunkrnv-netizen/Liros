import { useState, useEffect, useRef } from 'react';
import { X, ChevronRight, Globe, ChevronDown, MapPin, Briefcase, Search, Sparkles, ArrowRight, Mail, Shield, FileText } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function App() {
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCookieVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hero = useInView(0.1);
  const platforms = useInView(0.1);
  const relaunch = useInView(0.1);
  const about = useInView(0.1);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Navbar */}
      <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/60' : 'bg-white/40 backdrop-blur-md border border-white/30'}`}>
          <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
  <img src="/Liros.png" alt="Liros Solution" className="h-9 object-contain" />
   <div className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-black transition-colors">
    <Globe size={18} />
    <span>Global (EN)</span>
    <ChevronDown size={16} />
  </div>
</div>
<button
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm px-5 py-2 rounded"
>
  About Us <ChevronRight size={15} />
</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="liros-blob-1 absolute w-[520px] h-[520px] rounded-full bg-gradient-to-br from-emerald-300/40 to-teal-300/30 blur-3xl top-[-100px] left-[-140px]" />
          <div className="liros-blob-2 absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sky-300/30 to-blue-400/20 blur-3xl top-[20%] right-[-120px]" />
          <div className="liros-blob-3 absolute w-[360px] h-[360px] rounded-full bg-gradient-to-br from-orange-200/30 to-yellow-200/20 blur-3xl bottom-[5%] left-[5%]" />
          <div className="liros-blob-1 absolute w-[260px] h-[260px] rounded-full bg-gradient-to-br from-pink-200/25 to-rose-200/20 blur-2xl bottom-[15%] right-[10%]" />

          {/* Floating geometric shapes */}
          <div className="liros-float-slow absolute top-[18%] left-[12%] w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/25 to-teal-500/15 backdrop-blur-sm border border-white/50 shadow-lg rotate-12" />
          <div className="liros-float-med absolute top-[30%] right-[8%] w-10 h-10 rounded-full bg-gradient-to-br from-sky-400/25 to-blue-500/15 backdrop-blur-sm border border-white/40 shadow-md" />
          <div className="liros-float-fast absolute bottom-[28%] left-[4%] w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-400/15 backdrop-blur-sm border border-white/40 shadow-md rotate-45" />
          <div className="liros-float-slow absolute top-[52%] right-[11%] w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400/18 to-rose-400/12 backdrop-blur-sm border border-white/40 shadow-md -rotate-6" />
          <div className="liros-float-med absolute top-[10%] right-[26%] w-6 h-6 rounded-full bg-gradient-to-br from-teal-400/35 to-emerald-500/25 shadow-md" />
          <div className="liros-float-fast absolute bottom-[38%] right-[20%] w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/30 to-sky-500/20 shadow-sm" />

          {/* Particles */}
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="liros-particle absolute rounded-full bg-emerald-400/35"
              style={{
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                top: `${8 + i * 6.5}%`,
                left: `${6 + ((i * 41) % 88)}%`,
                animationDelay: `${i * 0.35}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={hero.ref}
          className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-7 shadow-sm">
            <Sparkles size={14} className="text-emerald-500" />
            Relaunching Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.08] mb-6 tracking-tight">
            Building smarter
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">digital experiences.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Liros Solutions is preparing a fresh new AI-powered experience focused on e-commerce, careers, travel, and modern digital platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
  onClick={() => {
    document.getElementById("platforms")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
>
              Explore Our Platforms <ArrowRight size={17} />
            </button> <button
  onClick={() => {
    document.getElementById("learn-more")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200 text-base">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[['2016', 'Founded'], ['3+', 'Platforms'], ['Global', 'Focused']].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{val}</span>
                <span className="text-xs text-gray-400 font-medium mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[700px] h-[300px] rounded-full bg-gradient-to-r from-emerald-100/50 to-teal-100/30 blur-3xl top-0 left-1/2 -translate-x-1/2" />
        </div>

        <div
          ref={platforms.ref}
          className={`relative max-w-6xl mx-auto transition-all duration-1000 ${platforms.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">Our Platforms</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">Three platforms. One mission.</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">Smarter digital experiences built for everyday users.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Yoursearch Card */}
            <div className="group relative rounded-3xl p-7 overflow-hidden cursor-pointer border shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)', borderColor: 'rgba(167,139,250,0.3)', boxShadow: '0 20px 60px rgba(139,92,246,0.12)' }}>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, rgba(147,197,253,0.15) 100%)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.18) 0%, rgba(147,197,253,0.1) 100%)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #ede9fe, #eff6ff)', border: '1px solid rgba(167,139,250,0.3)' }}>
                  <img src="/Yourseach.png" alt="Yoursearch.in" className="w-20 h-20 object-contain" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(167,139,250,0.15)', color: '#7c3aed' }}>
                  <Search size={11} /> Discovery
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Yoursearch</h3>
                <p className="font-semibold text-sm mb-3" style={{ color: '#7c3aed' }}>Your partner for search</p>
                <p className="text-gray-500 text-sm leading-relaxed">An AI-powered discovery ecosystem for price comparison, classifieds, news, and digital exploration.</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: '#7c3aed' }}>
                  Relaunching soon <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* New Sarkari Jobs Card */}
            <div className="group relative rounded-3xl p-7 overflow-hidden cursor-pointer border shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 md:mt-6" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0f9ff 100%)', borderColor: 'rgba(96,165,250,0.3)', boxShadow: '0 20px 60px rgba(37,99,235,0.10)' }}>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.22) 0%, rgba(56,189,248,0.12) 100%)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.18) 0%, rgba(125,211,252,0.1) 100%)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #dbeafe, #e0f2fe)', border: '1px solid rgba(96,165,250,0.3)' }}>
                  <img src="/Newsarkarijobs.png" alt="New Sarkari Jobs" className="w-24 h-24 object-contain" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(96,165,250,0.15)', color: '#1d4ed8' }}>
                  <Briefcase size={11} /> Careers
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">New Sarkari Jobs</h3>
                <p className="font-semibold text-sm mb-3" style={{ color: '#1d4ed8' }}>A place to build your career</p>
                <p className="text-gray-500 text-sm leading-relaxed">An intelligent career platform delivering smarter government job discovery, updates, and opportunities.</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: '#1d4ed8' }}>
                  Relaunching soon <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* myTripezee Card */}
            <div className="group relative rounded-3xl p-7 overflow-hidden cursor-pointer border shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #eff6ff 100%)', borderColor: 'rgba(251,146,60,0.3)', boxShadow: '0 20px 60px rgba(234,88,12,0.10)' }}>
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.22) 0%, rgba(252,211,77,0.12) 100%)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.18) 0%, rgba(56,189,248,0.1) 100%)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff7ed, #fef3c7)', border: '1px solid rgba(251,146,60,0.3)' }}>
                  <img src="/Mytripezee_Logo.jpg" alt="myTripezee" className="w-11 h-11 object-cover" />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: 'rgba(251,146,60,0.15)', color: '#c2410c' }}>
                  <MapPin size={11} /> Travel
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">My Trip Ezee</h3>
                <p className="font-semibold text-sm mb-3" style={{ color: '#c2410c' }}>Explore Life</p>
                <p className="text-gray-500 text-sm leading-relaxed">An AI-powered modern platform helping users discover smarter journeys, experiences, and destinations.</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: '#c2410c' }}>
                  Coming soon <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[400px] rounded-full bg-gradient-to-br from-teal-100/40 to-emerald-100/25 blur-3xl -bottom-20 -right-20" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-sky-100/30 to-blue-100/20 blur-2xl top-10 left-5" />
        </div>

        <div
          ref={about.ref}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${about.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
                About<br />
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Liros Solutions</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5 font-medium">
              Liros Solutions is a privately held digital platforms company focused on e-commerce discovery, careers, travel, and modern online experiences. The company ceased operations in 2021 and is currently not operational.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Through platforms like Yoursearch, New Sarkari Jobs, and My Trip Ezee, we aim to create digital experiences that feel simple, useful, connected, and accessible for everyday users.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { val: '2016', label: 'Year Founded', from: '#ecfdf5', to: '#d1fae5', border: '#6ee7b7', color: '#059669' },
                  { val: '3+', label: 'Platforms', from: '#eff6ff', to: '#dbeafe', border: '#93c5fd', color: '#2563eb' },
                  { val: 'Global', label: 'Focused', from: '#fff7ed', to: '#fed7aa', border: '#fdba74', color: '#ea580c' },
                ].map(({ val, label, from, to, border, color }) => (
                  <div key={label} className="rounded-2xl p-4 text-center" style={{ background: `linear-gradient(135deg, ${from}, ${to})`, border: `1px solid ${border}40` }}>
                    <div className="text-2xl font-extrabold" style={{ color }}>{val}</div>
                    <div className="text-xs text-gray-400 font-medium mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/60 p-8">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/15 blur-xl" />
                <div className="space-y-4">
                  {[
                    { icon: Search, label: 'Yoursearch', desc: 'Smart Discovery Ecosystem', bg: '#f5f3ff', iconBg: '#ede9fe', iconColor: '#7c3aed' },
                    { icon: Briefcase, label: 'New Sarkari Jobs', desc: 'Modern Career Platform', bg: '#eff6ff', iconBg: '#dbeafe', iconColor: '#1d4ed8' },
                    { icon: MapPin, label: 'My Trip Ezee', desc: 'Smart Travel Platform', bg: '#fff7ed', iconBg: '#ffedd5', iconColor: '#ea580c' },
                  ].map(({ icon: Icon, label, desc, bg, iconBg, iconColor }) => (
                    <div key={label} className="flex items-center gap-4 p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-200" style={{ background: bg }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg }}>
                        <Icon size={18} style={{ color: iconColor }} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{label}</div>
                        <div className="text-xs text-gray-400">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}>
                  <div className="font-bold text-sm text-white">Built For Global Digital Experiences</div>
                  <div className="text-emerald-100 text-xs mt-0.5">Simple. Useful. Accessible.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaunch Section */}
      <section id="learn-more" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)' }} />
          <div className="liros-blob-2 absolute w-[600px] h-[400px] rounded-full bg-white/5 blur-3xl top-0 right-0" />
          <div className="liros-blob-3 absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl bottom-0 left-0" />
          {[...Array(10)].map((_, i) => (
            <div key={i} className="liros-float-slow absolute rounded-full border border-white/10" style={{ width: `${50 + i * 18}px`, height: `${50 + i * 18}px`, top: `${8 + i * 9}%`, left: `${4 + ((i * 19) % 88)}%`, animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>

        <div
          ref={relaunch.ref}
          className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${relaunch.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} /> A New Chapter
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
            Something exciting<br />is taking shape.
          </h2>
          <p className="text-emerald-100 text-lg font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            A refreshed digital experience is arriving soon. Stay tuned.
          </p>
          <button
          onClick={() => setShowPopup(true)}
           className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-9 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
>           <Mail size={17} />
           Get Updates
            </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <img src="/Liros.png" alt="Liros Solution" className="h-9 object-contain brightness-0 invert mb-4" />
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">Building Digital Experiences.</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">Platforms</p>
                <ul className="space-y-3 text-sm">
                <li><a href="https://yoursearch.in" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-150">Yoursearch.in</a></li>

                 <li><a href="https://newsarkarijobs.com" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-150">Newsarkarijobs.com</a></li>

                 <li><a href="https://mytripezee.com" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-150">mytripezee.com</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">Company</p>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5"><Shield size={13} /> Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5"><FileText size={13} /> Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5"><Mail size={13} /> Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <span>© 2026 Liros Solutions Pvt. Ltd. All rights reserved.</span>
            <span></span>
          </div>
        </div>
      </footer>

      {/* Cookie Popup */}
      {!cookieDismissed && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-3rem)] max-w-md transition-all duration-700 ${cookieVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white/92 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-2xl shadow-black/10 p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 text-lg" style={{ background: 'linear-gradient(135deg, #d1fae5, #ccfbf1)' }}>
              🍪
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-800 text-sm font-bold mb-1">We use cookies</p>
              <p className="text-gray-400 text-xs leading-relaxed">We use cookies to improve your experience. By continuing, you agree to our <a href="/cookie-policy.html" className="underline">cookie policy</a></p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setCookieDismissed(true)} className="text-white text-xs font-bold px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-150" style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}>
                  Accept All
                </button>
                <button onClick={() => setCookieDismissed(true)} className="bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-150">
                  Decline
                </button>
              </div>
            </div>
            <button onClick={() => setCookieDismissed(true)} className="text-gray-300 hover:text-gray-600 transition-colors duration-150 flex-shrink-0">
              <X size={16} />
            </button>
          </div>
        </div>
      )}
          {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl relative">
      
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X size={20} />
            </button>
      
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated
            </h2>
      
            <p className="text-gray-500 mb-6">
              Enter your email to receive updates about the relaunch.
            </p>
      
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 mb-4"
            />
      
            <button
  onClick={() => {
    alert("Thanks for subscribing!");
    setShowPopup(false);
  }}
  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold"
>
Subscribe
</button>
      
          </div>
        </div>
      )}
       </div>
  );
  
}
