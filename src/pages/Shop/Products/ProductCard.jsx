import { FaArrowRight } from "react-icons/fa";


const ProductCard = ({product}) => {
    
    const {category, seller,img,  name,price } = product;
    return (
        <div className="card shadow-xl border-2">
  <figure>
  <img src={img} alt="Shoes" className="w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {seller}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>{name}</p>
    
    <div className="card-actions flex justify-between items-center">
    <p>Price: <span className="text-red-500 font-medium">${price}</span></p>
    <button>
    <FaArrowRight className="text-xl text-red-600" />
   </button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;