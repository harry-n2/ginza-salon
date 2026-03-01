import React from 'react';
import { Link } from 'react-router-dom';

export const Law: React.FC = () => {
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
                        <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-4">特定商取引法に基づく表記</h1>
                        <div className="w-16 h-[1px] bg-theme-gold mx-auto"></div>
                    </div>

                    <div className="space-y-8 tracking-wider leading-loose text-sm md:text-base">
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">事業者名</h2>
                            <p className="md:w-2/3">ルネセル銀座サロン</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">代表者名</h2>
                            <p className="md:w-2/3">ルネセル 太郎</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">所在地</h2>
                            <p className="md:w-2/3">〒104-0061 東京都中央区銀座1-1-1 〇〇ビル 4F</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">連絡先</h2>
                            <p className="md:w-2/3">電話番号: 03-0000-0000<br />メールアドレス: info@example.com</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">販売価格</h2>
                            <p className="md:w-2/3">各サービス・商品のご購入ページ（またはご案内）にて表示する価格</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">商品代金以外の必要料金</h2>
                            <p className="md:w-2/3">消費税、インターネット接続料金、通信料金等はお客様のご負担となります。</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:border-b border-theme-gold/20 md:pb-6">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">お支払い方法</h2>
                            <p className="md:w-2/3">各種クレジットカード決済、現金</p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <h2 className="text-theme-gold font-bold mb-2 md:mb-0 md:w-1/3 shrink-0">キャンセル・返金について</h2>
                            <p className="md:w-2/3">サービスの特性上、原則としてお申し込み（施術開始）後のキャンセル・返金はお受けしておりません。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
