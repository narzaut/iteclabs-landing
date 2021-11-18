import { FooterItem } from './FooterItem'
import {AiFillInstagram, AiFillFacebook, AiFillYoutube} from 'react-icons/ai';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
export const Footer = ({ footer }) => {

	return(
		<footer id="footer" className='pt-14 pb-6 text-shadow relative bg-web-dev  flex flex-col  items-center text-gray-300 text-sm'> 
      <div className='flex w-full absolute top-0'>
      	<div className='flex w-1/4 border-t-8 border-red-400' />
        <div className='w-1/4 border-t-8 border-blue-400' />
        <div className='w-1/4 border-t-8 border-yellow-400' />
        <div className='w-1/4 border-t-8 border-green-400' />
      </div>
			<div className='flex gap-2 lg:gap-8 py-2 lg:py-4 '>
				{footer.socialMedia.map(socialMedia => {
					return (
						<div className='cursor-pointer select-none hover:text-green-400 transition flex items-center justify-center gap-2'>
							<div >
								{
									socialMedia.icon == 'facebook' ?
										<AiFillFacebook className='w-4 h-4 lg:w-8 lg:h-8'/>
									: socialMedia.icon == 'instagram' ?
										<AiFillInstagram className='w-4 h-4 lg:w-8 lg:h-8'/>
									: socialMedia.icon == 'youtube' && 
										<AiFillYoutube className='w-4 h-4 lg:w-8 lg:h-8'/>
								}
							</div>
							<div className='flex'>
								<p className='uppercase text-lg lg:text-2xl'>{ socialMedia.value }</p>
							</div>
						</div>
					)
				})}
			</div>
			<div className='-10 flex text-center text-center pb-4  flex-col lg:flex-row items-center lg:items-start '>
				<p className='flex flex-col pt-4 text-sm lg:text-base gap-2 lg:gap-4 text-gray-300 leading-8'>				
					{footer.contactDescription.map(item => {
						return <FooterItem item={ item }/>
					})}
				</p>
			</div>
			<div className='h-12 w-12 rounded-full bg-gray-500 bg-opacity-60 glass  card-shadow transition-color hover:bg-gray-600 transition absolute  flex items-center justify-center cursor-pointer -top-5   animate-bounce' to='#home'>
				<BsFillArrowUpCircleFill />
			</div>

			<div className='border-t-4 px-12 pt-4 rounded border-green-400'>
				 {footer.credits.made}
				<span className='text-green-400'> {footer.credits.by} </span>
				 {footer.copyright}
			</div>
    </footer>
		
	)
}