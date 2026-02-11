'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroButton() {
    return (
        <Link href="/contact">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Me Contacter
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>
        </Link>
    );
}