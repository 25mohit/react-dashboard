import React from 'react'

const Input = ({ type, placeholder, onChange, value, name}) => {
  return (
    <div className='input-wrapper'>
        <input type={type} className='input' onChange={onChange} value={value} name={name} required/>
        <label htmlFor={name} className='input-placeholder'>{placeholder}</label>
    </div>
  )
}

export default Input