import React from 'react';
import { cn } from '../utils/cn';

interface CTAButtonProps {
    href: string;
    text: string;
    subText?: string;
    className?: string;
    isSticky?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, text, subText, className, isSticky }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative flex flex-col items-center justify-center overflow-hidden rounded-sm transition-all duration-500",
                "border border-theme-gold/50 shadow-[0_0_20px_rgba(197,160,89,0.15)]",
                "hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] hover:border-theme-gold hover:scale-[1.02]",
                isSticky ? "w-full py-4 bg-theme-blood/90 backdrop-blur-md" : "w-full sm:w-[450px] py-8",
                className
            )}
        >
            {/* Background Gradient & Hover Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-theme-blood via-theme-ruby to-theme-blood z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {subText && (
                    <span className="text-theme-gold text-xs md:text-sm font-bold tracking-widest mb-2 uppercase drop-shadow-md">
                        {subText}
                    </span>
                )}
                <span className="text-white font-serif text-lg md:text-2xl font-bold tracking-widest drop-shadow-lg group-hover:text-theme-offWhite transition-colors">
                    {text}
                </span>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-theme-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-theme-gold"></div>
        </a>
    );
};
