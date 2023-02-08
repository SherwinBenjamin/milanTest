import React from 'react'
import './button.css'

function Button(props){
    // eslint-disable-next-line react/prop-types
    const {value} = props;
    return (
      // eslint-disable-next-line react/prop-types
      <input className='button' type="button" value={value}/>
    )
}

export default Button;
