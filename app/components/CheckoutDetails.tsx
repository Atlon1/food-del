import React, {FC, useContext} from "react";
import {TFunc} from "ts-interface-checker";
import Image from "next/image";
import {CartContext} from "@/app/context/CartContext";


interface DetailsProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
}
const CheckoutDetails: FC<DetailsProps> = ({setModal}) => {

    const {cart, setCart, cartTotal } = useContext<any>(CartContext)

    return (
        <div>

        </div>
    )
};

export default CheckoutDetails;
