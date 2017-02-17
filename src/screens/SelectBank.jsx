import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Input } from 'components';
import { Field, reduxForm }   from 'redux-form'
import axios from 'axios'
import * as connectActions from '../actions/connectActions';

@reduxForm({
  form: 'login',
})
@connect( state => ({
  banks: state.dataReducer.banks,
  inputFields: state.dataReducer.inputFields,
}), connectActions)
export default class SelectBank extends Component {

  handleSearch = (query) => {
    this.props.fetchBanks(query);
  }

  handleFormSubmit = (dataObj) => {
    this.props.sendData(dataObj)
  }

  state = {
    loginOpened: false,
  }

  showLogin = () => {
    this.setState({
      loginOpened: true,
    })
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const required = value => value ? undefined : 'Required';
    const banksList = this.props.banks.map( (bank, index) => {
      return bank.title
    })
    const inputWrapClass = this.state.loginOpened ? "inputs-wrap show" : "inputs-wrap"
    const inputs = this.props.inputFields.map( (field, index) => {
      return <Field 
        validate={[ required ]} 
        field={field} 
        key={`input ${index}`} 
        component={Input} 
        type={field.nature} 
        name={field.name} 
        label={field.localized_name} 
      />
    })

    return (
      <div>
        <div className="logo">Connect</div>
        <form action="" onSubmit={handleSubmit(this.handleFormSubmit)}>
          
          <AsyncTypeahead
            labelKey="login"
            onChange={this.showLogin}
            onSearch={this.handleSearch}
            options={this.props.banks}
            placeholder="Search for a Github user..."
            renderMenuItemChildren = {(option, props, index) => (
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
            )}
          />
          <div className={inputWrapClass}>
            <br/>
            <br/>
            {inputs}
          </div>
          <div>
            <br/>
            <br/>
            <input type="button" value="Cancel" disabled={pristine || submitting} onClick={reset} />
            &nbsp;
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}