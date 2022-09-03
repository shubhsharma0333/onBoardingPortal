import React, { useEffect, useState } from 'react'
import { gradientPercent } from '../utils/progressLogic';

const StatusBar = ({page ,content}) => {
    const[gradient, setGradient] =useState("");
    
    useEffect(()=>{
        let grad = gradientPercent(page,Object.keys(content).length)
        setGradient(grad);
        console.log(grad)    
    },[page,content])

  return (
    <div className='progressBar'>
        {Object.keys(content).map((num) =>{
            return(<div className='bullets' style={page >= num ? {backgroundColor: "rgb(115, 53, 239)", color:"white"} : null}>
                <p>{num}</p>
            </div>)
        })}
        <div className='bar' style={{ background: `linear-gradient(to left, ${gradient})` }}>

        </div>
    </div>
  )
}

export default StatusBar