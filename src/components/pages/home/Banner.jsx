import React from 'react';
import bannerBg from '../../../assets/banner-bg.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerBg})`,  }} className="min-h-screen bg-cover bg-center w-full"
>
           <h1 class="z-10 md:text-7xl md:ml-8 sm:text-5xl text-4xl text-white leading-snug font-extrabold px-4 sm:w-full md:w-2xl">Free PDFs for SAT, IELTS, and <span class="bg-amber-400 text-black rounded-xl px-2 inline-block">Study Abroad</span> Preparation!</h1> 
        </div>
    );
};

export default Banner;