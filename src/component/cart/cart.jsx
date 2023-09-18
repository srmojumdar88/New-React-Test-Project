import PropTypes from 'prop-types'
import "./cart.css"
import Bottle from '../bottle/bottle';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>cart length:{cart.length}</h3>
            <div>
            {
                cart.map(cart => <img src={cart.img} key={Bottle.id} className="cart-Card" /> )
            }
            </div>
        </div>
    );
};

Cart.propTypes= {
    cart: PropTypes.array.isRequired
}
export default Cart;