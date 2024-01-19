import { Inter } from 'next/font/google'
import Footer from "./Footer";
import Nav from "./Nav";


const inter = Inter({
	subsets: ['latin'],
	variable: "--font-inter"
})

const AppLayout = ({ children }) => {
	return (
		<div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
			<main className='flex-grow bg-[#f7f7f7]'>
				<Nav />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default AppLayout;
