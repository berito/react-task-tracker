
import React from 'react'
const Button = ({color,text,onClick}) => {
    const buttonStyle={
     backgroundColor:color
    }
    // const onClick=(event)=>{
    //   console.log(event)
    // }
  return (
    <div>
         <button onClick={onClick} className="btn" style={buttonStyle}>{text}</button>
    </div>
  )
}

export default Button