import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";

export default function StoreData() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                if (response.status !== 200) {
                    throw new Error("Failed to fetch products");
                }
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error.message); // use error.message for readability
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-4 ">
            <h1 className="text-xl font-bold mb-4">Product Preview</h1>
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : products.length > 0 ? (
                <div className="flex items-center justify-center flex-wrap gap-4">
                    {products.map((product) => (
                        <Card key={product.id} data={product} />
                    ))}
                </div>
            ) : (
                <p className="w-full h-full text-3xl font-bold flex flex-col justify-center items-center min-h-screen">Loading...</p>
            )}
        </div>
    );
}
