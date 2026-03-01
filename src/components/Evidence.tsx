import React from 'react';
import { IMAGES, VIDEOS } from '../constants';

export const Evidence: React.FC = () => {
    const testimonials = [
        {
            image: IMAGES.EVIDENCE_1,
            quote: "「もう隠す必要がない。自分の肌に初めて自信が持てました。」",
            name: "A.Y様（45歳 / 銀座VIPサロン会員）"
        },
        {
            image: IMAGES.EVIDENCE_2,
            quote: "「4毒抜きとの相乗効果に驚愕。20代の頃より肌が輝いています。」",
            name: "M.K様（52歳 / 会社経営）"
        },
        {
            image: IMAGES.EVIDENCE_3,
            quote: "「高額な美容液ジプシーはもう卒業。これ以上の魔法はありません。」",
            name: "S.T様（38歳 / 医師）"
        }
    ];

    return (
        <section id="evidence" className="relative py-24 md:py-40 px-6 overflow-hidden bg-theme-black border-t border-theme-gold/10">
            {/* Background Video for Evidence - Opted for clear view with dimming */}
            <div className="absolute inset-0 z-0">
                <video
                    src={VIDEOS.EVIDENCE_BG_2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                ></video>
                <div className="absolute inset-0 bg-theme-black/70"></div>
                {/* Subtle red glow at top only */}
                <div className="absolute top-0 inset-x-0 h-1/4 bg-gradient-to-b from-theme-ruby/15 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4 drop-shadow-md">Evidence</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-[1.6] drop-shadow-lg">
                        抗えない美しさを、<br className="md:hidden" />すでに手に入れた方々
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="group relative reveal-on-scroll overflow-hidden bg-theme-charcoal border border-theme-gold/20 hover:border-theme-gold/50 transition-colors duration-500 shadow-2xl"
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt="お客様の声"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Bottom gradient just enough for text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-theme-black via-theme-black/70 to-transparent z-10 transition-all duration-500"></div>

                                {/* Visible Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                    <div className="w-8 h-[1px] bg-theme-gold mb-6 transition-all duration-500 group-hover:w-16"></div>
                                    <p className="font-serif text-white text-base md:text-lg leading-loose tracking-wider mb-4 opacity-90 drop-shadow-md">
                                        {item.quote}
                                    </p>
                                    <p className="font-serif text-theme-gold text-xs md:text-sm tracking-widest font-bold drop-shadow-md">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
