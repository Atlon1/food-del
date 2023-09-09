'use client'

import {useContext} from "react";
import {CartContext} from "@/app/context/CartContext";
import CartTop from "@/app/components/CartTop";
import CartBottom from "@/app/components/CartBottom";
import CartItem from "@/app/components/CartItem";


const CartMobile = () => {


    const {isOpen, cart} = useContext<any>(CartContext)

    return <div
        className={`${isOpen ? 'bottom-0' : '-bottom-full'} bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}>
        <CartTop/>
        <div>
            {cart?.map((pizza: any, index: number) => {
                return <CartItem key={index}/>
            })}
        </div>
        <CartBottom/>
    </div>;
};

export default CartMobile;
