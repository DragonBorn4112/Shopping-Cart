import ProductCard from "../Extras/ProductCard";
import { useEffect, useState } from "react";

function ProductSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then((data) => setProducts(data));
    }, []);

    return(
        <section className="product-grid">

            {products.map((product) => {
                return(
                    <ProductCard 
                    imgSrc={product.image}
                    productName={product.name}
                    price={"R" + product.price}
                    id={product.id}
                    key={product.id}/>
                );
            })}

        </section>
    );
}

export default ProductSection;