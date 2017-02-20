import React from 'react';
import { Field } from 'redux-form';

const Input = ( props ) => {
  const { field, input } = props;
  const { touched, error } = props.meta;

  if ( field.nature === 'select' ) {
    const options = field.field_options.map( (option, index) => {
      return <option key={`option ${index}`} value={option.option_value} selected={option.selected}>{option.localized_name}</option>
    })

    return (
      <div className="input-wrap">
        <Field component="select" name={field.name} id="">
          {options}
        </Field>
      </div>
    )
  }

  return (
      <div className="input-wrap">
      <label className="label" htmlFor="">{field.localized_name}</label>
      <input className="input" {...input} type={field.nature} name={field.name} placeholder={field.localized_name}/>
      { touched && error && <span className="error">{error}</span> }
    </div>
  )
}

export default Input;