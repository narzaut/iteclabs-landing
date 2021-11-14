export const Service = ({ backgroundColor, imgSrc, title, description }) => {
    return (
      <div className={` ${backgroundColor} px-10 text-white flex flex-col gap-2  py-14 w-full  overflow-hidden `}>
        { imgSrc  && <img src={ imgSrc } className={`self-center pb-12  `} alt="" /> }
        <div className='flex text-shadow'>
            <p className='font-bold text-4xl uppercase pb-2 max-w-min '>{ title }</p>
        </div>
        <div className=' w-full flex items-center justify-center flex-col'>
            <p className='text-2xl '>{ description }</p>
        </div>
        <div className='flex w-full justify-end pt-8'>
            <div className={`card-shadow font-bold bg-transparent hover:bg-white hover-text transition select-none cursor-pointer text-xl border p-2 px-4 rounded border-white`}>Conocer mas</div>
        </div>
      </div>
    )
  }
  
  