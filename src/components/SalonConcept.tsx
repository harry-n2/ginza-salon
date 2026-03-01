import React from 'react';
import { VIDEOS } from '../constants';

export const SalonConcept: React.FC = () => {
    return (
        <section id="salon-concept" className="relative py-32 md:py-48 px-6 overflow-hidden bg-transparent border-y border-theme-gold/20 flex flex-col items-center justify-center min-h-screen">

            {/* Cinematic Background Video - Clear luxury feel */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    src={VIDEOS.EVIDENCE_BG_2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#100000]/90 via-transparent to-[#100000]/90"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#100000]/80 via-transparent to-[#100000]/80"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center reveal-on-scroll flex flex-col justify-center items-center">

                {/* Ultra Luxury Centered Pitch Black Frame */}
                <div className="bg-gradient-to-b from-[#111111]/90 to-[#000000]/90 rounded-[4rem] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,1)] border-2 border-theme-gold/60 relative overflow-hidden backdrop-blur-md w-full">

                    <div className="absolute inset-4 border border-theme-gold/30 rounded-[3.5rem] pointer-events-none"></div>

                    <span className="font-display text-theme-gold uppercase tracking-[0.5em] text-sm md:text-base font-bold block mb-8 drop-shadow-md">Salon Concept</span>

                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-10 leading-[1.6] drop-shadow-lg tracking-widest">
                        五感で味わう、<br className="md:hidden" />極上の停滞。
                    </h2>

                    <div className="w-16 h-[2px] bg-theme-gold mx-auto mb-10 shadow-[0_0_10px_rgba(255,215,0,0.8)]"></div>

                    <div className="space-y-6 text-theme-offWhite font-serif leading-loose tracking-[0.2em] text-lg md:text-xl drop-shadow-md font-medium">
                        <p>
                            銀座の喧騒を離れた、完全個室空間。<br />
                            香る重厚なアロマ、肌を包み込む最高級のリネン、<br className="hidden md:block" />
                            そして、すべてを忘てただ「美」に向き合う時間。
                        </p>
                        <p>
                            スマートフォンを置き、目を閉じてください。<br />
                            私たちが、貴女を非日常への旅へといざないます。
                        </p>
                    </div>

                    <div className="mt-16 flex justify-center gap-8">
                        <div className="text-center">
                            <span className="block font-display text-theme-gold text-2xl mb-2 font-bold">1</span>
                            <span className="font-serif text-white text-sm tracking-widest">完全紹介制</span>
                        </div>
                        <div className="w-px h-12 bg-theme-gold/30"></div>
                        <div className="text-center">
                            <span className="block font-display text-theme-gold text-2xl mb-2 font-bold">VIP</span>
                            <span className="font-serif text-white text-sm tracking-widest">全室個室</span>
                        </div>
                        <div className="w-px h-12 bg-theme-gold/30"></div>
                        <div className="text-center">
                            <span className="block font-display text-theme-gold text-2xl mb-2 font-bold">60m</span>
                            <span className="font-serif text-white text-sm tracking-widest">至高の時間</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
