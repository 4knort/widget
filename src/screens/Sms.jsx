import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm }   from 'redux-form';
import { Input } from 'components';
import * as connectActions from '../actions/connectActions';

class Loader extends Component {

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
      <div className="loader">
        <img src="http://www.centurylink.com/etc/designs/ewcm/clientlib/images/loading_spinner.gif" alt=""/>
        <form action=""  onSubmit={handleSubmit(this.handleFormSubmit)}>
          {inputs}
          <div className="form-buttons-wrap">
            <input type="submit" className="submit submit-full" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

Loader = reduxForm({
  form: 'sms',
})(Loader);
Loader = connect( state => ({
  inputFieldsSms: state.dataReducer.inputFieldsSms,
}), connectActions)(Loader);
export default Loader;