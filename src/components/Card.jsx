import React from "react";

export default function Card({data}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <img src={data.image} alt="data.title"/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row p-5 justify-around items-center bg-red-500 ">
                    <span className="bg-green-400 p-2 rounded-xl text-black text-center font-bold hover:bg-blue-400 hover:text-white cursor-pointer transiton 300s ease-in-out ">$ {data.price} </span>
                   <span className="rounded-xl text-black font-semibold bg-blue-500 p-2 w-xm text-center"> {data.rating?.rate}</span>
                    <span>{data.category}</span>
                </div>
            </div>
        </div>
    );
}
