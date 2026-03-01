import React from 'react';
import { IMAGES } from '../constants';

export const Safety: React.FC = () => {
    return (
        <section id="safety" className="relative py-24 md:py-40 px-6 overflow-hidden bg-transparent border-t border-theme-gold/20">
            {/* Vivid Red Background inherited */}

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* 徹底された漆黒に浮かぶImage */}
                <div className="w-full md:w-1/2 relative reveal-on-scroll h-[500px] md:h-[700px]">
                    <div className="absolute top-0 right-0 w-full h-full border-2 border-theme-gold/30 translate-x-4 -translate-y-4 z-0 rounded-[3rem]"></div>
                    <div className="relative w-full h-full overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,1)] z-10 border-2 border-theme-gold bg-black rounded-[3rem]">
                        <img
                            src={IMAGES.SECRET}
                            alt="銀座のプロが守る4つの鉄則"
                            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                        <div className="absolute bottom-10 left-10 z-20">
                            <p className="text-white font-serif text-2xl font-bold mb-2 border-b-2 border-theme-ruby inline-block pb-2 drop-shadow-md">The 4 Iron Rules</p>
                            <p className="text-theme-gold text-sm font-serif mt-2 tracking-widest drop-shadow-md">プロの誓い</p>
                        </div>
                    </div>
                </div>

                {/* Pitch Black Content Box */}
                <div className="w-full md:w-1/2 reveal-on-scroll">
                    <div className="bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,1)] border-2 border-theme-gold/60 relative overflow-hidden">

                        <div className="absolute inset-3 border border-theme-gold/20 rounded-[2.5rem] pointer-events-none"></div>

                        <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">Safety & Pledge</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-12 leading-[1.6]">
                            銀座のプロが守る<br className="hidden md:block" />「4つの鉄則」
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-black/40 rounded-3xl p-6 border border-theme-gold/10 hover:border-theme-gold/30 transition-colors">
                                <h3 className="text-theme-gold font-serif text-xl md:text-2xl font-bold tracking-widest flex items-center gap-4 mb-4">
                                    <span className="font-display text-xs border border-theme-gold px-3 py-1 rounded-full uppercase">Rule 01</span>鑑定
                                </h3>
                                <p className="text-theme-offWhite font-serif leading-relaxed tracking-wider text-base md:text-lg">
                                    重度の炎症や傷がないか、マイクロスコープレベルで確認。適さない場合は施術を断る勇気。
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-3xl p-6 border border-theme-gold/10 hover:border-theme-gold/30 transition-colors">
                                <h3 className="text-theme-gold font-serif text-xl md:text-2xl font-bold tracking-widest flex items-center gap-4 mb-4">
                                    <span className="font-display text-xs border border-theme-gold px-3 py-1 rounded-full uppercase">Rule 02</span>遮断
                                </h3>
                                <p className="text-theme-offWhite font-serif leading-relaxed tracking-wider text-base md:text-lg">
                                    施術後7日間、SPF30以上での完璧なUVガードを徹底指導。
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-3xl p-6 border border-theme-gold/10 hover:border-theme-gold/30 transition-colors">
                                <h3 className="text-theme-gold font-serif text-xl md:text-2xl font-bold tracking-widest flex items-center gap-4 mb-4">
                                    <span className="font-display text-xs border border-theme-gold px-3 py-1 rounded-full uppercase">Rule 03</span>沈黙
                                </h3>
                                <p className="text-theme-offWhite font-serif leading-relaxed tracking-wider text-base md:text-lg">
                                    当日のメイク、サウナ、激しい運動の禁止。これは肌を「休ませる」ための神聖な儀式。
                                </p>
                            </div>

                            <div className="bg-black/40 rounded-3xl p-6 border border-theme-gold/10 hover:border-theme-gold/30 transition-colors">
                                <h3 className="text-theme-gold font-serif text-xl md:text-2xl font-bold tracking-widest flex items-center gap-4 mb-4">
                                    <span className="font-display text-xs border border-theme-gold px-3 py-1 rounded-full uppercase">Rule 04</span>伴走
                                </h3>
                                <p className="text-theme-offWhite font-serif leading-relaxed tracking-wider text-base md:text-lg">
                                    施術後の乾燥や角質剥離をLINEで24時間サポート。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
