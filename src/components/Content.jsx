import React, {useState, useEffect} from 'react'
import { formInfo } from '../utils/form'
import Header from './Header'
import InputField from './inputComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import OptionComponent from './optionsComponent'
import StatusBar from './StatusBar'


const Content = () => {
    const[content, setContent] = useState(formInfo)
    const[page, setPage] = useState(1)
    const[disable, setDisable] = useState(true)
    const[optionSelect, setOptionSelect] = useState("")


    const handleChange = (e) =>{
      const {name, value} = e.target;      
      let temp = content[page].extract.feilds;
      temp?.map((feild) => {
        if(feild.name === name){
          feild.value = value
        }
      })
      console.log(temp)
      setContent((prev)=> ({
        ...prev,
        [page]:{...prev[page],
          extract:{
            ...prev[page].extract,
            feilds:temp
          }
        }
      }))
      console.log(content)
    }

    const handlePage = () =>{
      
      setPage((prev)=> prev +1)

    }

    const handleOptions =(e) =>{
      let name = e.target.id;
      content[page].extract.feilds.map((item)=>{
        if(name===item.title){
          item.value = true;
          setOptionSelect(item.title)
        }else{
          item.value= false;
        }
      })

    }

  return (
    <div className='container'>
        <h1 className="heading"><span className='eden-span'><FontAwesomeIcon icon={faCoffee} /></span>Eden</h1>
        <StatusBar content={content} page={page} />
        <Header title={content[page]?.title} page={page} content={content} subtitle={content[page]?.subtitle} /> 
      <div className='input-container'>
        {content[page]?.extract?.type ==="input" && (
            content[page].extract.feilds.map((item,i)=> {
              
                return (<InputField key={i} label={item.label}  decor={item.style} onChange={handleChange} name={item.name} value={item.value} placeholder={item.placeholder} span={item.span}/>)
            })
        )}
      </div>
      <div className='options-container' >
        {content[page]?.extract?.type=== "div" && (
          content[page].extract.feilds.map((item,i)=>{
            console.log(item.title)
            return(<OptionComponent item={item} key={i} onClick={handleOptions} id={item.title} selected={optionSelect}/>)
          })
        )}
      </div>  
        <button onClick={handlePage} className="button">{page === 4 ? "Launch Eden" : "Create Workspace"}</button>
      
      
    </div>
  )
}

export default Content