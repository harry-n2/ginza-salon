import React, { useState } from 'react';
import { CTAButton } from './CTAButton';
import { LINKS } from '../constants';

const QUESTIONS = [
    "1. 睡眠時間は平均6時間未満である",
    "2. 一日の水分摂取量が1.5L以下である",
    "3. 夕方になると顔のくすみを実感する",
    "4. 過去に強いピーリングを受けたことがある",
    "5. 現在、保湿以外の主力成分（レチノール等）を使用している",
    "6. 実年齢より5歳程度若い「理想の肌年齢」を本気で目指したい",
    "7. 銀座エリアに月に1回以上訪れる機会がある",
    "8. 紫外線対策は1年間を通して徹底している",
    "9. 化粧品を変えると肌荒れしやすい（物理的刺激への耐性がない）",
    "10. 今から3ヶ月間、本気で肌を変えたいという強い意志がある"
];

export const InteractiveAnalysis: React.FC = () => {
    const [step, setStep] = useState<'intro' | 'questions' | 'loading' | 'result'>('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleStart = () => setStep('questions');

    const handleAnswer = () => {
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setStep('loading');
            setTimeout(() => setStep('result'), 3000);
        }
    };

    return (
        <section id="ai-analysis" className="relative py-24 md:py-40 px-6 overflow-hidden bg-transparent border-y border-theme-gold/20">
            <div className="max-w-4xl mx-auto relative z-10 text-center">

                <div className="mb-16 reveal-on-scroll">
                    <span className="font-display text-theme-gold uppercase tracking-[0.4em] text-sm font-bold block mb-4">Interactive Asset</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-[1.6] drop-shadow-lg">
                        客観的な『事実』から、<br className="md:hidden" />目を逸らさない。
                    </h2>
                </div>

                {/* Pitch Black Interactive Frame */}
                <div className="bg-gradient-to-tr from-[#111111] to-[#000000] border-2 border-theme-gold/60 rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-500 min-h-[400px] flex flex-col justify-center">

                    <div className="absolute inset-3 border border-theme-gold/30 rounded-[2.5rem] pointer-events-none"></div>

                    {step === 'intro' && (
                        <div className="animate-[fadeIn_0.5s_ease-in-out]">
                            <h3 className="text-theme-gold font-serif text-2xl md:text-3xl font-bold mb-6 tracking-widest">
                                AI肌年齢・光度解析エンジン
                            </h3>
                            <p className="text-theme-offWhite font-serif leading-loose tracking-wider mb-10 text-lg">
                                現在の生活習慣と肌履歴から、<br className="hidden md:block" />
                                あなたの肌が失っている「光」の欠損率と<br className="hidden md:block" />
                                推定肌年齢を2,400万件のデータから導き出します。
                            </p>
                            <button
                                onClick={handleStart}
                                className="bg-[#1a1a1a] border-2 border-theme-gold text-theme-gold px-12 py-4 rounded-full font-serif font-bold tracking-widest text-lg hover:bg-theme-gold hover:text-black transition-colors duration-300 shadow-xl"
                            >
                                AI解析をスタートする
                            </button>
                        </div>
                    )}

                    {step === 'questions' && (
                        <div className="animate-[fadeIn_0.5s_ease-in-out] w-full max-w-2xl mx-auto">
                            <div className="mb-8 flex justify-between items-center text-theme-gold font-display text-sm tracking-widest">
                                <span>Question {currentQuestion + 1} / 10</span>
                                <div className="w-1/2 h-1 bg-black/50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-theme-gold transition-all duration-300"
                                        style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            <h3 className="text-white font-serif text-xl md:text-2xl font-bold leading-relaxed tracking-wider mb-12 min-h-[80px]">
                                {QUESTIONS[currentQuestion]}
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button onClick={handleAnswer} className="bg-black/40 border border-theme-gold/50 text-white px-10 py-4 rounded-full font-serif tracking-widest hover:bg-theme-gold hover:text-black hover:border-theme-gold transition-all duration-300">はい</button>
                                <button onClick={handleAnswer} className="bg-black/40 border border-theme-gold/50 text-white px-10 py-4 rounded-full font-serif tracking-widest hover:bg-theme-gold hover:text-black hover:border-theme-gold transition-all duration-300">いいえ</button>
                            </div>
                        </div>
                    )}

                    {step === 'loading' && (
                        <div className="animate-[fadeIn_0.5s_ease-in-out] flex flex-col items-center">
                            <div className="w-16 h-16 border-4 border-theme-gold/30 border-t-theme-gold rounded-full animate-spin mb-8 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
                            <h3 className="text-theme-gold font-serif text-xl tracking-widest font-bold mb-4 animate-pulse">
                                2,400万件のデータと照合中...
                            </h3>
                            <p className="text-theme-offWhite/60 font-serif tracking-widest text-sm">
                                解析完了までしばらくお待ちください
                            </p>
                        </div>
                    )}

                    {step === 'result' && (
                        <div className="animate-[fadeIn_1s_ease-in-out]">
                            <h3 className="text-theme-gold font-serif text-xl font-bold mb-8 tracking-[0.3em]">AI解析結果</h3>

                            <div className="bg-black/50 rounded-3xl p-8 md:p-12 mb-10 border border-theme-gold/20 shadow-inner flex flex-col md:flex-row items-center justify-center gap-10">
                                <div className="text-center">
                                    <p className="text-theme-offWhite font-serif tracking-widest mb-2 text-sm">あなたの光度欠損率</p>
                                    <p className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">68<span className="text-2xl">%</span></p>
                                </div>
                                <div className="w-px h-20 bg-theme-gold/30 hidden md:block"></div>
                                <div className="text-center">
                                    <p className="text-theme-offWhite font-serif tracking-widest mb-2 text-sm">推定肌年齢</p>
                                    <p className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-[0_0_20px_rgba(255,100,0,0.5)]">48<span className="text-2xl">歳</span></p>
                                </div>
                            </div>

                            <p className="text-theme-offWhite font-serif leading-loose tracking-wider mb-10 text-lg">
                                この欠損した「光」は、物理的なアプローチで<br className="hidden md:block" />
                                再構築することが可能です。<br />
                                あなた専用の最適化レシピをご確認ください。
                            </p>

                            <div className="flex justify-center flex-col items-center gap-4">
                                <CTAButton
                                    href={LINKS.LINE}
                                    text="改善レシピと銀座限定クーポンを受け取る"
                                    subText="公式LINEへ自動で結果を送信します"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
