import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <main className='mt-10 mb-20 container mx-auto'>
            <div className='bg-[#E7F4FB] rounded  p-7 items-center flex justify-between'>
            <Link href="/">
            <nav className=''>
            <h1 className='text-5xl font-bold'> Interactive</h1>
             <h4 className='text-3xl font bold'>Geometry Genius</h4>
            </nav>
            </Link>
            <Link href="/blog"><button className='bg-[#1090D8] text-white text-center text-xl font-bold px-14 py-5 rounded-lg'>Blog</button></Link>
            
        </div>
        </main>
       
    );
};

export default Nav;