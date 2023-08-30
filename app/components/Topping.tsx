import React, {useState, useEffect, FC} from "react";
import Image from "next/image";
import {IoMdCheckmark} from 'react-icons/io'

interface toppingProps {
    topping: any
    additionalTopping: object
    setAdditionalTopping: any
}


const Topping: FC<toppingProps> = ({topping, additionalTopping, setAdditionalTopping}) => {

    const [isChecked, setIsChecked] = useState(false)


    return (
        <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h=[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}>
            <Image src={topping.image}
                   width={70}
                   height={70}
                   alt='image'
                   className='mb-2'/>
            <div className='text-sm capitalize text-center font-medium'>
                {topping.name}
            </div>
            <input type='checkbox'
            checked={isChecked}
            />
            <div className={`${isChecked ? 'opacity-100': 'opacity-0'}`}>
                <IoMdCheckmark className='text-xl text-orange'/>
            </div>
        </div>
    );
};

export default Topping;
