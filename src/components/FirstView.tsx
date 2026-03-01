import React from 'react';
import { VIDEOS } from '../constants';

export const FirstView: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Cinematic background with clear video */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    src={VIDEOS.HERO_BG}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#100000]"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 mt-12 md:mt-20 flex flex-col items-center">

                {/* Pitch Black Luxury Frame */}
                <div className="bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] border-2 border-theme-gold/80 shadow-[0_40px_100px_rgba(0,0,0,1)] rounded-[3rem] p-8 md:p-16 lg:p-20 text-center w-full relative overflow-hidden backdrop-blur-xl">

                    {/* Inner gold frame for maximum volume */}
                    <div className="absolute inset-3 border border-theme-gold/30 rounded-[2.5rem] pointer-events-none"></div>

                    <p className="font-display text-theme-gold tracking-[0.4em] uppercase text-sm md:text-base font-bold mb-6 drop-shadow-md">
                        銀座駅 A3出口 徒歩3分 / ルネセル銀座サロン / 完全紹介・予約制
                    </p>

                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest leading-[1.6] mb-10 drop-shadow-lg">
                        銀座、沈黙を破る。<br />
                        10年前の私を、その肌に呼び覚ます。<br />
                        <span className="text-theme-gold relative inline-block mt-4 text-4xl md:text-6xl lg:text-7xl">
                            ダイヤモンドが紡ぐ、光の再生
                            <span className="text-sm md:text-base align-top">*</span>
                        </span>
                    </h1>

                    <div className="bg-black/40 rounded-3xl p-6 md:p-10 mb-12 border border-theme-gold/20 shadow-inner max-w-4xl mx-auto">
                        <p className="font-serif text-theme-offWhite text-lg md:text-xl lg:text-2xl leading-[2.2] tracking-wider drop-shadow-md font-medium">
                            先端AI肌解析 × 韓国式ダイヤモンドピール。<br />
                            これは単なるフェイシャルではない。<br />
                            あなたの肌の「光反射率」を物理的に再定義する、60分間の芸術。
                        </p>
                    </div>

                    <div className="flex justify-center relative z-20">
                        {/* Using an anchor tag directly here to scroll to AI section instead of LINE immediately based on button text */}
                        <a href="#ai-analysis" className="group relative inline-flex items-center justify-center">
                            <div className="absolute -inset-2 bg-gradient-to-r from-theme-gold via-yellow-200 to-theme-gold rounded-full opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                            <div className="relative flex flex-col items-center bg-gradient-to-r from-[#1a1a1a] to-black border-2 border-theme-gold px-12 py-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300">
                                <span className="font-serif text-white text-xl md:text-2xl tracking-widest font-bold drop-shadow-md">無料でAI肌年齢診断を開始する</span>
                                <span className="font-display text-theme-gold text-xs tracking-widest mt-2 uppercase">Take the AI Skin Test</span>
                            </div>
                        </a>
                    </div>

                    <div className="mt-8">
                        <p className="text-theme-offWhite/60 text-xs font-serif tracking-widest">*年齢に応じた潤いとキメを整えるケア。</p>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 flex flex-col items-center z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                <span className="text-theme-gold font-display text-[10px] tracking-widest mb-2 font-bold uppercase">Scroll to Discover</span>
                <div className="w-[1px] h-12 bg-theme-gold/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-theme-gold animate-[scrollDown_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </section>
    );
};
