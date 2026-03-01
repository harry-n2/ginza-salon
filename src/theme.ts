export const theme = {
    colors: {
        primary: 'bg-theme-burgundy',
        primaryText: 'text-theme-burgundy',
        secondary: 'bg-theme-gold',
        secondaryText: 'text-theme-gold',
        background: 'bg-theme-black',
        text: 'text-theme-offWhite',
        accentText: 'text-theme-ruby'
    },
    typography: {
        h1: 'font-display text-4xl md:text-6xl tracking-widest leading-relaxed',
        h2: 'font-serif text-2xl md:text-4xl tracking-widest leading-loose',
        h3: 'font-serif text-xl md:text-2xl tracking-widest leading-loose',
        body: 'font-serif text-base md:text-lg tracking-wider leading-loose text-theme-offWhite/80',
        vertical: 'style-vertical font-serif tracking-ultra leading-loose',
        bgText: 'font-display text-[8rem] md:text-[15rem] font-bold text-white/[0.03] select-none absolute'
    },
    layout: {
        section: 'relative py-24 md:py-40 px-6 md:px-12 overflow-hidden bg-theme-black',
        container: 'max-w-6xl mx-auto relative z-10',
        grid: 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'
    }
};
