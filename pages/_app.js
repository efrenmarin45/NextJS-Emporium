import { Toaster } from "react-hot-toast";
import AppLayout from "../components/Layout";
import "../styles/globals.css";
import { CartProvider } from "use-shopping-cart";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider cartMode='checkout-session' stripe={stripeKey} currency='USD'>
			<AppLayout>
				<Component {...pageProps} />
        <Toaster />
			</AppLayout>
		</CartProvider>
	);
}

export default MyApp;
