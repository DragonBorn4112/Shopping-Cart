import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import App from "../App";

function ProductCard({ imgSrc, productName, price, id }) {
    const [quantity, setQuantity] = useState(1);

    return(
        <div className="product-card">

            <img 
              src={imgSrc}
              alt={productName} className="product-card-img"/>
            
            <div className="card-info">

                <Link to={"/product/" + id}>

            <div>
                 <span>{productName}</span>
            </div>

                </Link>

                <span>{price}</span>

                <div>
                    <button
                      data-id={id}
                      data-quantity={quantity}
                      onClick={App.AddToCart}
                    >
                        Add To Cart
                    </button>
                    <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)} />
                </div>
            </div>
        </div>
    );
}

ProductCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default ProductCard;