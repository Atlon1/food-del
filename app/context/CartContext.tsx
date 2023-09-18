'use client'
import React, {createContext, useState, ReactNode, useEffect} from "react";
import {CartContextType} from "@/app/@types/context";

type ChildrenProps ={
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({children} : ChildrenProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<any[]>([]);
    const [cartTotal, setCartTotal] = useState(0)
    const [itemAmount, setItemAmount] = useState(0)

    useEffect(()=> {
        const amount = cart.reduce((a: number, b: any)=> {
            return a + b.amount
        }, 0)
        setItemAmount(amount)
    },[cart])

    useEffect(()=>{
        const price = cart.reduce((a:number, b: any)=>{
            return a + Number(b.price) * b.amount
        },0)
        setCartTotal(price)
    },[cart])


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

        const cartItemIndex = cart.findIndex((item: any) => (
            item.id === id &&
            item.price === price &&
            item.size === size &&
            JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) &&
            item.crust === crust
        ));

        if (cartItemIndex === -1) {
            setCart([...cart, newItem]);
        } else {
            const newCart = [...cart]
            newCart[cartItemIndex].amount += 1
            setCart(newCart)
        }

        setIsOpen(true)
    };

    const removeItem = (id: number, price: number, crust: string) => {
        const itemIndex = cart.findIndex((item: any) => (
            item.id === id &&
            item.price === price &&
            item.crust === crust
        ))
        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart.splice(itemIndex, 1)
            setCart(newCart)
        }
    }

    const increaseAmount = (id: number, price: number) => {
        const itemIndex = cart.findIndex((item) => (
            item.id === id &&
            item.price === price
        ))

        if (itemIndex !== -1){
            const newCart = [...cart]
            newCart[itemIndex].amount += 1
            setCart(newCart)
        }
    }

    const decreaseAmount = (id: number, price: number) => {
        const itemIndex = cart.findIndex((item) => (
            item.id === id &&
            item.price === price
        ))

        if (itemIndex !== -1){
            const newCart = [...cart]
            if (newCart[itemIndex].amount > 1){
                newCart[itemIndex].amount -= 1
            }
            setCart(newCart)
        }
    }


    return (
        // @ts-ignore
        <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, setCart, removeItem, increaseAmount, decreaseAmount, itemAmount, cartTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
