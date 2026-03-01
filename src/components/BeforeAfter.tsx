import React from 'react';
import { IMAGES, VIDEOS } from '../constants';

export const BeforeAfter: React.FC = () => {
    const testimonials = [
        {
            image: IMAGES.EVIDENCE_1,
            quote: "「48歳。もうファンデーションはいらないと決めました。」",
            name: "A.Y様（48歳）"
        },
        {
            image: IMAGES.EVIDENCE_2,
            quote: "「銀座での買い物のついでに寄ったつもりが、人生の転機になりました。」",
            name: "M.K様（42歳 / 会社経営）"
        }
    ];

    return (
        <section id="before-after" className="relative py-24 md:py-40 px-6 overflow-hidden bg-black border-y border-theme-gold/20">

            {/* Background Video directly on pitch black */}
            <div className="absolute inset-0 z-0">
                <video
                    src={VIDEOS.EVIDENCE_BG_1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm md:text-base font-bold block mb-4 drop-shadow-md">Before & After</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-[1.6] drop-shadow-lg">
                        鏡の中の奇跡
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="group relative reveal-on-scroll"
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Pitch Black Frame Card */}
                            <div className="bg-gradient-to-br from-[#111111] via-[#080808] to-[#000000] rounded-[3rem] overflow-hidden border-2 border-theme-gold/60 hover:border-theme-gold transition-colors duration-500 shadow-[0_30px_80px_rgba(0,0,0,1)] flex flex-col h-full transform hover:-translate-y-2">

                                <div className="absolute inset-2 border border-theme-gold/20 rounded-[2.5rem] pointer-events-none z-30"></div>

                                <div className="aspect-square w-full relative overflow-hidden bg-black">
                                    <img
                                        src={item.image}
                                        alt="お客様の証言"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    {/* Vignette on image for integration */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                                </div>

                                <div className="p-10 flex-grow flex flex-col justify-center relative bg-black/40 backdrop-blur-sm z-20">
                                    <div className="w-10 h-[2px] bg-theme-gold mb-6 shadow-[0_0_10px_rgba(255,215,0,0.8)]"></div>
                                    <p className="font-serif text-white text-xl md:text-2xl leading-[1.8] tracking-widest mb-8 font-medium drop-shadow-md">
                                        {item.quote}
                                    </p>
                                    <div className="flex justify-end border-t border-theme-gold/20 pt-6">
                                        <p className="font-serif text-theme-gold text-sm md:text-base tracking-widest font-bold">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-theme-offWhite/50 font-serif text-sm tracking-widest">*使用感には個人差があります。</p>
                </div>
            </div>
        </section>
    );
};
