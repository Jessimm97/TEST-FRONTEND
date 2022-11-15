

import { isMobile,} from "react-device-detect"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoXcaret, getInfoXcaretEN } from '../src/reducers/thunks'


const Nav = () => {


  const dispatch = useDispatch();
  var { value = [] } = useSelector((state) => state.info)


  useEffect(() => {
    dispatch(getInfoXcaret())
  }, [])


  function renderContent() {
    if (isMobile) {

      return(  
      
        <div className='flex  border-gray-200 container flex flex-nowrap items-center px-5'>
        <div className='p-3'>
          <img className='w-40' src={value.navbar?.logo}   />
        </div>
        <div className='flex ml-20'>
          <a className='text-xs p-2' href="#">   {value.navbar?.menu?.contact}</a>
          <button className=' text-xs p-2' onClick={()=> dispatch(getInfoXcaretEN()) }>   {value.navbar?.menu?.lang.title}</button>
          <select className=" p-2 border-gray-50 text-xs">
            {value.navbar?.menu?.currency.map((options, index) => (
              <option  className='text-xs' key={index}>{options} </option>
            ))}
          </select>
        </div>
      </div>
 )
    }
    return(  
    
     <div className='  border-gray-200 container flex lg:w-auto justify-between items-center p-5'>
       <div className=''>
         <img src={value.navbar?.logo}  />
       </div>
       <div className='hidden w-full lg:block lg:w-auto md:block md:w-auto'>
         <a className='p-4' href="#">   {value.navbar?.menu?.contact}</a>
         <button className='p-4' onClick={()=>  dispatch(getInfoXcaret()) }>   {value.navbar?.menu?.lang.title}</button>
         <select className=" border-gray-50 w-20 p-1">
           {value.navbar?.menu?.currency.map((options, index) => (
             <option key={index}>{options} </option>
           ))}
         </select>
        </div>
    
     </div>
  )
    
  }


  return (renderContent());


}


export default Nav