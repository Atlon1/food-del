import React, {FC} from "react";
import Image from "next/image";

interface SizeselcetionProps {
    pizza: any
    size: any
    setSize: any
}

const SizeSelection: FC<SizeselcetionProps> = ({pizza, size, setSize}) => {


    return (
        <div className=''>
            <div>
                <label className='bg-yellow-200'>
                    <Image
                        className={`${size === 'small' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'}`}
                        src={pizza.image} width={60} height={60} alt='image'/>
                    <input type='radio'
                           name='size'
                           value='small'
                           checked={size === 'small'}
                           onChange={(e)=> setSize(e.target.value)}
                           className='appearance-none'
                    />
                    small
                </label>
            </div>
        </div>);
};

export default SizeSelection;
