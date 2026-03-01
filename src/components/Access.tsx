import React from 'react';

export const Access: React.FC = () => {
    return (
        <section id="access" className="relative py-24 md:py-32 px-6 overflow-hidden bg-transparent border-y border-theme-gold/20">
            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

                {/* Store Info - Pitch Black Box */}
                <div className="w-full md:w-5/12 reveal-on-scroll">
                    <div className="bg-gradient-to-br from-[#111111] to-[#000000] rounded-[3rem] p-10 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,1)] border border-theme-gold/60 relative overflow-hidden">

                        <div className="absolute inset-3 border border-theme-gold/20 rounded-[2.5rem] pointer-events-none"></div>

                        <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">Access & Info</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-10 leading-[1.6]">
                            サロン情報
                        </h2>

                        <div className="space-y-6 text-theme-offWhite font-serif tracking-wider text-base md:text-lg">
                            <div className="border-b border-theme-gold/20 pb-4">
                                <p className="text-theme-gold text-sm tracking-widest mb-1">サロン名</p>
                                <p className="font-bold text-lg">ルネセル銀座サロン</p>
                            </div>
                            <div className="border-b border-theme-gold/20 pb-4">
                                <p className="text-theme-gold text-sm tracking-widest mb-1">所在地</p>
                                <p>〒104-0061<br />東京都中央区銀座1-1-1<br />〇〇ビル 4F</p>
                            </div>
                            <div className="border-b border-theme-gold/20 pb-4 flex items-center justify-between">
                                <div>
                                    <p className="text-theme-gold text-sm tracking-widest mb-1">最寄り駅</p>
                                    <p>銀座駅 A3出口 徒歩3分</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-theme-gold px-4 py-2 rounded-full shadow-inner">
                                    <span className="font-bold text-theme-gold text-sm">MEO対応</span>
                                </div>
                            </div>
                            <div className="border-b border-theme-gold/20 pb-4">
                                <p className="text-theme-gold text-sm tracking-widest mb-1">営業時間 / 定休日</p>
                                <p>10:00 - 21:00 / 不定休</p>
                            </div>
                            <div className="pb-4">
                                <p className="text-theme-gold text-sm tracking-widest mb-1">ご予約</p>
                                <p>完全紹介・予約制</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Embed - High contrast frame */}
                <div className="w-full md:w-7/12 reveal-on-scroll">
                    <div className="relative aspect-video md:aspect-[4/3] w-full rounded-[3rem] overflow-hidden border-2 border-theme-gold shadow-[0_20px_60px_rgba(0,0,0,1)] bg-black">
                        {/* Placeholder Map iframe. In real environment, replace SRC with actual google map embed URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1444158431057!2d139.7610143126742!3d35.67341357247738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be6ec39755b%3A0x959dc3d4b68ffce2!2z6YqA5bqn6aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'contrast(1.2)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Salon Location Map"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};
