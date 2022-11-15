import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux'


const Header = () => {

    var { value = [] } = useSelector((state) => state.info)
    function renderContent() {
        if (isMobile) {
            return (
            <div className='bg-gray-300 flex flex-col justify-center text-center px-4 py-10'>
                <div> 
                    <h1 className='text-4xl  p-4'> {value?.header?.h1}</h1>
                </div>
                 <div> 
                     <p className='text-4xl  mt-10 font-light '> {value?.header?.discount}</p>
                </div>
                   {value?.header?.paragraphs.map((paragraph, index) =>
                    <div key={index}> 
                    <p className='text-lg p-4' > {paragraph}</p>
                    </div>
                 )}
             
          

         </div>)
        }

        return (
            <div className='bg-gray-300 flex flex-col justify-start '>
               <div className='w-100 px-40 py-10'>
               <div className='flex flex-row  max-w-lg'> 
                 <h1 className='text-5xl  p-4'> {value?.header?.h1}</h1>
                 </div>
                <div className='flex flex-row space-x-2'>
                    <div> 
                         <p className='text-4xl ml-24 mt-10 font-light '> {value?.header?.discount}</p>
                    </div>
                    <div className='flex flex-col' >   
                     {value?.header?.paragraphs.map((paragraph, index) =>
                      <p key={index} className='text-2xl p-4' > {paragraph}</p>
                      )}
                      </div>
                </div>
               </div>

            </div>
        );

    }


    return renderContent();




}

export default Header