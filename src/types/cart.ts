import { useCart } from "../context/CartContext";


export default function Cart(){

const {
cart,
removeFromCart
}=useCart();


const total =
cart.reduce(
(sum,item)=>
sum + item.price * item.quantity,
0
);



return (

<div className="home">

<h2>🛒 My Cart</h2>


{

cart.length===0 ?

<h3>
Cart Empty
</h3>


:

cart.map(item=>(

<div
className="hero-card"
key={item.id}
>


<img

src={item.image}

alt={item.name}

style={{
width:"100px",
borderRadius:"10px"
}}

/>


<h3>
{item.name}
</h3>


<p>
Quantity: {item.quantity}
</p>


<p>
৳ {item.price * item.quantity}
</p>


<button

className="shop-btn"

onClick={()=>removeFromCart(item.id)}

>

Remove

</button>


</div>

))


}


<h2>
Total: ৳ {total}
</h2>


</div>

);

}
