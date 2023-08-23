'use client'
import React, {useState, FC} from "react";

import Image from 'next/image'

import Modal from 'react-modal'

import PizzaDetails from "@/app/components/PizzaDetails";

import {IoCloseOutline} from 'react-icons/io5'

Modal.setAppElement('body')

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
}

interface pizzaProps {
    pizza: any
}

const Pizza: FC<pizzaProps> = ({pizza}) => {

    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }


    return (
        <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
            <Image
                className='lg:group-hover:translate-y-3 transition-all duration-300 mb-3 cursor-pointer'
                width={270}
                height={270}
                src={pizza.image}
                alt='pizza'
                priority={true}/>
            <div>
                <div className='text-xl font-bold mb-4 capitalize cursor-pointer'>
                    {pizza.name}
                </div>
            </div>
            <div className='text-sm font-medium min-h-[60px] mb-6'>
                {pizza.description}
            </div>
            <div className='mb-6 flex items-center justify-between'>
                <div className='hidden lg:flex text-xl font-semibold'>
                    starts at {pizza.priceSm}
                </div>
                <button onClick={openModal} className='hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm'>
                    Choose
                </button>
                <button onClick={openModal} className='btn btn-sm gradient text-sm lg:hidden px-3'>starts at {pizza.priceSm}</button>
            </div>
            {modal && (<Modal
                isOpen={modal}
                style={modalStyles}
                onRequestClose={closeModal}
                contentLabel='Pizza Modal'
            >
                modal
            </Modal>)}
        </div>
    )
        ;
}
export default Pizza;
