import React, { FC, useState, useEffect } from "react";
import Image from "next/image";

import SizeSelection from "@/app/components/SizeSelection";
import CrustSelection from "@/app/components/CrustSelection";
import Topping from "@/app/components/Topping";

interface pizzaType {
    pizza: any;
}

const PizzaDetails: FC<pizzaType> = ({ pizza }) => {
    const [size, setSize] = useState('small');
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



    return <div>PizzaDetails</div>;
};

export default PizzaDetails;

