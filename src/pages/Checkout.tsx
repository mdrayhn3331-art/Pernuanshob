import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";
import { auth } from "../firebase";


export default function Checkout(){

const {cart}=useCart();


const [method,setMethod]=useState("bKash");
const [trx,setTrx]=useState("");
const [screenshot,setScreenshot]=useState("");



const total =
cart.reduce(
(sum,item)=>
sum + item.price * item.quantity,
0
);



async function submitOrder(){

const user = auth.currentUser;


if(!user){

alert("Please login first");

return;

}



if(!trx){

alert("Enter Transaction ID");

return;

}



try{


await createOrder({

userId:user.uid,

products:cart,

total,

paymentMethod:method,

transactionId:trx,

paymentScreenshot:screenshot

});


alert("Order Submitted Successfully");


}catch(error){

console.log(error);

alert("Order Failed");

}


}



return (

<div className="home">


<div className="hero-card">


<h2>
Checkout
</h2>


<h3>
Total: ৳ {total}
</h3>


<h3>
Payment Method
</h3>


<select

value={method}

onChange={(e)=>setMethod(e.target.value)}

>

<option>
bKash
</option>

<option>
Nagad
</option>

<option>
Rocket
</option>


</select>



<p>
Send Money Number:
</p>

<h3>
01876872469
</h3>



<input

placeholder="Transaction ID"

value={trx}

onChange={
(e)=>setTrx(e.target.value)
}

/>


<input

placeholder="Payment Screenshot URL"

value={screenshot}

onChange={
(e)=>setScreenshot(e.target.value)
}

/>


<button

className="shop-btn"

onClick={submitOrder}

>

Confirm Order

</button>


</div>


</div>

);


}
