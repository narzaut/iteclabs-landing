import { FooterItem } from './FooterItem'
export const Footer = ({ data }) => {

	return(
		<footer id="footer" className='py-10 text-shadow relative bg-web-dev py-4 flex flex-col items-center text-gray-300 text-sm'> 
      <div className='flex w-full absolute top-0'>
        	<div className='flex w-1/4 border-t-8 border-red-400' />
          <div className='w-1/4 border-t-8 border-blue-400' />
          <div className='w-1/4 border-t-8 border-yellow-400' />
          <div className='w-1/4 border-t-8 border-green-400' />
                    </div>
			
			<div className='-10 flex  text-center pb-4  flex-col items-center lg:items-start '>
				<p className='flex flex-col pt-4 text-sm lg:text-base gap lg:gap-4 text-gray-300 leading-8'>				
					{data.contactDescription.map(item => {
						return <FooterItem item={ item }/>
					})}
				</p>
			</div>
			<div className='h-12 w-12 rounded-full bg-gray-500 transition-color hover:bg-green-400 transition absolute  flex items-center justify-center cursor-pointer -top-5   animate-bounce' to='#home'>
				<i class="fas fa-arrow-up text-3xl  " />
			</div>

			<div>
				 {data.credits.made}
				<span className='text-green-400'> {data.credits.by} </span>
				 {data.copyright}
			</div>
    </footer>
		
	)
}