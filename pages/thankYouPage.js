
import {store} from '../src/store'
import {Provider} from 'react-redux'
import Landing from './landing'
const ThankYouPage =()=>{
  
        return(
           <Provider store={store}>
                <Landing/>
           </Provider>
        )

}

export default ThankYouPage