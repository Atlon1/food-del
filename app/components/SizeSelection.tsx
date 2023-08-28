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
                <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
                    <Image
                        className={`${size === 'small' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'}`}
                        src={pizza.image} width={60} height={60} alt='image'/>
                    <input type='radio'
                           name='size'
                           value='small'
                           checked={size === 'small'}
                           onChange={(e) => setSize(e.target.value)}
                           className='appearance-none'
                    />
                    small
                </label>
                <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
                    <Image
                        className={`${size === 'medium' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'}`}
                        src={pizza.image} width={70} height={70} alt='image'/>
                    <input type='radio'
                           name='size'
                           value='medium'
                           checked={size === 'medium'}
                           onChange={(e) => setSize(e.target.value)}
                           className='appearance-none'
                    />
                    medium
                </label>
                <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
                    <Image
                        className={`${size === 'large' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'}`}
                        src={pizza.image} width={80} height={80} alt='image'/>
                    <input type='radio'
                           name='size'
                           value='large'
                           checked={size === 'large'}
                           onChange={(e) => setSize(e.target.value)}
                           className='appearance-none'
                    />
                    Large
                </label>
            </div>
        </div>);
};

export default SizeSelection;
