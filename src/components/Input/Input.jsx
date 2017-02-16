import React from 'react';

const Input = ( props ) => {
  if ( props.field.nature === 'select' ) {
    
    const options = props.field.field_options.map( (option, index) => {
      return <option key={`option ${index}`} value={option.option_value} selected={option.selected}>{option.localized_name}</option>
    })

    return (
        <div>
        <select name="" id="">
          {options}
        </select>
      </div>
    )
  }
  return (
      <div>
      <label htmlFor="">{props.field.localized_name}</label>
      <input {...props.input} type={props.field.nature} name={props.field.name}/>
    </div>
  )
}

export default Input;