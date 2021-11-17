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
		
	)
}