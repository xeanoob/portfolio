'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-6">
            <h1 className="font-serif text-9xl text-black select-none">404</h1>
            <p className="text-2xl text-black/60 font-serif mb-8 mt-4">
                Oups ! Cette page s'est perdue dans le code.
            </p>
            <div className="w-px h-20 bg-black/10 mx-auto my-6"></div>
            <Link
                href="/"
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}
