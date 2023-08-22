'use client'
import React, {useState} from "react";

import Image from 'next/image'

import Modal from 'react-modal'

import PizzaDetails from "@/app/components/PizzaDetails";

import { IoCloseOutline } from 'react-icons/io5'

const Pizza = ({pizza}) => {
    console.log(pizza)
    return <div>
        <Image width={270} height={270} src={pizza.image} alt='pizza'/>
    </div>;
};

export default Pizza;
