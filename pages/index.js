import { stripe } from "../util/stripe";
import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
	return (
		<div className='container xl:max-w-screen-xl mx-auto py-12 px-6'>
			<div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
				{products.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const fullInventory = await stripe.products.list({
		expand: ["data.default_price"],
		limit: 69,
	});

	const productItem = fullInventory.data.map((item) => {
		const price = item.default_price;
		return {
			id: item.id,
			name: item.name,
			price: price.unit_amount,
			image: item.images[0],
		};
	});

	return {
		props: {
			products: productItem,
		},
	};
}
