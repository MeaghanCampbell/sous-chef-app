
'use client'

import Accordion from '../components/accordion'

export default function Dashboard() {
    const accordionData = [
        { title: 'Appetizers & Snacks', recipes: ['Recipe 1', 'Recipe 2'] },
        { title: 'Drinks', recipes: ['Recipe 1'] },
        { title: 'Chicken & Poultry', recipes: [] },
        { title: 'Beef & Other Meat', recipes: [] },
        { title: 'Seafood', recipes: [] },
        { title: 'Side Dishes', recipes: [] },
        { title: 'Dessert', recipes: [] },
        { title: 'Other', recipes: [] }
    ];

    return (
        <section>
            <div className="flex space-x-4 items-center cerulean font-semibold pb-2">
                <h1 className="rich-black font-semibold text-2xl">My Cookbook</h1>
                <a href="/add-recipe">Add a Recipe +</a>
            </div>
            <Accordion data={accordionData} />
        </section>
    )
}
