import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Lightbulb, Globe, BarChart3, Mail, MapPin, Phone, Target, Zap } from 'lucide-react';

const HaveAll = () => { // 👈 이름 바뀜
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orgChart = [
    { name: '기획본부', role: 'Planning Div.', icon: <Lightbulb size={24}/>, members: ['서비스 기획', 'UI/UX 디자인', 'BM 전략 수립'] },
    { name: '사업본부', role: 'Business Div.', icon: <BarChart3 size={24}/>, members: ['마케팅 전략', '국내외 영업', '브랜드 관리'] },
  ];

  const businessAreas = [
    { title: 'Tech Consulting', desc: '최신 기술 트렌드 분석 및 도입 전략 컨설팅', icon: <Target size={40} className="text-blue-600"/> },
    { title: 'Project Management', desc: '성공적인 프로젝트 완수를 위한 전문 PM 서비스 제공', icon: <Users size={40} className="text-blue-600"/> },
    { title: 'Digital Strategy', desc: '기업의 디지털 전환(DX)을 위한 마스터플랜 수립', icon: <Globe size={40} className="text-blue-600"/> },
  ];

  const Logo = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0F172A"/> 
      <path d="M25 20V80M55 20V80M25 50H55" stroke="white" strokeWidth="6"/>
      <path d="M20 20H30M20 80H30M50 20H60M50 80H60" stroke="white" strokeWidth="2"/>
      <path d="M55 20L80 80" stroke="white" strokeWidth="6"/>
      <path d="M75 80H85" stroke="white" strokeWidth="2"/>
    </svg>
  );

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded shadow-sm overflow-hidden border border-white/20">
               <Logo className="w-full h-full" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>(주)해브올랩</span>
          </div>
          <div className={`hidden md:flex space-x-8 font-medium ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
            <a href="#about" className="hover:text-blue-500 transition-colors">회사소개</a>
            <a href="#organization" className="hover:text-blue-500 transition-colors">조직도</a>
            <a href="#business" className="hover:text-blue-500 transition-colors">사업분야</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">문의하기</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl flex flex-col p-6 space-y-4 text-slate-800 md:hidden">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>회사소개</a>
            <a href="#organization" onClick={() => setIsMenuOpen(false)}>조직도</a>
            <a href="#business" onClick={() => setIsMenuOpen(false)}>사업분야</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>문의하기</a>
          </div>
        )}
      </nav>
      {/* ... 해브올랩 나머지 내용 ... */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Office Background" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-600/30 text-blue-300 border border-blue-400/30 text-sm font-semibold mb-8 tracking-widest uppercase">Grand Opening 2025</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">Next Vision,<br/><span className="text-blue-500">HaveAll Lab</span></h1>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">2025년, 새로운 기준이 시작됩니다.<br/>세상의 모든 가능성을 연구하고, 비즈니스의 내일을 설계합니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">회사소개서 보기 <ChevronRight size={18} /></button>
          </div>
        </div>
      </header>
       <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" alt="Strategy Meeting" className="relative z-10 rounded-lg shadow-2xl w-full"/>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-lg shadow-xl z-20 hidden md:block text-white">
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Since</p>
                <p className="text-5xl font-serif font-bold">2025</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">미래를 앞당기는<br/>전략적 파트너</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">(주)해브올랩은 2025년 설립된 신생 혁신 기업입니다. 급변하는 시장 환경 속에서 기업이 나아가야 할 명확한 방향을 제시하고, 실현 가능한 구체적인 전략을 수립합니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="organization" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Organization</h2>
            <p className="text-slate-500 text-lg">핵심 역량에 집중한 효율적인 조직 구조</p>
          </div>

          <div className="flex flex-col items-center">
            {/* CEO */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-slate-900 text-center w-72 mb-16 relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1">CEO</h4>
              <p className="text-blue-600 font-medium">대표이사</p>
              <div className="absolute top-full left-1/2 w-0.5 h-16 bg-slate-300 -translate-x-1/2"></div>
            </div>

            {/* 부서 */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-300 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                {orgChart.map((dept, idx) => (
                  <div key={idx} className="flex flex-col items-center relative">
                    <div className="md:hidden w-0.5 h-12 bg-slate-300 absolute -top-12 left-1/2 -translate-x-1/2"></div>
                    <div className="hidden md:block w-0.5 h-12 bg-slate-300 absolute -top-12 left-1/2 -translate-x-1/2"></div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full hover:shadow-xl transition-all duration-300 border border-slate-100">
                      <div className="flex items-center gap-5 mb-6 border-b border-slate-100 pb-6">
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                          {dept.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-slate-900">{dept.name}</h4>
                          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{dept.role}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {dept.members.map((member, mIdx) => (
                          <li key={mIdx} className="text-slate-600 text-sm flex items-center gap-3">
                            <Zap size={14} className="text-blue-400 fill-current" />
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
       <section id="business" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Business Areas</h2>
            <p className="text-slate-500 text-lg">비즈니스 성공을 위한 최적의 솔루션</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAreas.map((area, idx) => (
              <div key={idx} className="group p-10 border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer">
                <div className="mb-8 p-5 bg-blue-50 rounded-2xl w-fit group-hover:bg-blue-600 transition-colors duration-300">
                  {React.cloneElement(area.icon, { className: "text-blue-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed mb-8">{area.desc}</p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-400 font-bold">
                  View Detail <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-slate-800 pb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded border border-white/30 overflow-hidden">
                    <Logo className="w-full h-full" />
                </div>
                <span className="text-2xl font-bold">(주)해브올랩</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">2025년 설립된 혁신 기업.<br/>세상의 모든 가능성을 연구합니다.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8 text-blue-500">Contact Us</h4>
              <ul className="space-y-5 text-slate-400 text-sm">
                <li className="flex items-start gap-3"><MapPin size={20} className="text-slate-500 mt-1"/><span>서울시 강남구 테헤란로 123<br/>해브올타워 15층</span></li>
                <li className="flex items-center gap-3"><Phone size={20} className="text-slate-500"/>02-1234-5678</li>
                <li className="flex items-center gap-3"><Mail size={20} className="text-slate-500"/>hello@haveall-lab.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HaveAll; // 👈 마지막 줄도 HaveAll로 내보내기!