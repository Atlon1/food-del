import React, {useContext} from "react";

import {IoCloseOutline} from 'react-icons/io5'

import CheckoutDetails from "@/app/components/CheckoutDetails";

import Modal from "react-modal";

import {CartContext} from "@/app/context/CartContext";


const CartBottom = () => {


    const {setIsOpen, cart} = useContext<any>(CartContext)

    return <>{cart.length >= 1 ? <div>
            <div className='px-6 py-3 lg:py-6 mt-auto text-lg font-semibold font-robotoCondensed'>
                <div>Total:</div>
                <div>$320</div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <button className='btn btn-lg gradient font-semibold flex justify-center'>
                    Checkout
                </button>
            </div>
        </div> :
        <div className='absolute top-0 w-full h-full flex justify-center items-center -z-10'>
            <div>Your cart is empty</div>
        </div>}

    </>
};

export default CartBottom;
