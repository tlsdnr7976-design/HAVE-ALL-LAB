import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Leaf, Droplets, Heart, Instagram, Facebook, Twitter, ChevronRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const products = [
    {
      id: 1,
      name: '오로시 부스팅 크림',
      category: '화장품',
      price: '원',
      image: '[https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop)',
      desc: '우아아아아앙'
    },
    {
      id: 2,
      name: '오로시 파워 EGF 앰픔',
      category: '화장품',
      price: '원',
      image: '[https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=800&auto=format&fit=crop)',
      desc: '공간을 은은하게 채우는 '
    },
    {
      id: 3,
      name: '오로시 클리어 스킨',
      category: '화장품',
      price: '원',
      image: '[https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop)',
      desc: '피부에 닿는 순간 느껴지는 자연 그대로의 감촉'
    },
    {
      id: 4,
      name: '오로시 리셋 마스크',
      category: '화장품',
      price: '원',
      image: '[https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop)',
      desc: '지친 하루의 끝, '
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="font-sans text-stone-800 bg-stone-50 min-h-screen flex flex-col">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wider text-stone-900">OROTHY</a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="hover:text-stone-500 transition-colors">브랜드 스토리</a>
            <a href="#products" className="hover:text-stone-500 transition-colors">제품</a>
            <a href="#journal" className="hover:text-stone-500 transition-colors">저널</a>
            <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm hover:bg-stone-700 transition-colors flex items-center gap-2">
              Shop Now <ArrowRight size={14} />
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-stone-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg flex flex-col p-6 space-y-4">
            <a href="#about" className="text-lg font-medium" onClick={toggleMenu}>브랜드 스토리</a>
            <a href="#products" className="text-lg font-medium" onClick={toggleMenu}>제품</a>
            <a href="#journal" className="text-lg font-medium" onClick={toggleMenu}>저널</a>
          </div>
        )}
      </nav>

      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="[https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop](https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop)" alt="Background" className="w-full h-full object-cover opacity-90"/>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg md:text-xl mb-4 font-light tracking-[0.2em] uppercase">Natural & Minimal</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">자연을<br />오롯이 담다</h1>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-white/90 font-light leading-relaxed">복잡한 일상 속, 가장 나다운 순간을 마주하세요.<br/>오로시는 당신의 삶에 온전한 쉼을 선물합니다.</p>
          <a href="#products" className="inline-block bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-100 transition-transform transform hover:scale-105">컬렉션 보기</a>
        </div>
      </header>

      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Best Collection</h2>
            <div className="flex justify-center gap-4 mt-8">
              {['all', 'tea', 'living', 'wellness'].map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === cat ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>{cat === 'all' ? '전체' : cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-stone-500 uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-stone-600 transition-colors">{product.name}</h3>
                  <p className="text-stone-800 font-medium mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">OROTHY</h3>
              <p className="text-stone-500 text-sm leading-relaxed">자연의 정성을 오로시 담아<br/>당신의 삶을 온전하게 만듭니다.</p>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-8 text-xs text-stone-400"><p>&copy; 2023 OROTHY Inc. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
};

export default App;