'use client'

export default function RecipeOpen() {
    return (
        <section className="max-w-2xl lg:max-w-3xl mx-auto">
            <h1 className="rich-black font-semibold text-2xl pb-2">Recipe Name</h1>
            <h2 className="mt-4 mb-2 font-semibold text-xl">Ingredients</h2>
            {/* ingredients */}
            <ul className="list-disc ml-4">
                <li>Carrots</li>
                <li>Olives</li>
                <li>Romaine</li>
            </ul>
            <h2 className="mt-4 mb-2 font-semibold text-xl">Steps</h2>
            {/* steps */}
            <ul className="list-disc space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            </ul>
            <div className="pt-6">
                <div>
                    <button className="font-semibold transition mb-3 btn">Add to My Week +</button>
                </div>
                <div className="pb-3">
                    <button className="blush font-semibold transition bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-xl">Update Recipe</button>
                </div>
                <div>
                    <button className="blush font-semibold transition bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl">Delete Recipe</button>
                </div>
            </div>
        </section>
    )
}