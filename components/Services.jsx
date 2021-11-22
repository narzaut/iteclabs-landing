import { Service } from "./Service"
import { useWindowSize } from "../hooks/useWindowSize"
export const Services = ({ services }) => {
    const window = useWindowSize()
    return (
        <div id='servicios' className=''>
            {
                services.map(service => {
                    return <Service id={ service.id } backgroundColor={ service.backgroundColor } imgSrc={ (service.id == 1) ? null : service.imgSrc } imgWidth={ service.imgWidth } title={ service.title } description={ service.description } />
                })
            }
        </div>
        
    )
  }
  
  