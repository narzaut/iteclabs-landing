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
	)
}