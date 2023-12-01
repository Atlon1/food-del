import React from 'react';

import Pizza from './components/Pizza';
import Banner from './components/Banner';

import capricciossa from '../app/assets/capricciosa.webp';
import cheesy from '../app/assets/cheesy.webp';
import hawaii from '../app/assets/hawaii.webp';
import italian from '../app/assets/italian.webp';
import margherita from '../app/assets/margherita.webp';
import pepperoni from '../app/assets/pepperoni.webp';
import quattroFormaggi from '../app/assets/quattro-formaggi.webp';
import quattroStagioni from '../app/assets/quattro-stagioni.webp';
import tonno from '../app/assets/tonno.webp';
import vegetarian from '../app/assets/vegetarian.webp'
import cherry from '../app/assets/cherry.png'
import corn from '../app/assets/corn.png'
import freshTomatoes from '../app/assets/fresh-tomatoes.png'
import jalpeno from '../app/assets/jalapeno.png'
import parmesan from '../app/assets/parmesan.png'


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
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: cheesy,
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: hawaii,
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: italian,
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: margherita,
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: pepperoni,
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: quattroFormaggi,
        priceSm: 12.99,
        priceMd: 13.99,
        priceLg: 14.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: quattroStagioni,
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: tonno,
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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
        image: vegetarian,
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: cherry,
                name: 'cherry tomatoes',
                price: 2,
            },
            {
                image: corn,
                name: 'corn',
                price: 2,
            },
            {
                image: freshTomatoes,
                name: 'fresh tomatoes',
                price: 2,
            },
            {
                image: jalpeno,
                name: 'jalapeno',
                price: 2,
            },
            {
                image: parmesan,
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

