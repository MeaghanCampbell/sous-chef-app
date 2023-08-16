'use client'

export default function RecipeOpen() {
    return (
        <section className="max-w-2xl lg:max-w-3xl mx-auto">
            <a className="btn font-semibold transition" href="/my-week">
                <span>Back to My Week</span>
            </a>
            <h1 className="rich-black font-semibold text-2xl recipe-divider recipe-top-divider pb-2 pt-2 mt-6">Recipe Name</h1>
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
        </section>
    )
}