import React from 'react';
import { CTAButton } from './CTAButton';
import { VIDEOS, LINKS } from '../constants';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Pure Black Background with purely cinematic video */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    src={VIDEOS.HERO_BG}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                ></video>
                {/* 漆黒のオーバーレイで動画の明るさを調整（赤みは一切入れない） */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 mt-12 md:mt-20 flex flex-col items-center">

                {/* The "Deep Red Frame" - 視認性とゴージャス感、ボリューム感の源泉 */}
                <div className="bg-gradient-to-br from-[#6b0202]/95 via-[#8b0000]/95 to-[#4a0000]/95 border border-theme-gold/60 shadow-[0_30px_80px_rgba(0,0,0,0.9)] rounded-[2rem] p-8 md:p-16 lg:p-20 text-center w-full relative overflow-hidden backdrop-blur-md">

                    {/* Inner gold subtle border for framing */}
                    <div className="absolute inset-2 border border-theme-gold/20 rounded-[1.5rem] pointer-events-none"></div>

                    <p className="font-display text-theme-gold tracking-widest uppercase text-sm md:text-base font-bold mb-6 drop-shadow-md">
                        Ginza Premium Salon
                    </p>

                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-wider md:tracking-widest leading-[1.4] mb-10 drop-shadow-lg">
                        もう終わりにしないか。<br />
                        <span className="text-theme-gold relative inline-block mt-2">
                            塗るだけ
                            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                        </span>の美しさは、
                    </h1>

                    <div className="bg-black/30 rounded-2xl p-6 md:p-8 mb-12 border border-theme-gold/10 shadow-inner">
                        <p className="font-serif text-theme-offWhite text-base md:text-xl lg:text-2xl leading-[2] tracking-wider drop-shadow-md font-medium">
                            銀座VIPが密かに通う『 細胞再生の魔法 』。<br className="hidden md:block" />
                            4毒抜き料理と、韓国美容皮膚科発のルネセルが<br className="hidden md:block" />
                            あなたの肌を根本から創り変える。
                        </p>
                    </div>

                    <div className="flex justify-center relative z-20">
                        <CTAButton
                            href={LINKS.LINE}
                            text="奇跡の始まりを確認する"
                            subText="公式LINE限定VIP招待"
                        />
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 flex flex-col items-center z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                <span className="text-theme-gold font-display text-[10px] tracking-widest mb-2 font-bold">SCROLL</span>
                <div className="w-[1px] h-12 bg-theme-gold/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-theme-gold animate-[scrollDown_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </section>
    );
};
