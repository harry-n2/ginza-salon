import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 新12セクション構成のインポート
import { FirstView } from './components/FirstView';
import { Prologue } from './components/Prologue';
import { InteractiveAnalysis } from './components/InteractiveAnalysis';
import { Solution } from './components/Solution';
import { Comparison } from './components/Comparison';
import { Safety } from './components/Safety';
import { BeforeAfter } from './components/BeforeAfter';
import { ExpertInterview } from './components/ExpertInterview';
import { SalonConcept } from './components/SalonConcept';
import { Access } from './components/Access';
import { FAQ } from './components/FAQ';
import { Offer } from './components/Offer';

// 共通パーツ・ページ
import { CTAButton } from './components/CTAButton';
import { Law } from './pages/Law';
import { Privacy } from './pages/Privacy';
import { LINKS } from './constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLP() {
  const [showBottomCTA, setShowBottomCTA] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations (reveal-on-scroll)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Handle bottom CTA visibility
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowBottomCTA(true);
      } else {
        setShowBottomCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#A81B21] text-theme-offWhite font-serif selection:bg-theme-gold selection:text-black pb-24 md:pb-0">
      {/* 1. First View */}
      <FirstView />

      {/* 2. Prologue */}
      <Prologue />

      {/* 3. Interactive Analysis (AI肌解析) */}
      <InteractiveAnalysis />

      {/* 4. Solution */}
      <Solution />

      {/* 5. Comparison */}
      <Comparison />

      {/* 6. Safety */}
      <Safety />

      {/* 7. Before & After */}
      <BeforeAfter />

      {/* 8. Expert Interview */}
      <ExpertInterview />

      {/* 9. Salon Concept */}
      <SalonConcept />

      {/* 10. Access */}
      <Access />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Final Offer */}
      <Offer />

      {/* Footer Area with Legal Links */}
      <footer className="bg-gradient-to-b from-[#100000] to-black py-16 px-6 border-t border-theme-gold/20 relative z-10">
        <div className="flex justify-center flex-wrap gap-8 mb-8 text-white/80 text-sm tracking-widest font-serif">
          <a href="/law" className="hover:text-theme-gold transition-colors">特定商取引法に基づく表記</a>
          <a href="/privacy" className="hover:text-theme-gold transition-colors">プライバシーポリシー</a>
        </div>
        <p className="text-theme-offWhite/40 text-xs tracking-widest font-serif">
          © {new Date().getFullYear()} ルネセル銀座サロン All Rights Reserved.
        </p>
      </footer>

      {/* Floating CTA for Mobile */}
      <div
        className={`fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#A81B21] via-[#A81B21]/90 to-transparent z-50 md:hidden transition-transform duration-500 max-h-[120px] ${showBottomCTA ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <CTAButton
          href={LINKS.LINE}
          text="LINEで予約・相談する"
          subText="AI診断結果もこちらから送信"
          isSticky={true}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLP />} />
        <Route path="/law" element={<Law />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
