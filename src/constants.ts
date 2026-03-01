const base = import.meta.env.BASE_URL;

export const IMAGES = {
    // ローカルからインポートした日本人女性画像（最優先）
    AGITATION_1: `${base}media/76857_0.jpg`,
    AGITATION_2: `${base}media/76858_0.jpg`,

    // 以下は指定外の箇所のフォールバック用として使用する、日本人女性（アジア系高級感・美容）のフリー素材
    // SOLUTION: セラピストによる繊細な施術の様子
    SOLUTION_1: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=1200",
    // SOLUTION: 上質なサロン体験
    SOLUTION_2: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",

    // SECRET (旧サラダ画像から変更): 銀座のプロフェッショナルなケアを連想させるスキンケアシーン
    SECRET: "https://images.unsplash.com/photo-1506452819137-0422416856b8?auto=format&fit=crop&q=80&w=1200",

    // EVIDENCE: 実績・Before/Afterの証言用としてエレガントな女性
    EVIDENCE_1: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop',
    EVIDENCE_2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',

    // EXPERT: オーナー・プロフェッショナルとしての堂々としたポートレート（日本人/アジア人女性）
    EVIDENCE_3: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800', // Expert Interview portrait
};

export const VIDEOS = {
    // ローカル動画素材
    HERO_BG: `${base}media/動画c 260116.mp4`,
    EVIDENCE_BG_1: `${base}media/動画260116.mp4`,
    EVIDENCE_BG_2: `${base}media/動画b 260116.mp4`,
};

export const LINKS = {
    LINE: "https://drive.google.com/file/d/16-c4jAIqPUvDV0XX97SzzHE7uaO_MTVg/view?usp=sharing",
    LAW: "/law",
    PRIVACY: "/privacy",
};
