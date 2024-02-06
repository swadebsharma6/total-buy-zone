import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ShoppingCart = () => {
    return (
        <section className="lg:h-screen bg-gray-300 border-2  rounded-md p-8">
            <h2 className="text-xl text-center font-bold py-4">Order Summary</h2>
            <div className="border border-primary space-y-2 rounded pl-4 mb-16">
             <h5 className="text-lg font-bold">Selected Item:</h5>
             <h5 className="text-lg font-bold">Total Price: $00</h5>
             <h5 className="text-lg font-bold">Shipping Charge: $00</h5>
             <p className="text-lg font-bold">Tax: $00</p>
             <h4 className="text-lg font-bold">Grand total: $00</h4>
            </div>
            <div className="space-y-5">
            <button className="btn w-full btn-error">
           Clear Cart
           <MdDelete className="text-xl" />
           </button>
            <button className="btn w-full btn-primary">
            Review Orders
            <FaArrowRight className="text-xl" />
           </button>
            </div>
        </section>
    );
};

export default ShoppingCart;