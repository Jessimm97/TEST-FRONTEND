import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux'
import Carousell from './carousel';
import Modall from './modal';
const Body = () => {
  var { value = [] } = useSelector((state) => state.info)

  var image = value?.promotions
  function renderContent() {
    if (isMobile) {
      return (<div className='flex flex-col px-30'>
        {/* bloque 1 */}
        <div className='flex flex-col  pt-30'>
          {/* carrusel */}
          <div className='border-gray text-center flex items-center flex-col w-full h-96 p-5 '>
            <Carousell />
          </div>
          {/* info */}
          <div className=' flex flex-col  px-5'>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col items-center' >
                    <img className='w-32 mobileDisign' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                      
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* bloque 2 */}
        <div className='flex flex-col  pt-30'>
          {/* carrusel */}
          <div className='border-gray text-center flex items-center flex-col w-full h-96 p-5'>
            <Carousell />
          </div>
          {/* info */}
          <div className=' flex flex-col  px-5'>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col items-center' >
                    <img className='w-32 mobileDisign' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


        {/* bloque 3 */}
        <div className='flex flex-col  pt-30'>
          {/* carrusel */}
          <div className='border-gray text-center flex items-center flex-col w-full h-96  p-5'>
            <Carousell />
          </div>
          {/* info */}
          <div className=' flex flex-col  px-5'>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col items-center' >
                    <img className='w-32 mobileDisign' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='bg-gray-200 p-10'>
          <p className='text-lg  py-5'> {value.legals}</p>

        </div>

      </div>)
    }

    else {
      return (<div>
      <div className='container flex flex-col space-y-4 pt-10'>
        {/* bloque 1 */}
        <div className='flex flex-row space-x-32 space-y-16 '>
          {/* carrusel */}
          <div className=' flex flex-col ml-20 '>
            <Carousell />
          </div>
          {/* info */}
          <div className=' flex flex-col   '>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col ' >
                    <img className='w-32' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                      
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* bloque 2 */}
        <div className='flex flex-row space-x-32 space-y-16 '>

          {/* info */}
          <div className=' flex flex-col ml-20  '>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col ' >
                    <img className='w-32' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* carrusel */}
          <div className=' flex flex-col ml-20 '>
            <Carousell />
          </div>
        </div>

        {/* bloque 3 */}
        <div className='flex flex-row space-x-32 space-y-16 '>
          {/* carrusel */}
          <div className=' flex flex-col ml-20 '>
            <Carousell />
          </div>
          {/* info */}
          <div className=' flex flex-col   '>
            <div className=''>
              {image?.map((items, index) => {
                return (
                  <div key={index} className='flex flex-col ' >
                    <img className='w-32' src={items.logoPromo} />
                    <h2 className='text-4xl py-2 '> {items.title}</h2>
                    <h3 className='text-2xl py-2  '> {items.Subtitle}</h3>
                    <p className='text-lg py-2 '> {items.paragraphs}</p>
                    <div className='flex justify-center py-4 '>
                      <Modall value={items.button.text}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </div>
        
        <div className='bg-gray-200 p-10'>
          <p className='text-lg  py-5'> {value.legals}</p>

        </div>

      </div>);
    }

  }


  return renderContent();




}

export default Body