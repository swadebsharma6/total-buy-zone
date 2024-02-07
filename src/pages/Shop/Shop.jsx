import Products from "./Products/Products";
import ShoppingCart from "./ShopElement/ShoppingCart";



const Shop = () => {
    // const {products, count} = useLoaderData();

   

    return (
        <section className="px-16 mt-10">
          <div className="grid sticky top-0 lg:grid-cols-3 gap-4">
            <div className="p-5 sticky z-50 top-10">
            <ShoppingCart/>
            </div>
            <div className="lg:col-span-2 p-5 ">
                <Products/>
            </div>
          </div>
        </section>
    );
};

export default Shop;