
import {store} from '../src/store'
import {Provider} from 'react-redux'
import Landing from './landing'
import dynamic from 'next/dynamic'
import Footer from '../components/footer'
const Nav = dynamic(() => import('../components/Nav'), { ssr: false })
const PreFooter = dynamic(() => import('../components/preFooter'), { ssr: false })
const ThankYouPage =()=>{
  
        return(
           <Provider store={store}>
                <Nav/>
                <Landing/>
                <PreFooter/>
                <Footer/>
           </Provider>
        )

}

export default ThankYouPage