import Link from 'next/link'
import { useState } from 'react'

export const NavBar = ({ data }) => {
    const [isMenuDeployed, setIsMenuDeployed] = useState(false)
	return(
		<nav class="fadeInDown gap-4 flex-col md:flex-row bg-gray-800  w-full flex justify-between items-center text-gray-200 py-8 ">
  	        <div className='w-full flex '>
                <div className='w-full flex'>
                    <div onClick = {() => setIsMenuDeployed(!isMenuDeployed)} className='flex w-full w-1/3 items-center justify-center'>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                    <div className='flex w-full w-1/3 text-center items-center justify-center'>
  			        	<span class='text-4xl '>LOGO</span>
			        </div>
                    <div className='w-1/3 flex items-center justify-center'>
                        <Link href='/'>
                            <a className='outline-none border-b-2 border-transparent hover:border-green-400 rounded font-bold text-gray-200 hover:text-green-400 transition uppercase'>Contactanos</a>
                        </Link>
                    </div>
                </div>
            </div>
           
            {isMenuDeployed && 
                <div className='fadeIn'>
                    <ul className='flex-col gap-4 flex items-center justify-center ' id='nav' >

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