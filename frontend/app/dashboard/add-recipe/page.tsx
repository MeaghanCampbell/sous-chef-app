'use client'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function addRecipe() {
    const [ingredients, setIngredients] = useState([{ quantity: '', name: '' }]);
    const [steps, setSteps] = useState(['']);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    const handleInputChange = (index, event) => {
    const values = [...ingredients];
    if (event.target.name === "quantity") {
        values[index].quantity = event.target.value;
    } else {
        values[index].name = event.target.value;
    }
        setIngredients(values);
    };

    const handleStepChange = (index, event) => {
        const values = [...steps];
        values[index] = event.target.value;
        setSteps(values);
    };

    const handleAddFields = () => {
        setIngredients([...ingredients, { quantity: '', name: '' }]);
    };

    const handleAddSteps = () => {
        setSteps([...steps, '']);
    };

    const handleRemoveFields = (index) => {
        const values = [...ingredients];
        values.splice(index, 1);
        setIngredients(values);
    };


    const handleRemoveSteps = (index) => {
        const values = [...steps];
        values.splice(index, 1);
        setSteps(values);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const recipe = {
            title,
            steps,
            category,
            ingredients
        };
    
        const token = Cookies.get('token');
    
        try {
            const response = await axios.post('http://localhost:3001/recipes/create', recipe, {
                headers: {
                    'Authorization': token
                }
            });
    
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section>
                <h1 className="rich-black font-semibold text-2xl pb-4">Add a Recipe</h1>
                <form className="space-y-4 max-w-2xl" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Title</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="selectMenu">Select Menu</label>
                            <select className="border border-gray-300 px-2 py-1 rounded-md" id="selectMenu" onChange={event => setCategory(event.target.value)}>
                                <option value="Appetizers & Snacks">Appetizers & Snacks</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza & Pasta">Pizza & Pasta</option>
                                <option value="Chicken & Poultry">Chicken & Poultry</option>
                                <option value="Beef & Red Meat">Beef & Red Meat</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Dressing & Sauce">Dressing & Sauce</option>
                                <option value="Side Dishes">Side Dishes</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Ingredients</label>
                        {ingredients.map((ingredient, index) => (
                            <div className="flex flex-col items-start md:flex-row md:items-end space-y-2 md:space-y-0 md:space-x-2 mt-1 mb-2" key={index}>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-sm" htmlFor="">Quantity</label>
                                    <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" name="quantity" value={ingredient.quantity} onChange={event => handleInputChange(index, event)} />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-sm" htmlFor="">Name</label>
                                    <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" name="name" value={ingredient.name} onChange={event => handleInputChange(index, event)} />
                                </div>
                                {index !== 0 && <button className="text-red-600 font-bold text-xl pb-1" type="button" onClick={() => handleRemoveFields(index)}>X</button>}
                            </div>
                        ))}
                        <button type="button" className="plus-btn transition font-semibold rounded-md px-3 py-1 mt-2" onClick={handleAddFields}>Add Ingredient +</button>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Steps</label>
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-start md:flex-row md:items-center">
                                <textarea className="border border-gray-300 px-2 py-1 rounded-md w-full mb-2" value={step} onChange={event => handleStepChange(index, event)} />
                                {index !== 0 && <button className="text-red-600 font-bold text-xl pb-1 ml-0 md:ml-2" type="button" onClick={() => handleRemoveSteps(index)}>X</button>}
                            </div>
                        ))}
                        <button type="button" className="plus-btn transition font-semibold rounded-md px-3 py-1 mt-2" onClick={handleAddSteps}>Add Step +</button>
                    </div>
                    <div className="pt-4">
                        <button className="btn transition font-semibold text-xl" type="submit">Add Recipe +</button>
                    </div>
                </form>
            </section>
        </>
    )
}