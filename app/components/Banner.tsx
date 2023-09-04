'use client'

import React from "react";

import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'
import Image from "next/image";


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
                    <div>
                        <div>
                            <Image
                                src={'/pizza-banner.png'}
                                alt="banner"
                                width={550}
                                height={558}
                                priority={true}
                            />
                        </div>
                    </div>
                    <MouseParallaxChild
                    factorX={0.2}
                    factorY={0.3}
                    className='absolute top-6 left-4 hidden xl:flex'
                    >
                        <Image
                            src={`/chilli-1.png`}
                            width={160}
                            height={84}
                            alt='chilli'
                            priority={true}/>
                    </MouseParallaxChild>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
    </section>;
};

export default Banner;
