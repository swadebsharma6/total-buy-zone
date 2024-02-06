import ProductCard from "./ProductCard";


const Products = ({products}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 scroll-my-3">
           {
            products.map(product => <ProductCard
                key={product.id}
                product={product}
                ></ProductCard>)
           } 
        </div>
    );
};

export default Products;