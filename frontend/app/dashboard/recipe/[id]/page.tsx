'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function RecipeOpen() {

    const params = useParams();
    const router = useRouter();
    const [recipe, setRecipe] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    const [inProduction, setInProduction] = useState('')

    let recipeId = params.id
    const token = Cookies.get('token');

    useEffect(() => {

        if (recipeId) { // Make sure we have an id before fetching
            axios.get(`/recipes/${recipeId}`, {
                headers: {
                    'Authorization': token
                }
            })
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.log(error)
            });
        }
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }


    const deleteRecipe = () => {

        axios.delete(`/recipes/${recipeId}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            router.push('/dashboard');
        })
        .catch(error => {
            console.error(error);
        });
    }

    const updateRecipe = () => {
        setInProduction('Update Recipe is still in development. Check back later to use this feature.')
        setTimeout(() => {
            setInProduction('')
        }, 6000);
    }

    const addRecipeToMyWeek = () => {

        axios.post(`/my-week/add`, { recipeId: recipeId }, {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            // console.log(response.data);
            router.push('/dashboard/my-week');
        })
        .catch(error => {
            setErrorMessage(error.response.data.message);
        });
    }

    return (
        <section className="max-w-2xl lg:max-w-3xl mx-auto">
            <h1 className="rich-black font-semibold text-2xl pb-2">{recipe.title}</h1>
            <h2 className="mt-4 mb-2 font-semibold text-xl">Category</h2>
            <p>{recipe.category}</p>
            <h2 className="mt-4 mb-2 font-semibold text-xl">Ingredients</h2>
            {/* ingredients */}
            <ul className="list-disc ml-4">
                {recipe.Ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.quantity} {ingredient.name}</li>
                ))}
            </ul>
            <h2 className="mt-4 mb-2 font-semibold text-xl">Steps</h2>
            {/* steps */}
            <ul className="list-disc space-y-2 ml-4">
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <p className="mt-6 text-red-600">{errorMessage}</p>
            <div className="pt-6">
                <div>
                    <button onClick={addRecipeToMyWeek} className="font-semibold transition mb-3 btn">Add to My Week +</button>
                </div>
                <div className="pb-3">
                    <div className="text-red-600 max-w-xs pb-1">
                        {inProduction}
                    </div>
                    <button onClick={updateRecipe} className="blush font-semibold transition bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-xl mb-1">Update Recipe</button>
                </div>
                <div>
                    <button onClick={deleteRecipe} className="blush font-semibold transition bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl">Delete Recipe</button>
                </div>
            </div>
        </section>
    )
}