import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo";
import { useShoppingCart } from "use-shopping-cart";
import dynamic from "next/dynamic";

const Nav = () => {
	const { formattedTotalPrice, cartCount } = useShoppingCart();

	return (
		<header className='sticky top-0 bg-white z-10 shadow'>
			<div className='container mx-auto p-2 flex justify-between'>
				<Logo />
				<Link
					href='/cart'
					className='flex items-center space-x-1 text-gray-700 hover:text-gray'>
					<div className='relative'>
						<FaShoppingCart className='w-7 h-7 flex-shrink-0' />
					</div>
					<p className='text-lg' suppressHydrationWarning>{formattedTotalPrice}</p>
					<p className='text-sm text-gray-500 ml-2'>({cartCount})</p>
				</Link>
			</div>
		</header>
	);
};

export default Nav;
