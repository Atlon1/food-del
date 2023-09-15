import React, {FC, useContext} from "react";
import {CartContext} from "@/app/context/CartContext";


interface DetailsProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
}

const CheckoutDetails: FC<DetailsProps> = ({setModal}) => {

    const {cart, setCart, cartTotal} = useContext<any>(CartContext)

    return (
        <div>
            <div className='lg:gap-x-8 h-full lg:px-12 lg:py-8'>
                <h2 className='mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0'>Shipping
                    & Checkout</h2>
                <div className='h-[86vh] lg:h-[35vh] flex flex-col lg:flex-row lg:gap-x-4'>
                    <div
                        className='flex-1 h-full overflow-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0'>
                        <div className='flex flex-col gap-4 h-full'>
                            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                                <input type='text'
                                       className='w-full input'
                                       placeholder='First Name'
                                />
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Last Name'
                                />
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Phone'
                                />
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Email Address'
                                />
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Street Name'
                                />
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Street No.'
                                />
                            </div>
                            <div className=' flex justify-between gap-x-4'>
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Block'
                                />
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Floor'
                                />
                                <input type='text'
                                       className='w-full input'
                                       placeholder='Ap. No.'
                                />
                            </div>
                            <div className='flex-1 h-full'>
                                <textarea
                                    className='textarea w-full h-full'
                                    placeholder='Mentions (optional)'
                                ></textarea>
                            </div>
                        </div>
                    </div>


                    <div
                        className='bg-yellow-400 flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0'>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default CheckoutDetails;
