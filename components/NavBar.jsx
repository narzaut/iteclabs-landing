import Link from 'next/link'
import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { useRef, useEffect } from "react";

function useOutsideAlerter(ref, setter) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setter(false)
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export const NavBar = ({ navBar }) => {
	const [isMenuDeployed, setIsMenuDeployed] = useState(false)
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setIsMenuDeployed);
	return (
		<nav ref={wrapperRef} class="bg-white bg-opacity-80 z-10 flex lg:px-10 border-b border-gray-500 fixed  gap-4 flex-col md:flex-row  card-shadow   w-full flex  text-gray-800 py-2  ">
			<div className='w-full flex h-full  backdrop-blur '>
				<div className='w-full flex px-4  '>
					<div onClick={() => setIsMenuDeployed(!isMenuDeployed)} className='outline-none cursor-pointer select-none lg:hidden flex w-full w-1/3 items-center'>
						<div className='outline-none cursor-pointer select-none hover:text-green-400 transition'>
							<TiThMenu className='text-3xl' />
						</div>
					</div>
					<div className='flex w-full w-1/3 lg:w-1/4  text-center items-center lg:justify-start justify-center'>
						<img className='w-20' src={`/assets/${navBar.logoPath}`} alt="" />
						<p className='hidden lg:flex text-2xl pl-2 font-bold  px-8'> {navBar.brandName}</p>
					</div>
					<div className='hidden lg:px-20 lg:flex items-center justify-between w-1/3 lg:w-2/4'>
						{navBar.burgerMenu.values.map(option => {
							return (
								<div className='no-underline'>
									<Link href='/'>
										<a className='border-b-2 text-lg border-transparent hover:border-green-400 rounded smoothscroll font-bold text-gray-800 hover:text-green-400 transition    uppercase'>{option}</a>
									</Link>
								</div>
							)
						})}
					</div>
					<div className='w-1/3 lg:w-1/4 flex items-center justify-end  '>
						<Link href='/'>
							<div className='bg-white bg-opacity-20 hover:text-white border border-gray-800 relative cursor-pointer select-none card-shadow rounded p-2 px-4 hover:bg-green-400 transition '>
								<a className='outline-none rounded font-bold  transition uppercase lg:text-xl'>{navBar.contact}</a>
								<span class="absolute animate-ping flex -left-1 lg:-left-2 top-9 lg:top-10 rounded-full w-3 h-3 bg-green-400"></span>
							</div>
						</Link>
					</div>
				</div>
			</div>
			{/* BURGER MENU */}
			{isMenuDeployed &&
				<div className='backdrop-blur w-full transition fadeIn bg-opacity-80 lg:hidden fixed  z-0 bg-white w-full absolute top-24 py-8 card-shadow '>
					<ul className='fadeInDown flex-col gap-6 flex pl-8 items-start justify-center ' id='nav' >
						{navBar.burgerMenu.values.map(option => {
							return <li className=''>
								<Link href='/'>
									<a className='border-b-2 border-transparent hover:border-green-400 rounded smoothscroll font-bold text-gray-800 hover:text-green-400 transition    uppercase'>{option}</a>
								</Link>
							</li>
						})}
					</ul>
				</div>
			}
		</nav>
	)
}