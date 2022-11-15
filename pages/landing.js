
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
const Landing=()=>{
    var { value = [] } = useSelector((state) => state.info)

    return(  
        
  <div>
    <Nav/>
      <div className="h-full flex  flex-col items-center p-10">
        
        <h2 className=" font-serif text-4xl">{value.navbar?.menu?.lang.title == "es" ? "Thanks for your purchase" : "¡¡ Gracias por tu copra!!"}</h2>
        <p className="font-serif text-2xl"> {value.navbar?.menu?.lang.title == "es" ? "We will wait for you" : "Te esperamos"}   </p>
        <img className="w-100 p-5 h-100" src="https://www.hotelxcaretarte.com/assets/hxa/pages/about/area.webp"/>
        <div className="p-5">
        <a className="text-center border font-serif border-black border-2  p-5" href="/"> Volver al Inicio</a>
        </div>
    </div>
  </div>)
}
export default Landing