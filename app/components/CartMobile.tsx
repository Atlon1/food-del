'use client'

import {useContext} from "react";
import {CartContext} from "@/app/context/CartContext";
import CartTop from "@/app/components/CartTop";
import CartBottom from "@/app/components/CartBottom";
import CartItem from "@/app/components/CartItem";


const CartMobile = () => {


    const {isOpen, cart} = useContext<any>(CartContext)

    return <div
        className={`${isOpen ? 'bottom-0' : '-bottom-full'} bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 flex flex-col lg:hidden`}>
        <CartTop/>
        <div
            className={`px-4 flex flex-col gap-y-4 py-2 mr-3 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${cart.length >= 3 ? 'scrollbar-track-black/10' : 'scrollbar-track-transparent'}`}>
            {cart?.map((pizza?: any, index?: number) => {
                return <CartItem pizza={pizza} key={index}/>
            })}
        </div>
        <CartBottom/>
    </div>;
};

export default CartMobile;
