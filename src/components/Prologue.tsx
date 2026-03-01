import React from 'react';
import { IMAGES } from '../constants';

export const Prologue: React.FC = () => {
    return (
        <section id="prologue" className="relative py-24 md:py-40 px-6 overflow-hidden bg-transparent">
            {/* Inherits vivid red from App.tsx */}

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* The "Pitch Black Frame" Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1 reveal-on-scroll">
                    <div className="bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,1)] border-2 border-theme-gold/80 relative overflow-hidden">

                        {/* Inner elegant border */}
                        <div className="absolute inset-3 border border-theme-gold/30 rounded-[2.5rem] pointer-events-none"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-16 h-[1px] bg-theme-gold"></div>
                            <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold drop-shadow-md">Prologue</span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-12 leading-[1.6] drop-shadow-lg tracking-widest">
                            「ファンデーションを厚く塗るほど、<br className="hidden md:block" />
                            あなたは『影』をまとっている。」
                        </h2>

                        <div className="bg-black/40 rounded-3xl p-8 space-y-6 text-theme-offWhite font-serif leading-loose tracking-wider shadow-inner border border-theme-gold/10">
                            <p className="text-base md:text-lg">
                                30代を境に、肌のターンオーバーは減速し、表面には目に見えない不均一な凹凸が積み重なります。
                                それが「光」を乱反射させ、顔全体に「影」を落とす。
                            </p>
                            <p className="text-base md:text-lg">
                                あなたが「老け」と感じている正体は、実はこの<span className="text-theme-gold font-bold">『光の欠損』</span>です。
                            </p>
                            <p className="text-lg md:text-xl text-theme-gold font-bold mt-8 border-t border-theme-gold/20 pt-6">
                                ルネセル銀座サロンは、この物理現象に真っ向から挑みます。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pure Image Area - No red glow outside the image to keep background pitch black */}
                <div className="w-full md:w-1/2 relative reveal-on-scroll order-1 md:order-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-2 border-theme-gold shadow-[0_30px_80px_rgba(0,0,0,1)] z-10 group bg-black/50">
                        <img
                            src={IMAGES.AGITATION_1}
                            alt="なぜ、あなたの肌から「光」が消えたのか"
                            className="w-full h-full object-cover origin-center hover:scale-[1.03] transition-transform duration-1000"
                        />
                        {/* Inner dark vignette stringly focusing on the center */}
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>

                        <div className="absolute top-6 left-6 text-theme-gold/60 font-serif tracking-widest text-xs">
                            THE LOST LIGHT
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
