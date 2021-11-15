export const Service = ({ backgroundColor, imgSrc, title, description }) => {
    return (
      <div className={` ${backgroundColor} px-4 lg:px-20 text-white flex flex-col lg:flex-row gap-2  py-14 lg:py-20 w-full  overflow-hidden `}>
        <div className='flex w-full flex-col lg:flex-row'>
          <div className={` pb-12 lg:pb-0 lg:w-1/3 flex justify-center`}>
            { imgSrc  && <img src={ imgSrc }  className='' alt="" /> }
          </div>
          <div className='flex flex-col lg:w-2/3 pl-4'>
            <div className='flex text-shadow'>
                <p className='font-bold text-4xl lg:text-5xl uppercase pb-2 max-w-min lg:max-w-max '>{ title }</p>
            </div>
            <div className=' w-full flex items-center flex-col'>
                <p className='text-xl lg:text-2xl '>{ description }</p>
            </div>
            <div className='flex w-full justify-end pt-12'>
                <div className={`card-shadow font-bold bg-transparent hover:bg-white hover-text transition select-none cursor-pointer text-xl border p-2 px-4 rounded border-white`}>Conocer mas</div>
            </div>
          </div>
        </div>
       
        
      </div>
    )
  }
  
  