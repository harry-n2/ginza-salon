import React from 'react';
import { theme } from '../theme';

interface SectionHeaderProps {
    en: string;
    jp: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ en, jp }) => {
    return (
        <div className="relative mb-24 text-center">
            {/* Background massive text */}
            <h2 className={`${theme.typography.bgText} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 tracking-widest`}>
                {en}
            </h2>

            {/* Foreground Text */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <span className="text-theme-gold font-display text-sm md:text-base tracking-[0.3em] font-bold uppercase">
                    {en}
                </span>
                <h3 className="text-theme-offWhite font-serif text-2xl md:text-4xl tracking-widest font-medium">
                    {jp}
                </h3>
                {/* Decorative Line */}
                <div className="w-12 h-[1px] bg-theme-gold mt-4"></div>
            </div>
        </div>
    );
};
