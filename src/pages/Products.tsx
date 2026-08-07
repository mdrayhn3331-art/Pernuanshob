import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import { Product } from "../types/product";

export default function Products() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadProducts(){

      try{

        const data = await getProducts();

        setProducts(data);

      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }

    }

    loadProducts();

  },[]);


  if(loading){

    return (
      <h2 style={{textAlign:"center"}}>
        Loading Products...
      </h2>
    );

  }


  return (

    <div className="home">

      <h2>
        🛍️ Products
      </h2>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(2,1fr)",
          gap:"15px",
          marginTop:"20px"
        }}
      >

      {
        products.map((product)=>(

          <div
            key={product.id}
            className="hero-card"
          >

            <img
              src={product.image}
              alt={product.name}
              style={{
                width:"100%",
                height:"150px",
                objectFit:"cover",
                borderRadius:"15px"
              }}
            />


            <h3>
              {product.name}
            </h3>


            <p>
              {product.category}
            </p>


            <h3>
              ৳ {product.price}
            </h3>


            {
              product.discount &&
              <small>
                Discount: {product.discount}%
              </small>
            }


            <button className="shop-btn">
              View Details
            </button>


          </div>

        ))
      }

      </div>

    </div>

  );
}
