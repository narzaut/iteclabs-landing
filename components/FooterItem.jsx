import { FaMapMarkedAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'

export const FooterItem = ({ item }) => {
	return (
			<Link href='/'>
				<a href='/' className='hover:text-green-400 flex gap-2 md:text-lg transition items-center justify-center outline-none select-none' href={``}>
					{
						item.icon == 'at' ?
							<MdEmail className='text-green-400'/>
						: item.icon == 'map-pin' ?

							<FaMapMarkedAlt className='text-green-400'/>
						: item.icon == 'phone' &&
							<BsFillTelephoneFill className='text-green-400'/>				
					}
					{ item.value }
				</a>
			</Link>
			
		
		
	)
}