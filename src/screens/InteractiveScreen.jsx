import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm }   from 'redux-form';
import { InteractiveInput } from 'components';
import * as connectActions from '../actions/connectActions';

class InteractiveScreen extends Component {

  handleFormSubmit = ({ data }) => {
    this.props.sendSmsData(data);
  }

  render() {
    const imageHTML = {__html: this.props.html}
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const inputs = this.props.interactiveFieldsNames.map( (field, index) => {
      console.log(field)
      return <Field 
        field={field} 
        key={`input-${index}`} 
        component={InteractiveInput} 
        type={field} 
        name={field} 
        label={field} 
      />
    })

    return (
      <div className="loader">
        <img src="http://www.centurylink.com/etc/designs/ewcm/clientlib/images/loading_spinner.gif" alt=""/>
        <form action=""  onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div dangerouslySetInnerHTML={imageHTML} />
          {inputs}
          <div className="form-buttons-wrap">
            <input type="submit" className="submit submit-full" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

InteractiveScreen = reduxForm({
  form: 'interactive',
})(InteractiveScreen);
InteractiveScreen = connect( state => ({
  interactiveFieldsNames: state.dataReducer.interactiveFieldsNames,
  html: state.dataReducer.html,
}), connectActions)(InteractiveScreen);
export default InteractiveScreen;