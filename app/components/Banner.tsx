'use client'

import React from "react";
import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'
import banner from '../assets/pizza-banner.png'
import chilli1 from '../assets/chilli-1.png'
import chilli2 from '../assets/chilli-2.png'
import garlic1 from '../assets/garlic-1.png'
import garlic2 from '../assets/garlic-2.png'
import garlic3 from '../assets/garlic-3.png'
import leaves1 from '../assets/leaves.png'


const Banner = () => {
    return <section className='bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16'>
        <div className='container mx-auto min-h-[768px] flex items-center justify-center'>
            <MouseParallaxContainer
                globalFactorX={0.4}
                globalFactorY={0.3}
                resetOnLeave
                className='w-full flex flex-col lg:flex-row justify-between items-center'
            >
                <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.2}
                >
                    <div
                        className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white'>
                        <div className='flex-1'>
                            <div className='font-bangers text-[32px] text-white uppercase tracking-[0.03em]'>
                                Best pizza in town
                            </div>
                            <h1 className='text-6xl lg:text-8xl font-bangers drop-shadow-mf'>
                                Pizza perfection <br/> in every bite
                            </h1>
                        </div>
                    </div>
                </MouseParallaxChild>
                <MouseParallaxChild
                    factorX={0.2}
                    factorY={0.3}
                    className='relative'
                >
                    <div className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6'>
                        <div className='flex-1 flex justify-end max-w-sm lg:max-w-max'>
                            <img className='w-[550] h-[558]' src={banner.src} alt='chilli'/>
                        </div>
                    </div>
                    <MouseParallaxChild
                        factorX={0.2}
                        factorY={0.3}
                        className='absolute top-6 left-4 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={chilli1.src} alt='chilli1'/>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.4}
                        factorY={0.4}
                        className='absolute top-16 -left-4 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={chilli2.src} alt='chilli2'/>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.6}
                        factorY={0.6}
                        className='absolute top-80 -left-24 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={garlic1.src} alt='garlic1'/>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.3}
                        factorY={0.6}
                        className='absolute top-[22rem] -left-8 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={garlic2.src} alt='garlic2'/>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.4}
                        factorY={1}
                        className='absolute top-96 -left-20 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={garlic3.src} alt='garlic3'/>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.2}
                        factorY={0.2}
                        className='absolute top-96 left-12 hidden xl:flex'
                    >
                        <img className='w-[160px] h-[84px]' src={leaves1.src} alt='leaves'/>
                    </MouseParallaxChild>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
    </section>;
};

export default Banner;
