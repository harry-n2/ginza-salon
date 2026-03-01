import React from 'react';

export const Comparison: React.FC = () => {
    return (
        <section id="comparison" className="relative py-24 md:py-32 px-6 overflow-hidden bg-transparent">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">Comparison</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-[1.6]">
                        既存の「剥離系」との決別
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 reveal-on-scroll">

                    {/* 一般的なピーリング */}
                    <div className="bg-black/60 border border-theme-offWhite/20 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center">
                        <h3 className="font-serif text-xl md:text-2xl text-theme-offWhite/80 font-bold mb-8 tracking-widest text-center border-b border-theme-offWhite/20 pb-4 w-full">一般的ピーリング</h3>
                        <ul className="space-y-6 text-theme-offWhite/60 font-serif text-lg tracking-wider text-center w-full">
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-red-400">×</span>
                                強制的な剥離
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-red-400">×</span>
                                強い痛み
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-red-400">×</span>
                                数日間の赤み
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-red-400">×</span>
                                その場しのぎ
                            </li>
                        </ul>
                    </div>

                    {/* ルネセル銀座（Pitch Black Frame） */}
                    <div className="bg-gradient-to-b from-[#111111] to-[#000000] border-2 border-theme-gold rounded-[2rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,1)] flex flex-col items-center relative transform scale-100 md:scale-105 z-10">
                        <div className="absolute -top-5 bg-theme-gold text-black px-6 py-2 rounded-full font-display text-sm tracking-widest font-bold shadow-lg">RENCELL GINZA</div>
                        <h3 className="font-serif text-2xl md:text-3xl text-theme-gold font-bold mb-8 tracking-widest text-center border-b border-theme-gold/30 pb-4 w-full">ルネセル銀座</h3>
                        <ul className="space-y-6 text-white font-serif text-lg md:text-xl tracking-wider text-center w-full font-medium">
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-theme-gold">✓</span>
                                物理的な整肌
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-theme-gold">✓</span>
                                心地よい刺激
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-theme-gold">✓</span>
                                数日後の自然な艶
                            </li>
                            <li className="flex flex-col items-center">
                                <span className="block mb-2 text-theme-gold">✓</span>
                                長期的なコンディション維持
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center reveal-on-scroll">
                    <div className="inline-block bg-gradient-to-r from-[#1a1a1a] via-[#333] to-[#1a1a1a] border-y-2 border-theme-gold px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                        <p className="font-serif text-xl md:text-2xl text-theme-gold font-bold tracking-widest leading-relaxed">
                            「銀座の女性が選ぶのは、<br className="md:hidden" />肌をいじめるケアではなく、肌を育てるケアです。」
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
