
import React, {FC} from "react";

import Image from "next/image";

import {BiPlus, BiMinus} from 'react-icons/bi'
import {IoCloseOutline} from 'react-icons/io5'

interface pizzaProps {
    pizza: any
}
const CartItem: FC<pizzaProps> = ({pizza}) => {
    return (
        <div>
            <div>
                <div>
                    <Image src={pizza.image} alt={pizza.name} width={90} height={90} priority={true}/>
                </div>
                <div>
                    <div>{pizza.name}</div>
                    <div>
                        <div>{pizza.crust} Crust</div>
                        <div>{pizza.size} size</div>
                        <div className='flex items-center gap-x-1'>
                            <div className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                                <BiMinus/>
                            </div>
                            <div className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm'>1</div>
                            <div className='w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full'>
                                <BiPlus/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
                        <IoCloseOutline/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default CartItem;
