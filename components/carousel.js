import { isMobile } from 'react-device-detect';
import Image from 'next/image'
import { useSelector } from 'react-redux'
import {Carousel} from "flowbite-react"

const Carousell = () => {

    var { value = [] } = useSelector((state) => state.info)
    


  return ( <div className="h-56  w-80 h-80 ">
            
    <Carousel>
      <img
        src={value?.carousel?.mobile[0].src}
        alt={value?.carousel?.mobile[0].alt}
      />
      <img
        src={value?.carousel?.mobile[1].src}
        alt={value?.carousel?.mobile[1].alt}
      />
      <img
        src={value?.carousel?.mobile[2].src}
        alt={value?.carousel?.mobile[2].alt}
      />


    </Carousel>
</div>);




}

export default Carousell