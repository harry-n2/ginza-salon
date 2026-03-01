import React from 'react';
import { IMAGES } from '../constants';

export const Agitation: React.FC = () => {
    return (
        <section id="agitation" className="relative py-24 md:py-40 px-6 overflow-hidden bg-theme-charcoal">
            {/* Background Text (Watermark) */}
            <div className="absolute top-10 right-0 w-full text-right z-0 pointer-events-none overflow-hidden opacity-[0.02]">
                <span className="font-display text-[10vw] text-theme-gold tracking-widest font-bold whitespace-nowrap">
                    ENDLESS
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Image Section - Filter removed for maximum visibility */}
                <div className="w-full md:w-1/2 relative reveal-on-scroll">
                    {/* Glowing Accent (Red) behind image */}
                    <div className="absolute -inset-6 bg-theme-ruby/15 blur-3xl rounded-full z-0 pointer-events-none"></div>
                    <div className="relative aspect-[4/5] overflow-hidden border border-theme-gold/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10">
                        <img
                            src={IMAGES.AGITATION_1}
                            alt="悩み"
                            className="w-full h-full object-cover origin-center hover:scale-[1.03] transition-transform duration-1000"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 reveal-on-scroll border-l-2 border-theme-ruby bg-theme-black/60 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-theme-gold"></div>
                        <span className="font-display text-theme-gold uppercase tracking-widest text-sm font-bold">Problem</span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-10 leading-[1.6]">
                        美しさをすり減らす、<br />
                        終わらない浪費
                    </h2>

                    <div className="space-y-6 text-theme-offWhite/90 font-serif leading-loose tracking-wider">
                        <p>
                            高級美容液も、<br />
                            過酷なダイエットも。<br />
                            すべては「浪費」でした。
                        </p>
                        <p>
                            なぜ、どんなに高い化粧品をつかっても納得感がないのか？<br />
                            なぜ、痩せても顔がゲッソリ老け込んでしまうのか？
                        </p>
                        <p className="text-lg md:text-xl text-theme-gold font-bold mt-8 border-b border-theme-ruby/50 pb-4 inline-block tracking-widest">
                            答えは簡単です。あなたは「表面」しか見ていないから。
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
