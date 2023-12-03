'use client'

import Link from 'next/link'
import {useContext} from "react";
import {CartContext} from "@/app/context/CartContext";
import logo from '../assets/logo.svg'
import phone from '../assets/phone.svg'
import bag from '../assets/bag.svg'

const Nav = () => {

    const {isOpen, setIsOpen, itemAmount} = useContext<any>(CartContext)

    return (
        <nav className='absolute w-full py-8'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center'>
                <Link href='#' className='max-w-[160px] lg:max-w-max'>
                    <img className='w-[180px]' src={logo.src} alt='logo'/>
                </Link>
                <div className='flex gap-x-8 items-center'>
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-[42px]' src={phone.src} alt='phone'/>
                        <div className='text-white'>
                            <div className='font-robotoCondensed uppercase font-medium leading-none text-sm'>24/7 Pizza delivery service</div>
                            <div className='text-3xl font-robotoCondensed  font-extrabold leading-none tracking-wide'>920 234 5768</div>
                        </div>
                    </div>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className='relative cursor-pointer hidden lg:flex'>
                        <img className='w-[38px]' src={bag.src} alt='bag'/>
                        <div className='bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1'>{itemAmount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
