import React from 'react';
import { IMAGES } from '../constants';

export const Secret: React.FC = () => {
    return (
        <section id="secret" className="relative py-24 md:py-40 px-6 overflow-hidden bg-theme-charcoal">
            {/* Background Text (Watermark) */}
            <div className="absolute top-1/3 right-10 text-right z-0 pointer-events-none overflow-hidden opacity-[0.02]">
                <span className="font-display text-[15vw] text-theme-gold tracking-widest font-bold whitespace-nowrap vertical-text">
                    SYNERGY
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-10 reveal-on-scroll border-l-2 border-theme-ruby bg-theme-black/50 shadow-xl backdrop-blur-sm">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">The Secret</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-8 leading-[1.6]">
                        ふたつ目の魔法。<br />
                        「4毒抜き」と交わる至高の相乗効果
                    </h2>

                    <div className="space-y-6 text-theme-offWhite/90 font-serif leading-loose tracking-wider">
                        <p>
                            ルネセルがもたらす外側からのアプローチ。<br />
                            そして、私たちの「健康料理教室」でお伝えする<br className="hidden md:block" />
                            内側からの『4毒抜きメソッド』。
                        </p>
                        <p className="text-xl text-theme-gold font-bold my-8 border-b border-theme-ruby/30 inline-block pb-4">
                            この二つが交わった時、<br className="md:hidden" />
                            これまでの常識を覆す究極の美が完成します。
                        </p>
                        <p className="text-theme-offWhite/80">
                            毒素を排出し、細胞レベルで再生を促す。<br />
                            銀座の限られたVIPだけが実践している<br className="hidden md:block" />
                            真のアンチエイジングの答えがここにあります。
                        </p>
                    </div>
                </div>

                {/* Image Section completely readable */}
                <div className="w-full md:w-1/2 relative reveal-on-scroll">
                    <div className="absolute top-0 left-0 w-full h-full border border-theme-gold/30 -translate-x-4 translate-y-4 z-0"></div>
                    <div className="relative aspect-square overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 border border-theme-gold/10">
                        <img
                            src={IMAGES.SECRET}
                            alt="4毒抜きメソッド"
                            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
                        />
                        {/* Dim at bottom for text readability only */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-theme-black/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="text-white font-serif text-xl font-bold mb-1 border-b border-theme-ruby inline-block pb-1">Inner & Outer Beauty</p>
                            <p className="text-theme-gold text-xs font-serif mt-1 tracking-widest">究極の相乗効果</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
