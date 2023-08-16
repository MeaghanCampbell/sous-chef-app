export default function MyWeek() {
    return (
        <div className="mx-auto">

            <section className="mb-6">
                <h1 className="rich-black font-semibold text-2xl">My Week</h1>
                <p className="mb-3">Click and drag each of your weekly recipes on to a day!</p>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                    <button className="btn transition font-semibold text-xl">Recipe Name</button>
                </div>
            </section>

            <section>
                <h1 className="rich-black font-semibold text-2xl">Calendar</h1>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Monday</h2>
                        {/* recipe buttons */}
                        <div>
                            <button className="btn transition font-semibold text-xl">Recipe Name</button>
                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Tuesday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Wednesday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Thursday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Friday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Saturday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                    <div className="baby-powder-bg rounded-xl w-full pt-3 pb-4 px-4 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Sunday</h2>
                        {/* recipe buttons */}
                        <div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}