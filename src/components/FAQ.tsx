import React, { useState } from 'react';

const FAQS = [
    {
        q: "1回の施術で効果は感じられますか？",
        a: "はい。多くの方が当日から肌のトーンアップや滑らかさ（光反射率の向上）をご実感いただいております。ただし細胞レベルでの自浄作用が最も高まるのは3〜7日後です。",
    },
    {
        q: "痛みや赤み、ダウンタイムはありますか？",
        a: "微細なダイヤモンド粒子を馴染ませる際、チクチクとした心地よい刺激があります。一般的な剥離系ピーリングのような強い痛みや数日間の強い赤み、皮剥けは基本的にございません。",
    },
    {
        q: "メイクはいつから可能ですか？",
        a: "当日のメイクはお控えいただいております。これは肌を落ち着かせ、高機能成分を確実に浸透させるための「ルール（沈黙）」です。翌日からは通常通りメイク可能です。",
    },
    {
        q: "敏感肌やアトピー肌でも受けられますか？",
        a: "施術前の「鑑定」にてマイクロスコープで肌状態を確認いたします。炎症が強い場合はお断りすることもございますが、本メソッドは肌育を目的としているため、肌理が乱れている方にこそお勧めです。",
    },
    {
        q: "どれくらいの頻度で通うのが理想ですか？",
        a: "初めの3ヶ月は、ターンオーバーを正常化させるため「月1回（計3回）」の施術を推奨しております。その後は状態に応じたメンテナンスをご提案いたします。",
    },
    {
        q: "予約制ですか？",
        a: "はい、当サロンは完全予約・紹介制となっており、他のお客様と顔を合わせることのないプライベート空間を徹底しております。（初回は公式LINEからのご予約が可能です）",
    }
];

interface FAQItemProps {
    q: string;
    a: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a, isOpen, onClick }) => {
    return (
        <div className="border border-theme-gold/30 rounded-2xl mb-4 overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-black shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            <button
                className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none focus:bg-theme-gold/5 transition-colors"
                onClick={onClick}
            >
                <h3 className="text-white font-serif text-lg md:text-xl tracking-wider font-bold pr-4 flex items-start gap-4">
                    <span className="text-theme-gold font-display text-2xl leading-none">Q.</span>
                    <span className="mt-1">{q}</span>
                </h3>
                <div className={`w-8 h-8 rounded-full border border-theme-gold flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-theme-gold text-black' : 'text-theme-gold'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 md:p-8 pt-0 border-t border-theme-gold/10">
                    <p className="text-theme-offWhite font-serif leading-loose tracking-wider text-base md:text-lg flex items-start gap-4">
                        <span className="text-theme-offWhite/40 font-display text-2xl leading-none font-bold">A.</span>
                        <span className="mt-1">{a}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 md:py-32 px-6 overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">FAQ</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-[1.6]">
                        よくあるご質問
                    </h2>
                </div>

                <div className="reveal-on-scroll">
                    {FAQS.map((faq, index) => (
                        <FAQItem
                            key={index}
                            q={faq.q}
                            a={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        />
                    ))}

                    <div className="text-center mt-10">
                        <p className="font-serif text-theme-offWhite/60 text-sm tracking-widest">(その他9件のご質問は、公式LINEにて24時間AIがお答えいたします)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
