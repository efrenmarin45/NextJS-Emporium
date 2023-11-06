import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<Link href='/' className='flex items-center space-x-2'>
			<Image
				src='/logo.svg'
				alt='Efren Emporium Logo'
				width={130}
				height={130}
				priority={true}
			/>
		</Link>
	);
};

export default Logo;
