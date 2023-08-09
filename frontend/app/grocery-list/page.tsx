export default function MyGroceryList() {
    return (
        <>
            <section>
                <fieldset>
                    <legend className="rich-black font-semibold text-2xl">My Grocery List</legend>
                    <div id="list" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-4 sm:gap-x-6 mt-3 baby-powder-bg shadow-md rounded-xl p-4 rich-black">
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Pickles</span></div>
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Chips</span></div>
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Pizza</span></div>
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Cucumber</span></div>
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Wine</span></div>
                        <div className="flex items-center"><input name="grocery-item" type="checkbox" /><span className="ml-2">Cheese</span></div>
                    </div>
                </fieldset>
            </section>
            <section className="mt-5">
                <fieldset>
                    <legend className="rich-black font-semibold text-2xl">Done</legend>
                    <div id="done" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-4 sm:gap-x-6 mt-3 rich-black">

                    </div>
                </fieldset>
            </section>
        </>
    )
}