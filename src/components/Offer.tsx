import React from 'react';
import { CTAButton } from './CTAButton';
import { IMAGES, LINKS } from '../constants';

export const Offer: React.FC = () => {
    return (
        <section id="offer" className="relative py-32 md:py-48 px-6 overflow-hidden bg-transparent">

            {/* Glowing effect adapted to red theme */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-theme-gold/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">

                {/* 究極のPitch Black Frame (Final Offer) */}
                <div className="bg-gradient-to-tr from-[#111111] via-[#0a0a0a] to-[#000000] rounded-[4rem] p-10 md:p-20 shadow-[0_50px_150px_rgba(0,0,0,1)] border-2 border-theme-gold relative flex flex-col items-center overflow-hidden transform hover:scale-[1.01] transition-transform duration-700">

                    {/* Inner detailed borders */}
                    <div className="absolute inset-4 border-2 border-theme-gold/40 rounded-[3.5rem] pointer-events-none"></div>
                    <div className="absolute inset-6 border border-theme-gold/10 rounded-[3rem] pointer-events-none"></div>

                    <span className="font-display text-theme-gold uppercase tracking-[0.6em] text-sm md:text-base font-bold block mb-8 drop-shadow-md">Exclusive Offer</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-[1.6] mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] tracking-widest">
                        次は、貴女の番です。
                    </h2>

                    <div className="bg-black/60 rounded-[3rem] p-8 md:p-14 w-full max-w-3xl border border-theme-gold/30 shadow-inner mb-16 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme-gold text-black px-8 py-2 rounded-full font-serif font-bold tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                            現在、ご新規様のご案内枠：残りわずか
                        </div>

                        <p className="font-serif text-theme-offWhite text-lg md:text-xl lg:text-2xl leading-[2.5] tracking-[0.2em] font-medium mt-6">
                            銀座の隠れ家で、<br className="md:hidden" />貴女の本当の「光」を取り戻す。<br />
                            AI肌解析の結果を基にした、<br className="md:hidden" />最適なアプローチをご提案いたします。
                        </p>
                    </div>

                    <div className="w-full max-w-2xl relative z-20">
                        {/* 巨大スケールのボタンラッパー */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-theme-gold via-yellow-200 to-theme-gold rounded-full opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-1000 animate-pulse pointer-events-none"></div>

                            <CTAButton
                                href={LINKS.LINE}
                                text="公式LINEで予約枠を確認する"
                                subText="【無料】AI連携・肌質別アドバイス特典付き"
                                isSticky={false}
                            />
                        </div>
                    </div>

                    {/* Security Icons or reassuring text below */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
                        <p className="text-theme-offWhite font-serif text-sm tracking-widest flex items-center gap-2">
                            <span className="text-theme-gold">✔︎</span> 24時間受付可能
                        </p>
                        <p className="text-theme-offWhite font-serif text-sm tracking-widest flex items-center gap-2">
                            <span className="text-theme-gold">✔︎</span> 強引な勧誘一切なし
                        </p>
                        <p className="text-theme-offWhite font-serif text-sm tracking-widest flex items-center gap-2">
                            <span className="text-theme-gold">✔︎</span> クレジットカード対応
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
