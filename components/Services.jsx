import { Service } from "./Service"
import { useWindowSize } from "../hooks/useWindowSize"
export const Services = ({ services }) => {
    const window = useWindowSize()
    return (
        <div className=''>
            {
                services.map(service => {
                    return <Service backgroundColor={ service.backgroundColor } imgSrc={ (service.id == 1 && window.width < 768) ? null : service.imgSrc } imgWidth={ service.imgWidth } title={ service.title } description={ service.description } />
                })
            }
        </div>
        
    )
  }
  
  