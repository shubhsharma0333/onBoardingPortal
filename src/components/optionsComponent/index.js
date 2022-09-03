import React from 'react'

const OptionComponent = ({item , onClick, id, selected}) => {

  return (
    <div className={selected === id ? "selected" : "option"} onClick={onClick}  id={id}>
        <h3 className="">{item.title}</h3>
        <p className='subb'>{item.subtitle}</p>
    </div>
  )
}

export default OptionComponent;