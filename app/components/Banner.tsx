'use client'

import React from "react";

import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse'


const Banner = () => {
    return <section className='bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16'>
        <div className='container mx-auto min-h-[768px] flex items-center justify-center'>
            <MouseParallaxContainer
                globalFactorX={0.4}
                globalFactorY={0.3}
                resetOnLeave
                className='w-full flex flex-col lg:flex-row justify-between items-center'
            >
                <MouseParallaxChild>
                    <div>
                        <div>Best pizza in town</div>
                        <h1 className='text-6xl lg:text-8xl font-bangers text-white'>Pizza perfection <br/> in every
                            bite</h1>
                    </div>
                </MouseParallaxChild>
                <MouseParallaxChild>image</MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
    </section>;
};

export default Banner;
