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
        <div className={`${isChecked && 'border-orange'} w-full max-w-[110px]h=[140px] p-1`}>
            <Image src={topping.image} width={70} height={70}/>

        </div>
    );
};

export default Topping;
