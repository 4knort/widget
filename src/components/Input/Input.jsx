import React from 'react';

const Input = ( { field }) => {
  if ( field.nature === 'select' ) {
    console.log(field)
    const options = field.field_options.map( (option, index) => {
      return <option key={`option ${index}`} value={option.option_value} selected={option.selected}>{option.localized_name}</option>
    })

    return <div>
      <select name="" id="">
        {options}
      </select>
    </div>
  }

  return <div>
    <label htmlFor="">{field.localized_name}</label>
    <input type={field.nature} name={field.name}/>
  </div>
}

export default Input;