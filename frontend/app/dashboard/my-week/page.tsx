export default function MyWeek() {
    return (
        <div className="mx-auto">

            <section className="mb-6">
                <h1 className="rich-black font-semibold text-2xl">My Week</h1>
                <p className="mb-3"><strong>Yum!</strong> Looks like there are a lot of delicious meals for you to enjoy this week!</p>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                </div>
            </section>

        </div>
    )
}