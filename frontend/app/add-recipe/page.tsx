export default function addRecipe() {
    return (
        <>
            <section className="min-w-xl">
                <h1 className="rich-black font-semibold text-2xl pb-4">Add a Recipe</h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Title</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Category</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Ingredients</label>
                        <div className="flex space-x-2 mt-1">
                            <div className="flex flex-col">
                                <label className="text-sm" htmlFor="">Quantity</label>
                                <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm" htmlFor="">Name</label>
                                <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" />
                            </div>
                        </div>
                        <button className="plus-btn transition font-semibold rounded-md px-3 py-1 mt-2 w-40">Add Ingredient +</button>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold" htmlFor="">Steps</label>
                        <textarea className="border border-gray-300 px-2 py-1 rounded-md w-full" />
                        <button className="plus-btn transition font-semibold rounded-md px-3 py-1 mt-2 w-32">Add Step +</button>
                    </div>
                    <div className="pt-4">
                        <button className="btn transition font-semibold text-xl">Add Recipe +</button>
                    </div>
                </form>
            </section>
        </>
    )
}