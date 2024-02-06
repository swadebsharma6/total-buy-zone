import { Link } from 'react-router-dom';
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <section>
            <div className='h-screen max-w-5xl mx-auto flex sm:flex-row justify-between items-center px-20'>

            <div className='flex-1 space-y-5'>
                <p className='text-orange-500 text-lg'>Sale up to 70% off</p>
                <h2 className='text-4xl font-bold'>New Collection For Fall</h2>
                <p className='text-xl font-medium'>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to='/shop'>
                <button className="btn btn-warning my-5">Shop Now</button>
                </Link>
            </div>
             <div className='flex-1 ml-5'>
             <img src={banner} alt="Banner" className='w-[470px] border-l-8 border-b-4 rounded border-orange-500' />
             </div>
            
            </div>
        </section>
    );
};

export default Banner;