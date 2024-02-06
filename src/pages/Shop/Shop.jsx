import { useEffect, useState } from "react";
import Products from "./Products/Products";
import ShoppingCart from "./ShopElement/ShoppingCart";



const Shop = () => {
    const [products, setProducts] = useState([]);

useEffect(()=>{
    fetch('/public/data.json')
    .then(res => res.json())
    .then(data => setProducts(data))

}, [])

    return (
        <section className="px-16 mt-10">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="p-5   md:sticky z-50 top-10">
            <ShoppingCart/>
            </div>
            <div className="lg:col-span-2 p-5 ">
                <Products products={products}/>
            </div>
          </div>
        </section>
    );
};

export default Shop;