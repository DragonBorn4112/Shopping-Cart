import { useRef, useEffect, useState } from "react";
import App from "../../App.jsx";

import CartItems from "../../Extras/CartItems.jsx";

function Cart() {
    const [cart, setCart] = useState([]);
    const total = useRef(0);
    
    useEffect(() => {
        const newCart = App.GetCart();
        total.current = App.GetTotal();

        setCart(newCart);
    }, []);

    function removeFromCart(e) {
        App.RemoveFromCart(parseInt(e.target.dataset.id));
        total.current = App.GetTotal();
        const newCart = App.GetCart();

        setCart(newCart);
    }

    return(
        <div>
            {cart.map((product) => {
                return (
                    <CartItems 
                    imageSrc={product.imageSrc}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    id={product.id}
                    removeFromCart={removeFromCart}
                    key={product.id} 
                    />
                );  
            })}

            <div className="cart-footer">
                <span>Shipping cost: R0</span>
                <span>Subtotal: ${total.current}</span>
            </div>
        </div>
    );

}

export default Cart;