import './globals.css'
import Nav from './components/Nav'
import CartMobileIcon from "@/app/components/CartMobileIcon";

import CartMobile from "@/app/components/CartMobile";
import CartProvider from "@/app/context/CartContext";
import type {Metadata} from 'next'

import {Bangers, Quicksand, Roboto_Condensed} from 'next/font/google'



const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand'
});

const bangers = Bangers({
    subsets: ['latin'],
    variable: '--font-bangers',
    weight: ['400']
});

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-robotoCondensed',
    weight: ['300', '400', '700'],
});


export const metadata: Metadata = {
    title: 'Food delivery',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <CartProvider>

            <html lang="en">
            <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable}
        font-quicksand
      `}>

            <Nav/>
            <CartMobileIcon/>
            <CartMobile/>
            {children}
            </body>
            </html>
        </CartProvider>
    )
}
