import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux'


const PreFooter = () => {
  var { value = [] } = useSelector((state) => state.info)


  function renderContent() {
    if (isMobile) {
      return (<div className='bg-gray-700 flex flex-col justify-start text-white px-10'>
      <div className='w-100 '>
      <div className='flex flex-row  '> 
        <p className='text-sm  p-4'> {value?.prefooter?.contactCenter?.contactCenter}</p>
        <p className='text-sm  p-4'> {value?.prefooter?.contactCenter?.email}</p>
        </div>
       <div className='flex flex-row'>
       {value?.prefooter?.numbers.slice(0,2).map((numbers,index)=>
           <div key={index}>  
            <p className='text-sm  p-1 font-light '> {numbers.name} <br/> {numbers.number}</p>
           </div>
       )}
           <div className='px-5'>
           <select className="bg-gray-700   text-xs">
             {  value?.prefooter?.numbers.slice(3,8).map((numbers,index) => (
                <option  className='text-sm ' key={index}>{numbers.name} {numbers.number}</option>
              ))}
            </select>
           </div>
     
           <div className=' flex flex-row ml-10 '>
             <a href={value?.social?.facebookUrl}>
             <img className='w-5 h-5 rounded-full' src='https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-circular-en-color-azul-164585774.jpg'/>
             </a>
             <a href={value?.social?.instagramUrl}>
             <img className='w-5 h-5 rounded-full' src='https://thumbs.dreamstime.com/b/vector-del-icono-de-la-ronda-instagram-134391805.jpg'/>
             </a>
             <a href={value?.social?.twitterUrl}>
             <img className='w-5 h-5 rounded-full' src='https://thumbs.dreamstime.com/b/icono-de-twitter-134700859.jpg'/>
             </a>
           </div>
           </div>
       
      </div>
  
   </div>)
    }

    return (<div className='bg-gray-700 flex flex-col justify-start text-white '>
    <div className='w-100 px-40 py-10'>
    <div className='flex flex-row  max-w-lg'> 
      <p className='text-lg  p-4'> {value?.prefooter?.contactCenter?.contactCenter}</p>
      <p className='text-lg  p-4'> {value?.prefooter?.contactCenter?.email}</p>
      </div>
     <div className='flex flex-row'>
     {value?.prefooter?.numbers.slice(0,2).map((numbers,index)=>
         <div key={index}>  
          <p className='text-lm  p-1 font-light '> {numbers.name} <br/> {numbers.number}</p>
         </div>
     )}
         <div>
         <select className="bg-gray-700 p-1  text-xs">
           {  value?.prefooter?.numbers.slice(3,8).map((numbers,index) => (
              <option  className='text-lg ' key={index}>{numbers.name} {numbers.number}</option>
            ))}
          </select>
         </div>
   
         <div className=' flex flex-row w-50 ml-60'>
           <a href={value?.social?.facebookUrl}>
           <img className='w-10 h-10 rounded-full' src='https://thumbs.dreamstime.com/b/icono-del-logo-de-facebook-voronezh-rusia-noviembre-circular-en-color-azul-164585774.jpg'/>
           </a>
           <a href={value?.social?.instagramUrl}>
           <img className='w-10 h-10 rounded-full' src='https://thumbs.dreamstime.com/b/vector-del-icono-de-la-ronda-instagram-134391805.jpg'/>
           </a>
           <a href={value?.social?.twitterUrl}>
           <img className='w-10 h-10 rounded-full' src='https://thumbs.dreamstime.com/b/icono-de-twitter-134700859.jpg'/>
           </a>
         </div>
         </div>
     
    </div>

 </div>)

  }


  return renderContent();




}

export default PreFooter