<<<<<<< HEAD
import { faMap, faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterItem = ({ item }) => {
	return (
		<a className='hover:text-green-400 flex gap-2 md:text-lg transition items-center justify-center outline-none select-none' href={``}>
			<FontAwesomeIcon className='w-3 text-green-400' icon={
				item.icon == 'at' ?
					faAt
				: item.icon == 'map-pin' ?
					faMap
				: item.icon == 'phone' &&
					faPhoneAlt
				
			}/>
			{ item.value }
		</a>
		
=======
export const FooterItem = ({ item }) => {
	return (
		!item.value.includes('.org') ?
			<span className=''>
				<i className={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`} />
				{ item.value }
			</span>
		:
			<a className='hover:text-green-400 transition outline-none select-none' href={`https://${item.value}`}>
				<i className={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`} />
				{ item.value }
			</a>
>>>>>>> 0e362f277b9a64982f8af6efa50055ccad6388a2
	)
}