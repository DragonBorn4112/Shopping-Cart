import PropTypes from "prop-types";

function CartItems({ imageSrc, name, price, quantity, id, removeFromCart }) {
    return(
        <div data-id={id}>
            
            <div>
                <img src={imageSrc} alt={name} />
                <span>{name}</span>
            </div>

            <div>

                <span>{quantity}</span>

                <span>{"R" + price}</span>

                <button 
                data-id={id} 
                onClick={removeFromCart}
                >
                    x
                </button>

            </div>

        </div>
    );
}

CartItems.PropTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    removeFromCart: PropTypes.func,
};

export default CartItems;