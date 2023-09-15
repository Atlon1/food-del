'use client'

import React, {useContext} from "react";

import CartItem from "@/app/components/CartItem";
import CartBottom from "@/app/components/CartBottom";
import CartTop from "@/app/components/CartTop";

import {CartContext} from "@/app/context/CartContext";



const CartDesktop = () => {
    const {isOpen, cart} = useContext<any>(CartContext)


    return (
        <div className={`${isOpen ? 'left-0' : '-left-full'} bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}>
            <CartTop/>
            <div className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 overflow-y-scroll scrollbar-thin ${cart.length >= 3 && 'scrollbar-track-black/10 scrollbar-thumb-secondary'}`}>
                {cart.map((pizza: any, index : number)=>{
                    return <CartItem pizza={pizza} key={index}/>
                })}
            </div>
            <CartBottom/>
        </div>
    )
};

export default CartDesktop;
