'use client'
import React, {createContext, FC} from "react";
import {CartContextType} from "@/app/@types/context";

interface ChildrenProps {
    children: any
}

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider: FC<ChildrenProps> = ({children}) => {

    return (
        // @ts-ignore
        <CartContext.Provider value={'cart context'}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider