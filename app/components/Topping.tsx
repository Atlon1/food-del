import React, {useState, useEffect, FC} from "react";
import Image from "next/image";
import {IoMdCheckmark} from 'react-icons/io'


interface toppingProps {
    topping: any
    additionalTopping: any
    setAdditionalTopping: any
}


const Topping: FC<toppingProps> = ({topping, additionalTopping, setAdditionalTopping}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }

    const handleTopping = () => {
        if (isChecked){
            const newTopping = new Set([...additionalTopping, {...topping}])
            setAdditionalTopping(Array.from(newTopping))

        } else {
            const newTopping = additionalTopping.filter((toppingObj: any) => {
                return toppingObj.name !== topping.name
            })
            setAdditionalTopping(newTopping)
        }
    }

    useEffect(() => {
        handleTopping()
    }, [isChecked]);


    return (
        <div
            className={`${isChecked && 'border-orange'} w-full max-w-[110px] h=[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}>
            <Image src={topping.image}
                   width={70}
                   height={70}
                   alt='image'
                   className='mb-2'/>
            <div className='text-sm capitalize text-center font-medium'>
                {topping.name}
            </div>
            <input
                className='absolute w-full h-full opacity-0 cursor-pointer'
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckBox}
            />
            <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
                <IoMdCheckmark className='text-xl text-orange'/>
            </div>
        </div>
    );
};

export default Topping;
