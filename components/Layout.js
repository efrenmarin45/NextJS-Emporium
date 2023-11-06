import Footer from "./Footer";
import Nav from "./Nav";

const AppLayout = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<main className='flex-grow bg-[#f7f7f7]'>
				<Nav />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default AppLayout;
