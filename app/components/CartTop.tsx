import React, {useContext} from "react";

import {IoCloseOutline} from "react-icons/io5";
import {CartContext} from "@/app/context/CartContext";

const CartTop = () => {
    const {setIsOpen} = useContext<any>(CartContext)

    return (
        <div>
            <div onClick={()=> setIsOpen(false)}
            className='cursor-pointer group'
            >
                <IoCloseOutline className='text-3xl group-hover:scale-110 duration-300 transition-all '/>
            </div>
        </div>
    )
};

export default CartTop;
