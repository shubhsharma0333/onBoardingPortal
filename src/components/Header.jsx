import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, {useState, useEffect} from 'react'

const Header = ({title, subtitle, page ,content}) => {

  const [name, setName] = useState("")
  useEffect(()=>{
    content[page]?.extract?.feilds?.map((item)=>{
      if(item.name ==="displayName"){
        setName(item.value)
        console.log(item.value)
      }
    })
  }, [content,page])

  return (
    <div>
        <h1 className='heading'>{title} {page === 4 && name }</h1>
        <p className='sub'>{subtitle}</p>
    </div>
  )
}

export default Header