import App from "../../App";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log(product.id);
        fetch('https://fakestoreapi.com/products/category/jewelery' + productId)
            .then(res=>res.json())
            .then((data) => setProduct(data));
    }, []);

    return(
        <section className="grid-section">

            <div>
                <img src={product.image} alt="Product Image" />
            </div>

            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>

                <span className="product-price">{product.price}</span>

                <div className="add-to-cart">
                    <button
                      data-id={productId}
                      data-quantity={quantity}
                      className="product-add-to-cart"
                      onClick={App.AddToCart}
                      >

                        Add To Cart
                        </button>

                        <input 
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                </div>

                <p className="description">
                    {product.description}
                </p>

            </div>

        </section>
    );

}

export default Product;