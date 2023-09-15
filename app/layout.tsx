import React from "react";
import './globals.css'
import Nav from './components/Nav'
import CartMobileIcon from "@/app/components/CartMobileIcon";
import CartDesktop from "@/app/components/CartDesktop";
import CartMobile from "@/app/components/CartMobile"
import CartProvider from "@/app/context/CartContext";
import {Bangers, Quicksand, Roboto_Condensed} from 'next/font/google'
import Footer from "@/app/components/Footer";

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

type Children = {
    children: React.ReactNode
}


export default function RootLayout({children} : Children) {
    return (
        <CartProvider>
            <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable}
        font-quicksand
      `}>

            <Nav/>
            <CartMobileIcon/>
            <CartMobile/>
            {children}
            <CartDesktop/>
            <Footer/>
            </body>
            </html>
        </CartProvider>
    )
}
