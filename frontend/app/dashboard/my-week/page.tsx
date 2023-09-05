'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function MyWeek() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const token = Cookies.get('token');

        axios.get('http://localhost:3001/my-week', {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            setRecipes(response.data.recipes);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const removeRecipe = (id) => {
        const token = Cookies.get('token');

        axios.delete(`http://localhost:3001/my-week/remove/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            // Remove the recipe from the state
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    return (
        <div className="mx-auto">

            <section className="mb-6">
                <h1 className="rich-black font-semibold text-2xl">My Week</h1>
                {recipes.length > 0 ? (
                    <p className="mb-3"><strong>Yum!</strong> Looks like you have a lot of delicious meals planned for this week!</p>
                ) : (
                    <p className="mb-3">Open your recipes from the dashboard and click "add to my week" to plan your week of meals.</p>
                )}
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipes.map((recipe) => (
                        <div className="flex items-center" key={recipe.id}>
                            <Link href={`/dashboard/recipe/${recipe.id}`}>
                                <button className="btn transition font-semibold text-xl">{recipe.title}</button>
                            </Link>
                            <button className="ml-1 font-bold text-red-500 hover:text-red-400 transition" onClick={() => removeRecipe(recipe.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.743,20h-2.862l-1.899-3.167 H14.85L12.938,20h-2.703l3.07-5.045L10.242,10h2.966l1.795,3.312h0.132L16.943,10h2.827l-3.195,4.983L19.743,20z"/></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}