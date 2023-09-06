'use client'
import React, {createContext, FC, useState} from "react";
import {CartContextType} from "@/app/@types/context";


interface ChildrenProps {
    children: React.ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider: FC<ChildrenProps> = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        // @ts-ignore
        <CartContext.Provider
            value={{isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider