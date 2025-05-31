export default function Hero() {
    return (
        <div
            className="flex flex-row justify-around  min-h-screen gap-8 items-center mb-5 bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50 ">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-800 leading-tight mb-4">
                    Discover the Best Deals on <span className="text-rose-600">Stark.Shoppy</span>
                </h1>
                <p className="text-xl">
                    Shop the latest fashion, electronics, and more — powered by the <span
                    className="font-bold text-rose-500">TONY STARK</span>. Affordable prices, quality items, and fast
                    delivery!
                </p>
            </div>
            <div className="image relative w-[300px] h-[300px] rounded-full overflow-hidden group">
                <img
                    src="src/assets/img.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-[grey] bg-opacity-10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
                    Even dead I'm the hero
                </div>
            </div>
        </div>
    );
}
