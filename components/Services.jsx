import { Service } from "./Service"
export const Services = ({ services }) => {
    return (
        <div className=''>
            {
                services.map(service => {
                    return <Service backgroundColor={ service.backgroundColor } imgSrc={ service.imgSrc } imgWidth={ service.imgWidth } title={ service.title } description={ service.description } />
                })
            }
        </div>
        
    )
  }
  
  