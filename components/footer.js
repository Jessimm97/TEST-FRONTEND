import { isMobile } from 'react-device-detect';

import { useSelector } from 'react-redux'


const Footer = () => {
  var { value = [] } = useSelector((state) => state.info)


  function renderContent() {
    if (isMobile) {
      return (<div className='bg-gray-900 text-white flex  flex-row justify-center'>
      <p className='text-xs p-5'> {value?.footer?.copy} </p>
{value?.footer?.links.map((links,index)=>
<a key={index} className='text-xs p-5' href={links.href}>{links.tittle} </a>
)}
  </div>)
    }

    return (<div className='bg-gray-900 text-white flex  flex-row justify-center'>
        <p className='p-5'> {value?.footer?.copy} </p>
 {value?.footer?.links.map((links,index)=>
 <a key={index} className='p-5' href={links.href}>{links.tittle} </a>
 )}
    </div>)

  }


  return renderContent();




}

export default Footer