import Link from 'next/link'
import { useState } from 'react'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const NavBar = ({ data }) => {
    const [isMenuDeployed, setIsMenuDeployed] = useState(false)
	return(
		<nav class="z-10 sticky fadeInDown gap-4 flex-col md:flex-row bg-gray-800   w-full flex justify-between items-center text-gray-200 py-6  ">
  	        <div className='w-full flex h-full relative z-10 '>
                <div className='w-full flex px-4 z-10 '>
                    <div onClick = {() => setIsMenuDeployed(!isMenuDeployed)} className=' flex w-full w-1/3 items-center'>
                        <div className=''>
                            <FontAwesomeIcon icon={faEllipsisV} className='hover:text-red-400 w-2' />

                        </div>
                    </div>
                    <div className='flex w-full w-1/3 text-center items-center justify-center'>
  			        	<span class='text-4xl '>LOGO</span>
			        </div>
                    <div className='w-1/3 flex items-center justify-end '>
                        <Link href='/'>
                            <a className='outline-none border-b-2 border-transparent hover:border-green-400 rounded font-bold text-gray-200 hover:text-green-400 transition uppercase'>Contacto</a>
                        </Link>
                    </div>
                </div>
            </div>
           
            {isMenuDeployed && 
                <div className='fixed fadeInDown z-0 bg-gray-800 w-full absolute top-20 py-4'>
                    <ul className='flex-col gap-4 flex items-start pl-10 justify-center ' id='nav' >

                           <li className=''>
                               <Link href='/'> 
                                   <a className='border-b-2 border-transparent hover:border-green-400 rounded smoothscroll font-bold text-gray-200 hover:text-green-400 transition    uppercase'>asdasda</a>
                               </Link>
                           </li>
                           <li>
                               <Link href='/'>
                                   <a className='border-b-2 border-transparent hover:border-green-400 font-bold text-gray-200 rounded hover:text-green-400 transition  uppercase'>asdasda</a>
                               </Link>
                           </li>
                           <li>
                               <Link href='/'>
                                   <a className='border-b-2 border-transparent hover:border-green-400 font-bold rounded text-gray-200 hover:text-green-400 transition  uppercase'>asdasda</a>
                               </Link>
                           </li>
                           <li>
                               <Link href='/'>
                                   <a className='border-b-2 border-transparent hover:border-green-400 font-bold rounded text-gray-200 hover:text-green-400 transition  uppercase'>asdasda</a>
                               </Link>
                           </li>


                    </ul>
                </div>
            }
            
  	    </nav>
	)
}

/*

                 */