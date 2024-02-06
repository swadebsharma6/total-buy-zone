import ShoppingCart from "./ShopElement/ShoppingCart";


const Shop = () => {
    return (
        <section className="px-16 mt-10">
          <div className="grid lg:grid-cols-3 gap-4">
            <div>
            <ShoppingCart/>
            </div>
            <div className="lg:col-span-2 border-2">LeftSide</div>
          </div>
        </section>
    );
};

export default Shop;