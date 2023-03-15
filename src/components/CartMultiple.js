import { useEffect, useState } from "react";
import CartSingle from "../pages/CartSingle";

const CartMultiple = () => {

    const [items, setItems] = useState([
        {id: 0, name: 'Inverter Aircon', price: 2000},
        {id: 1, name: 'T-shirt', price: 500},
        {id: 2, name: 'NikeAir', price: 2000},
        {id: 3, name: 'Chiken Adobo', price: 100},
        {id: 4, name: 'Chiken Adobo', price: 100},
        {id: 5, name: 'Chiken Manok', price: 300},
    ]);
    
    useEffect(()=>{
        // Using JSON.stingfy the items will be convetred to string so that you can read it
        // If No JASON.Stingfy the result will be OBJECT OBJECT
        localStorage.setItem('items', JSON.stringify(items));
    },[items]);

    return ( 
        <div>
            {
            items.map((cartItem)=> (
                <div  key={cartItem.id}>
                    <CartSingle name={cartItem.name} price={cartItem.price}></CartSingle>
                    
                </div>
            ))
}
        </div>
     );
}
 
export default CartMultiple;