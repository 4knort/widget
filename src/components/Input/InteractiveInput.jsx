import React from 'react';
import { Field } from 'redux-form';

const InteractiveInput = ( props ) => {
  if(props.field.length) {
    const { field, input } = props;
    const { touched, error } = props.meta;

    return (
        <div className="input-wrap">
        <label className="label" htmlFor="">{field}</label>
        <input className="input" {...input} type={field} name={field} placeholder={field}/>
        { touched && error && <span className="error">{error}</span> }
      </div>
    ) 
  }
}

export default InteractiveInput;