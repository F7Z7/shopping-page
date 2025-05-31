import react, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
export default function StoreData() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/2")
                if (response.status != 200) {
                    throw new Error("Failed to fetch users");
                }
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
                console.err(error, "error");
            }
        }
        fetchData();
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Product Preview</h1>
            {error && <p className="text-red-500">Error: {error}</p>}
            {products ? <Card data={products}/> : <p>Loading...</p>}
        </div>
    )
}
