
interface addToCartProps {
    id:number,
    image:string,
    name:string,
    price:number,
    additionalTopping:string,
    size:string,
    crust:string
}

export type CartContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: addToCartProps[]
    cart: any
}

