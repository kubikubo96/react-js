import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Message from '../constants/Messages';
import Cart from "../components/cart/Cart";
import CartItem from "../components/cart/CartItem";
import CartResult from "../components/cart/CartResult";
import {actChangeMessage, actDeleteProductInCart, actUpdateProductInCart} from "../actions";

class CartContainer extends Component {
    render() {
        let {cart} = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        let result =
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
