
import { useSelector } from 'react-redux'

const Landing=()=>{
    var { value = [] } = useSelector((state) => state.info)

    return(  
        
  <div>
    
      <div className="h-full flex  flex-col items-center p-10">
        
        <h2 className=" font-serif text-4xl">{value.navbar?.menu?.lang.title == "es" ? "Thanks for your purchase" : "¡¡ Gracias por tu copra!!"}</h2>
        <p className="font-serif text-2xl"> {value.navbar?.menu?.lang.title == "es" ? "We will wait for you" : "Te esperamos"}   </p>
        <img className="w-100 p-5 h-100" src="https://www.hotelxcaretarte.com/assets/hxa/pages/about/area.webp"/>
        <div className="p-5">
        <a className="text-center border font-serif border-black border-2  p-5" href="/"> Volver al Inicio</a>
        </div>
    </div>

    <div className='container flex flex-row items-center md:ml-60 p-5'>
   <div className='p-10'>
   <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md p-5 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Parque Xcaret</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {value.navbar?.menu?.lang.title == "es" ? "Red more" : "Ver más"}
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
   </div>
   <div className='p-10 '>
   <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md p-5 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Parque Xcaret</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {value.navbar?.menu?.lang.title == "es" ? "Red more" : "Ver más"}
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
   </div>



    </div>
  </div>)
}
export default Landing