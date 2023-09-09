import React, {FC} from "react";

import Image from "next/image";

import {BiPlus, BiMinus} from 'react-icons/bi'
import {IoCloseOutline} from 'react-icons/io5'

interface Topping {
    name: string;
}

interface Pizza {
    id: number;
    image: string;
    name: string;
    crust: string;
    size: string;
    price: number;
    amount: number;
    additionalTopping: Topping[];
}

interface CartItemProps {
    pizza: Pizza;
}

const CartItem: FC<CartItemProps> = ({pizza}) => {

    const calculateTotal = () => {
        return (pizza.amount * pizza.price).toFixed(2)
    }

    return (
        <div className='select-none'>
            <div className='flex gap-x-4 mb-2 '>
                <div className='flex justify-between items-center '>
                    <Image src={pizza.image} alt={pizza.name} width={90} height={90} priority={true}/>
                </div>
                <div className='flex-1 flex flex-col gap-y-1'>
                    <div className='text-lg capitalize font-bold'>{pizza.name}</div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='capitalize font-medium text-[15px]'>{pizza.crust} Crust</div>
                        <div className='capitalize mb-2 font-medium text-[15px]'>{pizza.size} size</div>
                        <div className='flex items-center gap-x-1'>
                            <div
                                className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                                <BiMinus/>
                            </div>
                            <div
                                className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm'>1
                            </div>
                            <div
                                className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                                <BiPlus/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div
                        className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
                        <IoCloseOutline/>
                    </div>
                    <div>
                        <span className='text-[17px] font-medium font-robotoCondensed'>${calculateTotal()}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center gap-3 p-6 border-b border-black/10'>
                <div className='font-semibold'>
                    Toppings: {pizza.additionalTopping.length === 0 && 'None'}
                </div>
                {
                    pizza.additionalTopping.map((topping: any, index: number) => {
                        return <div
                            className='capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none'
                            key={index}>
                            {topping.name}
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default CartItem;
