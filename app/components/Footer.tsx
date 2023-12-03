import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import maciej from '../assets/Maciej_logo.png'
import logo from '../assets/logo.svg'


const Footer = () => {
    return (
        <footer className='bg-primary bg-pattern py-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center gap-y-6'>
                    <Link href={'#'}>
                        <img src={logo.src} className='w-[180px]' alt='logo'/>
                    </Link>
                    <div className='flex gap-x-6 text-white '>
                        <Link href={'#'}>
                            <FaYoutube/>
                        </Link>
                        <Link href={'#'}>
                            <FaFacebook/>
                        </Link>
                        <Link href={'#'}>
                            <FaInstagram/>
                        </Link>
                        <Link href={'#'}>
                            <FaPinterest/>
                        </Link>
                    </div>
                    <img className='w-[180px]' src={maciej.src} alt='logo'/>
                    <div className='text-white font-medium'>
                        Copyright &copy; Maciej Szajstek 2023. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
