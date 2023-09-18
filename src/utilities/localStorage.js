const getStoredCart = () =>{
    const gettingCartString = localStorage.getItem('cart');

    if(gettingCartString){
        return JSON.parse(gettingCartString);
    }
    return [];
}

const saveCartToLS = (cart) =>{
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringyfy)
}


const addToLs = (id) =>{
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLS(cart)
}

export {addToLs , getStoredCart}