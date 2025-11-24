import React, { useEffect, useRef } from 'react';

export default function HaveAllLabWebsite() {
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          animation: fadeInUp 1s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .cta-button {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-[5%] py-6 bg-[rgba(10,14,39,0.95)] backdrop-blur-md z-[1000] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="HAVE ALL LAB Logo" className="w-14 h-14 rounded-lg object-contain" />
            <span className="text-2xl font-bold">HAVE ALL LAB</span>
          </div>
          <ul className="hidden md:flex gap-10 list-none">
            <li>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} 
                 className="nav-link relative text-white no-underline font-medium transition-all hover:text-[#6366f1]">
                서비스
              </a>
            </li>
            <li>
              <a href="#expertise" onClick={(e) => scrollToSection(e, '#expertise')}
                 className="nav-link relative text-white no-underline font-medium transition-all hover:text-[#6366f1]">
                전문분야
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}
                 className="nav-link relative text-white no-underline font-medium transition-all hover:text-[#6366f1]">
                연락하기
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-[5%]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15), transparent 50%)',
               animation: 'pulse 8s ease-in-out infinite'
             }}>
        </div>
        <div className="max-w-[1400px] text-center relative z-10">
          <h1 className="hero-title text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-br from-white to-purple-400 bg-clip-text text-transparent">
            HAVE ALL LAB
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-slate-300 mb-12">
            모든 꿈이 실현되는 작업소
          </p>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}
             className="cta-button inline-block px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white no-underline rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)]">
            시작하기
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-5xl text-center mb-4 bg-gradient-to-br from-white to-purple-400 bg-clip-text text-transparent">
          고객의 문제를 해결하는 맞춤형 솔루션
        </h2>
        <p className="text-center text-slate-400 text-xl mb-16">
          단순 대행을 넘어, 비즈니스의 시작과 성장을 함께합니다
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              number: "01",
              title: "브랜드 인큐베이팅 & 통합 컨설팅",
              desc: "F&B, 코스메틱 브랜드를 직접 런칭하고 운영하며 쌓은 실전 노하우를 바탕으로, 시장 분석부터 전략 수립, 성과 측정까지 전 과정을 책임집니다.",
              items: ["통합 마케팅 전략 수립", "브랜드 컨설팅(신규 런칭/리브랜딩)", "데이터 분석 및 성과 보고", "KPI 설정 및 관리"]
            },
            {
              number: "02",
              title: "온라인 스토어 런칭 & 성장 패키지",
              desc: "성공적인 온라인 판매를 위한 A to Z. 매력적인 기획과 디자인으로 고객의 시선을 사로잡고, 데이터 기반 광고와 바이럴 마케팅으로 실질적인 매출 전환을 만듭니다.",
              items: ["스마트스토어/오픈마켓 기획 및 디자인", "설득력 있는 상세페이지 제작", "초기 온라인 광고 집행", "블로그/인플루언서 리뷰 마케팅"]
            },
            {
              number: "03",
              title: "로컬 비즈니스 활성화 솔루션",
              desc: "온라인 고객을 우리 매장으로, 매장 고객을 단골 팬으로. 오프라인 매장의 특성을 정확히 진단하여 지역 고객에게 가장 효과적으로 도달하는 마케팅을 실행합니다.",
              items: ["네이버 플레이스 최적화 관리", "지도 등록/노출 관리", "지역 SEO 기반 블로그 운영", "당근마켓 광고 및 관리"]
            },
            {
              number: "04",
              title: "통합 콘텐츠 마케팅",
              desc: "브랜드의 메시지를 잠재고객의 언어로 번역합니다. 전략적인 콘텐츠 기획을 통해 잠재고객과 소통하고, 꾸준한 콘텐츠 발행으로 신뢰를 쌓아 브랜드의 팬으로 만듭니다.",
              items: ["콘텐츠 전략 수립", "SNS 카드 뉴스 제작", "SEO 기반 블로그 콘텐츠 발행", "홍보 영상 촬영 및 배포", "인플루언서 협업"]
            }
          ].map((service, idx) => (
            <div key={idx} className="fade-in bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4 relative">
                {service.number}
              </div>
              <h3 className="text-3xl mb-4 relative">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4 relative">{service.desc}</p>
              <ul className="mt-6 relative list-none">
                {service.items.map((item, i) => (
                  <li key={i} className="text-slate-400 py-2 pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <h2 className="text-5xl text-center mb-4 bg-gradient-to-br from-white to-purple-400 bg-clip-text text-transparent">
          솔루션을 뒷받침하는 분야별 전문 서비스
        </h2>
        <p className="text-center text-slate-400 text-xl mb-16">
          각 분야의 전문성으로 완벽한 마케팅 솔루션을 제공합니다
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "전략 & 컨설팅",
              items: ["통합 마케팅 전략 수립", "브랜드 컨설팅 (F&B, 코스메틱 특화)", "콘텐츠 전략 기획"]
            },
            {
              title: "콘텐츠 크리에이션 & 디자인",
              items: ["스마트스토어/오픈마켓 콘텐츠 디자인", "상세페이지 제작", "카드 뉴스 제작", "홍보 영상 촬영", "홍보 및 인쇄물 제작"]
            },
            {
              title: "플랫폼 운영 & 관리",
              items: ["블로그 관리 대행", "네이버 플레이스 관리 대행", "당근마켓 관리 대행", "지도 등록 및 노출 관리"]
            },
            {
              title: "데이터 & 성과분석",
              items: ["마케팅 성과 분석 및 정기 리포트", "전환율 최적화 및 A/B 테스트"]
            },
            {
              title: "광고 & 바이럴",
              items: ["블로그 체험단 운영 대행", "온라인 광고 집행", "인플루언서 마케팅"]
            }
          ].map((expertise, idx) => (
            <div key={idx} className="fade-in bg-slate-800/50 border border-white/10 rounded-2xl p-8 transition-all hover:border-indigo-500 hover:bg-slate-800/80 hover:-translate-y-2">
              <h3 className="text-indigo-400 text-xl mb-4">{expertise.title}</h3>
              <ul className="list-none">
                {expertise.items.map((item, i) => (
                  <li key={i} className="text-slate-300 py-2 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-[30px] p-16 text-center my-16">
          <h2 className="text-4xl mb-8">모든 꿈이 실현되는 작업소</h2>
          <p className="text-slate-300 text-xl mb-8">비즈니스의 성장을 위한 첫 걸음, 지금 시작하세요</p>
          
          <div className="flex justify-center gap-12 flex-wrap mt-8">
            <div className="flex flex-col items-center gap-2">
              <strong className="text-indigo-400 text-lg">전화</strong>
              <span className="text-slate-300">052-256-2587</span>
              <span className="text-slate-300">010-5758-0767</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <strong className="text-indigo-400 text-lg">이메일</strong>
              <span className="text-slate-300">havealllab@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <strong className="text-indigo-400 text-lg">주소</strong>
              <span className="text-slate-300">울산광역시 남구 돋질로 355 4층</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-[5%] border-t border-white/10 text-slate-500">
        <p>우리 함께 해볼래? 🚀</p>
      </footer>
    </div>
  );
}