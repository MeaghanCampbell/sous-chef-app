'use client'

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Accordion from '../../components/accordion'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import '../../axiosConfig'

export default function Dashboard() {

    const router = useRouter();

    const [accordionData, setAccordionData] = React.useState([
        { title: 'Appetizers & Snacks', recipes: [] },
        { title: 'Drinks', recipes: [] },
        { title: 'Salad', recipes: [] },
        { title: 'Pizza & Pasta', recipes: [] },
        { title: 'Chicken & Poultry', recipes: [] },
        { title: 'Beef & Red Meat', recipes: [] },
        { title: 'Seafood', recipes: [] },
        { title: 'Dressing & Sauce', recipes: [] },
        { title: 'Side Dishes', recipes: [] },
        { title: 'Dessert', recipes: [] },
        { title: 'Other', recipes: [] }
    ]);

    const logout = () => {
        Cookies.remove('token'); // Remove the token from cookies
        router.push('/'); // Redirect to login page
    };

    useEffect(() => {
        const token = Cookies.get('token');
        axios.get('/recipes', {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            const newAccordionData = [...accordionData];
            response.data.forEach(recipe => {
                const category = newAccordionData.find(cat => cat.title === recipe.category);
                if (category) {
                    category.recipes.push({
                        title: recipe.title,
                        link: `/dashboard/recipe/${recipe.id}`
                    });
                }
            });
            setAccordionData(newAccordionData);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <section>
            <div className="flex flex-col items-start space-y-1 md:flex-row md:space-y-0 md:space-x-5 md:items-center cerulean font-semibold pb-2">
                <h1 className="rich-black font-semibold text-2xl">My Cookbook</h1>
                <a href="/dashboard/add-recipe">Add a Recipe +</a>
                <button onClick={logout}>Log out</button>
            </div>
            <Accordion data={accordionData} />
        </section>
    )
}
