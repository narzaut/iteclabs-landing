import Link from 'next/link'
import { useState } from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

export const NavBar = ({  navBar }) => {
    const [isMenuDeployed, setIsMenuDeployed] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setIsMenuDeployed);
	return(
		<nav ref={wrapperRef} class="lg:px-10 border-b border-gray-500 z-10 fixed  gap-4 flex-col md:flex-row bg-gray-200   w-full flex justify-between items-center text-gray-800 py-2  ">
  	        <div className='w-full flex h-full relative z-10 '>
                <div className='w-full flex px-4 z-10 '>
                    <div onClick = {() => setIsMenuDeployed(!isMenuDeployed)} className='lg:hidden flex w-full w-1/3 items-center'>
                        <div className=''>
                            <FontAwesomeIcon icon={faEllipsisV} className='hover:text-red-400 w-2' />
                        </div>
                    </div>
                    <div className='flex w-full w-1/3 lg:w-1/4  text-center items-center lg:justify-start justify-center'>
                        <img className='w-20' src={`/assets/${navBar.logoPath}`} alt="" />
                        <p className='hidden lg:flex text-xl pl-2 font-bold  px-8'> {navBar.brandName}</p>
			        </div>
                    <div className='hidden lg:px-12 lg:flex items-center justify-between w-1/3 lg:w-2/4'>
                        {navBar.burgerMenu.values.map(option => {
                            return ( 
                                <li className=''>
                                    <Link href='/'> 
                                        <a className='border-b-2 text-lg border-transparent hover:border-green-400 rounded smoothscroll font-bold text-gray-800 hover:text-green-400 transition    uppercase'>{option}</a>
                                    </Link>
                                </li>
                            )      
                        })}    
                    </div>
                    <div className='w-1/3 lg:w-1/4 flex items-center justify-end '>
                        <Link href='/'>
                            <a className='outline-none border-b-2 border-transparent hover:border-green-400 rounded font-bold  hover:text-green-400 transition uppercase lg:text-xl'>{navBar.contact}</a>
                        </Link>
                    </div>
                </div>
            </div>
            {isMenuDeployed && 
                <div className='lg:hidden fixed fadeInDown z-0 bg-gray-200 w-full absolute top-20 py-4'>
                    <ul className='flex-col gap-4 flex items-start pl-10 justify-center ' id='nav' >
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