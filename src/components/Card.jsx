import React from "react";

export default function Card({data}) {
    return (
        <div className="flex flex-col w-[300px] h-[400px] justify-between max-w-2xl m-2 mx-auto border rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                    src={data.image}
                    alt={data.title}
                    className="max-h-full max-w-full object-contain p-4"
                />
            </div>

            <div className="flex flex-col-reverse  justify-around w-full p-4 gap-5 w-auto space-y-4">
                {/* Price, Rating, Category */}
                <div className="desc flex flex-row gap-1 justify-between w-auto items-center">

                    <span
                        className="bg-green-400  rounded-xl text-black text-sm font-bold hover:bg-blue-400 hover:text-white cursor-pointer transition duration-300 ease-in-out">
        $ {data.price}
      </span>

                    {/* Rating */}
                    <span className="rounded-xl text-white text-sm font-semibold bg-blue-500  text-center">
        ⭐ {data.rating?.rate}
      </span>

                    {/* Category */}
                    <span
                        className="text-sm font-semibold bg-amber-100 text-gray-700 rounded-xl text-center capitalize">
        {data.category}
      </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 text-center">{data.title}</h2>
            </div>
        </div>

    );
}
