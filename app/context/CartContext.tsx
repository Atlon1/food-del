'use client'
import React, { createContext, FC, useState, ReactNode } from "react";
import { CartContextType } from "@/app/@types/context";

interface ChildrenProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<ChildrenProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (
        id: number,
        image: string,
        name: string,
        price: any,
        additionalTopping: any,
        size: string,
        crust: string
    ) => {
        additionalTopping.sort((a: any, b: any) => a.name.localeCompare(b.name));

        const newItem = {
            id,
            image,
            name,
            price,
            additionalTopping,
            size,
            crust,
            amount: 1,
        };

        setCart([...cart, newItem]);
    };


    return (
        // @ts-ignore
        <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
