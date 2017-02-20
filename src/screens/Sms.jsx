import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm }   from 'redux-form';
import { Input } from 'components';
import * as connectActions from '../actions/connectActions';

@reduxForm({
  form: 'sms',
})
@connect( state => ({
  inputFieldsSms: state.dataReducer.inputFieldsSms,
}), connectActions)
export default class Loader extends Component {

  handleFormSubmit = ({ sms }) => {
    this.props.sendSmsData(sms);
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const inputs = this.props.inputFieldsSms.map( (field, index) => {
      return <Field 
        field={field} 
        key={`input-${index}`} 
        component={Input} 
        type={field.nature} 
        name={field.name} 
        label={field.localized_name} 
      />
    })
    
    return (
      <div>
        <img src="http://cdn.idevie.com/wp-content/uploads/2013/01/LoadingCircle_finalani2.gif" alt=""/>
        <form action=""  onSubmit={handleSubmit(this.handleFormSubmit)}>
          {inputs}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}