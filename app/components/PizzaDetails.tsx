import React, {FC, useState, useEffect} from "react";
import Image from "next/image";

import SizeSelection from "@/app/components/SizeSelection";
import CrustSelection from "@/app/components/CrustSelection";
import Topping from "@/app/components/Topping";
import {set} from "zod";

interface pizzaType {
    pizza: any;
}

const PizzaDetails: FC<pizzaType> = ({pizza}) => {
    const [size, setSize] = useState('medium');
    const [crust, setCrust] = useState('traditional');
    const [additionalTopping, setAdditionalTopping] = useState([]);
    const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {

        if (size === 'small') {
            setPrice(parseFloat((pizza.priceSm + additionalToppingPrice).toFixed(2)));
        } else if (size === 'medium') {
            setPrice(parseFloat((pizza.priceMd + additionalToppingPrice).toFixed(2)));
        } else if (size === 'large') {
            setPrice(parseFloat((pizza.priceLg + additionalToppingPrice).toFixed(2)));
        }

    }, [size, additionalToppingPrice]);


    useEffect(() => {
        if (additionalTopping.length > 0) {
            const toppingPrice = additionalTopping.reduce((a, b) => {
                return a + b.price
            }, 0)
            setAdditionalToppingPrice(toppingPrice)
        } else {
            setAdditionalToppingPrice(0)
        }
    }, [additionalTopping]);


    return <div>
        <div>
            <div>
                <Image width={450} height={450} src={pizza.image} alt=''/>
            </div>
        </div>
        <div className='bg-pink-200 '>
            <div>
                <div>
                    <div className='font-semibold'>
                        <h2 className='capitalize text-3xl mb-1'>{pizza.name}</h2>
                        <div>
                            <span>{size === "small" ? '25 cm' :
                                size === "medium" ? "30 cm" :
                                    size === "large" ? "35 cm" :
                                        null}
                            </span>
                            <span>
                                , {crust} crust
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default PizzaDetails;

