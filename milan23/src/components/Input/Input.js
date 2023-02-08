import React from 'react'
import './input.css'  

function Input(props){
  // eslint-disable-next-line react/prop-types
  const {placeholder} = props;

  return (
    <div>
    {
      //  eslint-disable-next-line react/prop-types
    }
      <input className="input" placeholder={placeholder}/>
    </div>
  )
}


export default Input;
