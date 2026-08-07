import {
  createContext,
  useContext,
  useState,
  ReactNode
} from "react";

import { Product } from "../types/product";
import { CartItem } from "../types/cart";


interface CartContextType {

  cart: CartItem[];

  addToCart: (product: Product)=>void;

  removeFromCart:(id:string)=>void;

}


const CartContext =
createContext<CartContextType | null>(null);



export function CartProvider({
children
}:{
children:ReactNode
}){


const [cart,setCart]=useState<CartItem[]>([]);



function addToCart(product:Product){

setCart(prev=>{

const exist =
prev.find(
item=>item.id===product.id
);


if(exist){

return prev.map(item=>

item.id===product.id

?

{
...item,
quantity:item.quantity+1
}

:item

);

}


return [
...prev,
{
...product,
quantity:1
}
];


});


}



function removeFromCart(id:string){

setCart(
prev=>
prev.filter(
item=>item.id!==id
)
);

}



return (

<CartContext.Provider

value={{
cart,
addToCart,
removeFromCart
}}

>

{children}

</CartContext.Provider>

);


}



export function useCart(){

const context =
useContext(CartContext);


if(!context){

throw new Error(
"CartProvider missing"
);

}


return context;

}
