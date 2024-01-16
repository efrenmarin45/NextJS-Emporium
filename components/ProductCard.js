import Image from "next/image";
import Link from "next/link";
import Ratings from "./Ratings";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import toast from "react-hot-toast";

const ProductCard = ({ product, index }) => {
	const { addItem } = useShoppingCart();
    
    function onAddToCart(event){
        event.preventDefault();
        const toastID = toast.loading("Adding 1 Item")
        addItem(product);
        toast.success(`${product.name} added`, { id: toastID })
    }
	
	return (
		<Link
			href={`/products/${product.id}`}
			className='border-2 rounded-md group overflow-hidden'>
			<div className='relative w-full h-64'>
				<Image
					priority={true}
					src={product.image}
					alt={product.name}
					fill={true}
					sizes='100%'
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className='p-6 bg-white'>
				<p className='font-semibold text-lg'>{product.name}</p>
				<Ratings />
				<div className='mt-4 flex items-center justify-between space-x-2'>
					<div>
						<p className='text-gray-500'>Price</p>
						<p className='text-lg font-semibold'>
							{formatCurrencyString({ value: product.price, currency: "USD" })}
						</p>
					</div>

					<button onClick={onAddToCart} className='border rounded-lg py-1 px-4'>
						Add to Cart
					</button>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
