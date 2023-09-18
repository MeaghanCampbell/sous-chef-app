'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function MyGroceryList() {

    const [recipes, setRecipes] = useState([]);

    const apiBaseURL = process.env.NODE_ENV === 'production' ? 'https://souschefapp-backend-560b3e209edf.herokuapp.com' : 'http://localhost:3001';

    const api = axios.create({
        baseURL: apiBaseURL,
    });

    useEffect(() => {
        const token = Cookies.get('token');

        api.get('/my-week', {
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

    return (
        <>
            <section>
                <fieldset>
                    <legend className="rich-black font-semibold text-2xl">My Grocery List</legend>
                    <div id="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 baby-powder-bg shadow-md rounded-xl p-4 rich-black">
                        {recipes.reduce((uniqueIngredients, recipe) => {
                            recipe.Ingredients.forEach(ingredient => {
                                const ingredientName = ingredient.name.toLowerCase();
                                if (!uniqueIngredients.includes(ingredientName)) {
                                    uniqueIngredients.push(ingredientName);
                                }
                            });
                            return uniqueIngredients;
                        }, []).map((ingredient, ingredientIndex) => (
                            <div key={`ingredient-${ingredientIndex}`} className="flex items-center">
                                <input name="grocery-item" className="grocery-checkbox" type="checkbox" />
                                <span className="ml-2">{ingredient}</span>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </section>
        </>
    )
}