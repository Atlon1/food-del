import React from 'react';

import Pizza from './components/Pizza';
import Banner from './components/Banner';

import capricciossa from '../app/assets/capricciosa.webp';


export type Topping = {
    image: string;
    name: string;
    price: number;
}

export type Pizza = {
    id: number;
    name: string;
    description: string;
    image: any;
    priceSm: number;
    priceMd: number;
    priceLg: number;
    toppings: Topping[];
}


const pizzas: Pizza[] = [
    {
        id: 1,
        name: 'capricciosa',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: capricciossa,
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 2,
        name: 'cheesy',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/cheesy.webp',
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 3,
        name: 'hawaii',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/hawaii.webp',
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 4,
        name: 'italian',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/italian.webp',
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 5,
        name: 'margherita',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/margherita.webp',
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 6,
        name: 'pepperoni',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/pepperoni.webp',
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 7,
        name: 'quattro formaggi',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/quattro-formaggi.webp',
        priceSm: 12.99,
        priceMd: 13.99,
        priceLg: 14.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 8,
        name: 'quattro stagioni',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/quattro-stagioni.webp',
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 9,
        name: 'tonno',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/tonno.webp',
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
    {
        id: 10,
        name: 'vegetarian',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
        image: '/vegetarian.webp',
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: '/cherry.png',
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: '/corn.png',
                name: 'corn',
                price: 2,
            },
            {
                image: '/fresh-tomatoes.png',
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: '/jalapeno.png',
                name: 'jalapeno',
                price: 2,
            },
            {
                image: '/parmesan.png',
                name: 'parmesan',
                price: 2,
            },
        ],
    },
];

const Home = () => {

    return (
        <section>
            <Banner/>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12'>
                    {pizzas.map((pizza) => (
                        <Pizza key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;

