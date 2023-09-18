import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import { addToLs, getStoredCart } from "../../utilities/localStorage";
import Cart from "../cart/cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load cart from local storage
    useEffect(()=>{
        console.log(bottles.length)
        if(bottles){
            const storedCart = getStoredCart();
            console.log(storedCart,bottles)

            const saveCart = [];

            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);

                if(bottle){
                    saveCart.push(bottle)
                }
            }

            console.log("savedCarts", saveCart);
            setCart(saveCart)
        }
    },[bottles])


    const [cart , setCart] = useState([]);

    const handlePurches = (bottle) =>{
        const addingBottle = [...cart, bottle];
        setCart(addingBottle);

        addToLs(bottle.id)
    }

    return (
        <div className="bottles-style">
            <h2>Bottles Here: {bottles.length}</h2>
            
            <Cart cart={cart}></Cart>
            
            <div className="allContainer">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottleDetails={bottle} handlePurches={handlePurches}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;