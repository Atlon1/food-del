import React, {FC} from "react";
import Image from "next/image";

interface SizeselcetionProps {
    pizza: string
    size: any
    setSize: any
}

const SizeSelection: FC<SizeselcetionProps> = ({pizza, size, setSize}) => {


    return (
        <div className='bg-indigo-200'>
            <div>

            </div>
        </div>);
};

export default SizeSelection;
