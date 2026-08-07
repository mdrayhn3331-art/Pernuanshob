import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import { Product } from "../types/product";
import { useCart } from "../context/CartContext";


export default function ProductDetails(){

const {id}=useParams();

const [product,setProduct]=useState<Product | null>(null);

const {addToCart}=useCart();


useEffect(()=>{

async function load(){

if(!id) return;


const snap=await getDoc(
doc(db,"products",id)
);


if(snap.exists()){

setProduct({

id:snap.id,

...snap.data()

} as Product);

}


}


load();


},[id]);



if(!product){

return <h2>Loading...</h2>;

}



return (

<div className="home">


<div className="hero-card">


<img

src={product.image}

alt={product.name}

style={{
width:"100%",
borderRadius:"20px"
}}

/>


<h2>
{product.name}
</h2>


<p>
{product.description}
</p>


<h2>
৳ {product.price}
</h2>


<p>
Stock: {product.stock}
</p>



<button

className="shop-btn"

onClick={()=>addToCart(product)}

>

Add To Cart 🛒

</button>


</div>


</div>

);


}
