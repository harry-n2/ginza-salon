import React from 'react';
import { IMAGES } from '../constants';

export const Solution: React.FC = () => {
    return (
        <section id="solution" className="relative py-24 md:py-40 px-6 overflow-hidden bg-transparent border-t border-theme-gold/20">
            {/* Vivid Red Background inherited */}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">Solution</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-[1.6]">
                        物理的に『光の通り道』を再構築する、<br className="hidden md:block" />
                        5分間の黄金メソッド。
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Pitch Black Frame for Text */}
                    <div className="order-2 md:order-1 reveal-on-scroll">
                        <div className="bg-gradient-to-bl from-[#111111] via-[#0a0a0a] to-[#000000] rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,1)] border-2 border-theme-gold/80 relative">

                            <div className="absolute inset-3 border border-theme-gold/30 rounded-[2.5rem] pointer-events-none"></div>

                            <div className="bg-black/40 rounded-3xl p-8 mb-8 shadow-inner border border-theme-gold/10">
                                <p className="font-serif text-theme-offWhite leading-loose tracking-wider text-lg font-medium">
                                    微細なダイヤモンド粒子を、額-鼻-頬-顎の順に、<br />
                                    プロの一定圧で5分間かけて丁寧に馴染ませます。<br />
                                    これは「削る」のではありません。<br /><br />
                                    肌本来の自浄能力を呼び覚まし、リポソーム化された高機能成分を深部<span className="text-sm align-top">*</span>へ届けるための「道」を作る作業です。
                                </p>
                            </div>

                            <p className="text-theme-offWhite/60 text-xs font-serif tracking-widest mt-6">*角質層まで</p>

                            <ul className="text-theme-gold font-serif space-y-5 tracking-widest text-sm md:text-base border-t border-theme-gold/20 pt-8 mt-6">
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-theme-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
                                    <span>独自のダイヤモンド微粒子</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-theme-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
                                    <span>プロによる一定圧の5分間メソッド</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-theme-gold shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
                                    <span>リポソーム成分のための物理的な導線構築</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Area - Maximum contrast against black */}
                    <div className="order-1 md:order-2 relative reveal-on-scroll h-[400px] md:h-[600px] w-full max-w-lg mx-auto md:ml-auto">
                        <div className="absolute inset-0 z-10 border-2 border-theme-gold shadow-[0_30px_80px_rgba(0,0,0,1)] overflow-hidden rounded-[3rem] bg-black/50">
                            <img
                                src={IMAGES.SOLUTION_1}
                                alt="ダイヤモンド・ピール"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                            />
                            {/* Inner vignette so edges blend luxuriously without tinting the photo */}
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                        </div>
                        {/* Overlay Label inside the image frame */}
                        <div className="absolute bottom-8 left-8 bg-black/80 px-6 py-4 rounded-2xl border border-theme-gold/50 z-20 shadow-xl backdrop-blur-md">
                            <span className="font-display text-theme-gold tracking-widest text-xs md:text-sm uppercase font-bold">THE DIAMOND PEEL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
