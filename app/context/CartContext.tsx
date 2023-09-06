'use client'
import React, {createContext, FC, useState} from "react";
import {CartContextType} from "@/app/@types/context";
import {boolean} from "zod";

interface ChildrenProps {
    children: any
}

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider: FC<ChildrenProps> = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        // @ts-ignore
        <CartContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider