const Stripe = require("stripe");
const products = require("./products.js");

// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = Stripe("sk_test_51NzoPOBcwCmLEGdkdvdZJU4luvagLWDQBXSC9EzKSQX1kbr9stvejEMPNHMfw8Se0keCyyXtk1B7jgXctAs9P78i00wzO7Vj56");

(async () => {
	for (const product of products) {
		const stripeProduct = await stripe.products.create({
			name: product.name,
			default_price_data: {
				currency: product.currency,
				unit_amount_decimal: product.price,
			},
			images: [product.image],
		});
		console.log(stripeProduct.name, ":", stripeProduct.id);
	}
})();
