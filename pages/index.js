
import 'tailwindcss/tailwind.css'
import { store } from '../src/store'
import { Provider } from 'react-redux'
import Footer from '../components/footer'
import dynamic from 'next/dynamic'

// Se utiliza para evitar errores de Hydration ya que al manejar dos versiones diferentes no realiza el render automaticamente
const Header = dynamic(() => import('../components/Header'),{ ssr: false })
const Body = dynamic(() => import('../components/Body'), { ssr: false })
const Nav = dynamic(() => import('../components/Nav'), { ssr: false })
const PreFooter = dynamic(() => import('../components/preFooter'), { ssr: false })


export default function Home() {
  return (
    <Provider store={store}>
      <Nav />
      <Header /> 
      <Body />
      <PreFooter />
      <Footer />
    </Provider>
  )
}
