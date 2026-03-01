import React from 'react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent text-theme-offWhite font-serif py-16 md:py-24 px-6 flex justify-center items-center">

            <div className="max-w-4xl w-full">

                <Link to="/" className="text-theme-gold text-sm tracking-widest hover:text-white transition-colors flex items-center gap-2 mb-10 w-fit">
                    <span className="text-xl">&larr;</span> トップページに戻る
                </Link>

                {/* Pitch Black Frame */}
                <div className="bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] rounded-[3rem] p-10 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,1)] border border-theme-gold/40 relative">
                    <div className="absolute inset-3 border border-theme-gold/10 rounded-[2.5rem] pointer-events-none"></div>

                    <div className="text-center mb-16">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-4">プライバシーポリシー</h1>
                        <div className="w-16 h-[1px] bg-theme-gold mx-auto"></div>
                    </div>

                    <div className="space-y-10 tracking-wider leading-loose text-sm md:text-base">

                        <section>
                            <h2 className="text-theme-gold font-bold mb-4 text-xl border-l-[3px] border-theme-gold pl-4">1. 個人情報の収集について</h2>
                            <p>当サロン（ルネセル銀座サロン）は、お客様にサービスを提供するにあたり、氏名、電話番号、メールアドレス等の個人情報をお預かりする場合がございます。これらの情報は、適法かつ公正な手段によって収集いたします。</p>
                        </section>

                        <section>
                            <h2 className="text-theme-gold font-bold mb-4 text-xl border-l-[3px] border-theme-gold pl-4">2. 個人情報の利用目的</h2>
                            <p>お預かりした個人情報は、以下の目的のみに使用いたします。</p>
                            <ul className="list-disc ml-6 mt-4 space-y-2 text-theme-offWhite/80">
                                <li>ご予約の確認・ご案内等のご連絡</li>
                                <li>当サロンの施術およびサービスのご提供</li>
                                <li>お客様からのご相談やお問い合わせへの対応</li>
                                <li>サービス向上を目的とした統計データの作成（個人を特定できない形式）</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-theme-gold font-bold mb-4 text-xl border-l-[3px] border-theme-gold pl-4">3. 個人情報の第三者への提供</h2>
                            <p>当サロンは、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、法令に基づく場合や、生命・身体・財産の保護のために必要がある場合を除きます。</p>
                        </section>

                        <section>
                            <h2 className="text-theme-gold font-bold mb-4 text-xl border-l-[3px] border-theme-gold pl-4">4. 個人情報の管理</h2>
                            <p>当サロンは、お預かりした個人情報の漏洩、紛失、改ざんを防止するため、適切な安全管理措置を講じます。</p>
                        </section>

                        <section>
                            <h2 className="text-theme-gold font-bold mb-4 text-xl border-l-[3px] border-theme-gold pl-4">5. 個人情報の開示・訂正・削除</h2>
                            <p>お客様ご本人からご自身の個人情報の開示、訂正、追加、削除の要請があった場合は、ご本人であることを確認の上、速やかに対応いたします。</p>
                        </section>

                        <section className="bg-black/50 p-6 rounded-2xl border border-theme-gold/20 mt-12">
                            <h2 className="text-theme-gold font-bold mb-4">お問い合わせ窓口</h2>
                            <p>本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
                            <p className="mt-4 font-bold text-white tracking-widest">
                                ルネセル銀座サロン<br />
                                〒104-0061 東京都中央区銀座1-1-1 〇〇ビル 4F<br />
                                Email: info@example.com (※仮設定)
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};
