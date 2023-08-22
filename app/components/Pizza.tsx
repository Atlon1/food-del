'use client'
import React, {useState, FC} from "react";

import Image from 'next/image'

import Modal from 'react-modal'

import PizzaDetails from "@/app/components/PizzaDetails";

import {IoCloseOutline} from 'react-icons/io5'

interface pizzaProps {
    pizza: any
}

const Pizza: FC<pizzaProps> = ({pizza}) => {


    return (
        <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
            <Image width={270} height={270} src={pizza.image} alt='pizza' priority={true}/>
            <div>
                <div className='text-xl font-bold mb-4 capitalize cursor-pointer'>
                    {pizza.name}
                </div>
            </div>
          <div className='text-sm font-medium min-h-[60px] mb-6 bg-pink-200'>
              {pizza.description}
          </div>
            <div>
                <div className='hidden lg:flex text-xl font-semibold'>starts ad {pizza.priceSm}</div>
            </div>
            <button className='hidden lg:flex'>Choose </button>
        </div>
    )
};

export default Pizza;
