import React from 'react';
import bannerBg from '../../../assets/banner-bg.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})`, }} className="min-h-screen bg-cover bg-center w-full">

            <h1 className="z-10 md:text-7xl md:ml-8 sm:text-5xl text-4xl text-white leading-snug font-extrabold px-4 sm:w-full md:w-2xl ">PDFs from curriculam and other to <span className="bg-amber-400 text-black rounded-xl px-2 inline-block">Learn and Share</span> Knowledges</h1>

        </div>
    );
};

export default Banner;