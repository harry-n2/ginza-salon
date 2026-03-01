import React from 'react';
import { IMAGES } from '../constants';

export const ExpertInterview: React.FC = () => {
    return (
        <section id="interview" className="relative py-24 md:py-40 px-6 overflow-hidden bg-black">

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-20">

                {/* Image / Portrait Frame with pure black background */}
                <div className="w-full md:w-5/12 reveal-on-scroll relative">
                    <div className="aspect-[3/4] rounded-t-full rounded-b-[4rem] overflow-hidden border-4 border-theme-gold shadow-[0_30px_80px_rgba(0,0,0,1)] relative z-10 bg-black">
                        {/* Placeholder for Expert's Photo. Using existing image if possible, but ideally a portrait. */}
                        <img
                            src={IMAGES.EVIDENCE_3} // Replace with actual expert photo
                            alt="代表"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                </div>

                {/* Text Content - Pitch Black Frame */}
                <div className="w-full md:w-7/12 reveal-on-scroll">
                    <div className="bg-gradient-to-bl from-[#111111] via-[#080808] to-[#000000] rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,1)] border border-theme-gold/50 relative overflow-hidden backdrop-blur-xl">

                        <div className="absolute inset-3 border border-theme-gold/20 rounded-[2.5rem] pointer-events-none"></div>

                        <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-xs md:text-sm font-bold block mb-4">Expert Interview</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-10 leading-[1.6]">
                            オーナー哲学
                        </h2>

                        <div className="space-y-6 text-theme-offWhite font-serif leading-loose tracking-wider text-base md:text-lg">
                            <p>
                                なぜ私は「銀座」という一等地で、この「ルネセル」に人生を賭けたのか。
                            </p>

                            <p className="text-xl md:text-2xl text-theme-gold font-bold my-8 border-l-4 border-theme-gold pl-6 py-2">
                                偽物の美しさではなく、内側から溢れ出す「光」こそが、大人の女性の武器になる。
                            </p>

                            <p>
                                日々の喧騒の中で失われていく肌の輝き。それをメイクで隠すのではなく、最新の細胞再生メカニズムと、私たちが提唱する「4毒抜きメソッド」によって根本から呼び覚ます。
                            </p>
                            <p>
                                銀座のVIPが密かに実践してきたこの「光の再生」を、本気で人生を変えたいと願う貴女へ。妥協のない真実の美を、ここ銀座からお届けします。
                            </p>
                        </div>

                        <div className="mt-12 flex justify-end">
                            <p className="font-display text-theme-gold text-xl tracking-[0.3em] font-bold">
                                代表　ルネセル 麗華
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
