import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Input } from 'components';
import { Field, reduxForm }   from 'redux-form'
import axios from 'axios'
import * as connectActions from '../actions/connectActions';

class SelectBank extends Component {

  handleSearch = (query) => {
    this.props.fetchUsers(query);
  }

  handleFormSubmit = (dataObj) => {
    this.props.sendData(dataObj)
  }

  //bad example
  // used here because input json hardcoded
  state = {
    loginOpened: false,
  }

  //bad example
  // used here because input json hardcoded
  showLogin = () => {
    this.setState({
      loginOpened: true,
    })
  }
        // validate={[ required ]} 
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    // const required = value => value ? undefined : 'Required';
    const usersList = this.props.users.map( (bank, index) => {
      return bank.title
    })
    const inputWrapClass = this.state.loginOpened ? "inputs-wrap show" : "inputs-wrap"
    const inputs = this.props.inputFields.map( (field, index) => {
      return <Field 
        field={field} 
        key={`input ${index}`} 
        component={Input} 
        type={field.nature} 
        name={field.name} 
        label={field.localized_name} 
      />
    })
    const renderMenuTypeAhead = (option, props, index) => (
      <div>
        <img
          src={option.avatar_url}
          style={{
            height: '24px',
            marginRight: '10px',
            width: '24px',
          }}
        />
        <span>{option.login}</span>
      </div>
    )
    
    return (
      <div>
        <form action="" onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className="input-wrap">
           <AsyncTypeahead
            labelKey="login"
            onChange={this.showLogin}
            onSearch={this.handleSearch}
            options={this.props.users}
            placeholder="Search for a Github user..."
            renderMenuItemChildren = {renderMenuTypeAhead}
          /> 
          </div>       
          <div className={inputWrapClass}>
            {inputs}
          </div>
          <div className="form-buttons-wrap">
            <input type="button" className="reset" value="Cancel" disabled={pristine || submitting} onClick={reset} />
            <input type="submit" className="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

SelectBank = reduxForm({
  form: 'login',
})(SelectBank);
SelectBank = connect( state => ({
  users: state.dataReducer.users,
  inputFields: state.dataReducer.inputFields,
}), connectActions)(SelectBank);
export default SelectBank;