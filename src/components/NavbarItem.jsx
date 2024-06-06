'use client'

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavbarItemContent = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  
    return (
        <Link className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500':''} `} href={`/?genre=${param}`}>
            {title}
        </Link>
    );
};

const NavbarItem = ({ title, param }) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <NavbarItemContent title={title} param={param} />
            </Suspense>
        </div>
    );
};

export default NavbarItem;
