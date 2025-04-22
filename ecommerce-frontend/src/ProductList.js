import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h4>{product.name}</h4>
                    <img src={product.image} alt={product.name} style={{ width: "200px" }} />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;