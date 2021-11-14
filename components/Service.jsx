export const Service = ({ backgroundColor, imgSrc, imgWidth, title, description }) => {
    return (
      <div className={` ${backgroundColor}  px-10 text-gray-100  text-gray-200 flex flex-col gap-2  py-14 w-full  overflow-hidden `}>
        { imgSrc && imgWidth && <img src={ imgSrc } className={`  w-32 self-center pb-12  `} alt="" /> }
        <div className='flex '>
            <p className='font-bold text-4xl uppercase pb-2 max-w-min '>{ title }</p>
        </div>
        <div className='w-full flex items-center justify-center flex-col'>
            <p className='text-2xl '>{ description }</p>
        </div>
        <div className='flex w-full justify-end pt-8'>
            <div className={`bg-transparent hover:bg-white hover:text-${backgroundColor}-400  transition select-none cursor-pointer text-xl border p-2 rounded border-white`}>Conocer mas</div>
        </div>
      </div>
    )
  }
  
  