export function About({ about }) {
    return (
      <div className="px-10  bg-gray-200 text-gray-700 flex items-center justify-center flex-col gap-4  py-20 w-full text-center overflow-hidden ">
          <div className='gap-4 flex  flex-col w-full lg:w-3/4'>
            <div className='flex items-center justify-center'>
                <div className='lg:pb-4 flex flex-col items-center justify-center max-w-min lg:max-w-max'>
                    <p className='font-bold text-4xl lg:text-5xl uppercase pb-2 '>{about.title}</p>
                    <div className='flex w-full'>
                        <div className='flex w-1/4 rounded-l border-b-8 border-red-400'>

                        </div>
                        <div className='w-1/4 border-b-8 border-blue-400'>

                        </div>
                        <div className='w-1/4 border-b-8 border-yellow-400'>

                        </div>
                        <div className='w-1/4 border-b-8 border-green-400 rounded-r'>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-full flex items-center justify-center flex-col gap-8 lg:gap-12'>
                <p className='text-2xl '>Nuestros valores bla aspdoa sda kjs ajsdh as ajshdjhhs hasjd hkasdh hsja  as ajshdjhhs hasjd hkasdh hsja  as ajshdjhhs hasjd hkasdh hsja</p>
                <p className='text-2xl '>Estamos para ayudarte cuando lo necesites</p>
                <p className='text-2xl '>Nuestros valores bla aspdoa sda kjs ajsdh as ajshdjhhs hasjd hkasdh hsja as ajshdjhhs hasjd hkasdh hsja  as ajshdjhhs hasjd hkasdh hsja  as ajshdjhhs hasjd hkasdh hsja  as ajshdjhhs hasjd hkasdh hsja</p>
            </div>
          </div>
          
      </div>
    )
  }
  