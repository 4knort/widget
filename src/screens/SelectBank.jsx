import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Input } from 'components';
import { Field, reduxForm }   from 'redux-form'
import * as connectActions from '../actions/connectActions';

@reduxForm({
  form: 'login',
  fields: ['login', 'password'],
})
@connect( state => ({
  banks: state.dataReducer.banks,
  fields: state.dataReducer.fields,
}), connectActions)
export default class SelectBank extends Component {
  componentWillMount() {
    this.props.fetchBanks();
  }

  handleFormSubmit = ({login, password}) => {
    console.log(login, password)
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
    const { handleSubmit, fields: {login, password} } = this.props
    const banksList = this.props.banks.map( (bank, index) => {
      return bank.title
    })
    const inputWrapClass = this.state.loginOpened ? "inputs-wrap show" : "inputs-wrap"
    const inputs = this.props.fields.map( (field, index) => {
      return <Field field={field} key={`input ${index}`} component={Input} type={field.nature} name={field.name} label={field.localized_name} />
    })

    return (
      <div className="widget">
        <div className="logo">Connect</div>
        <form action="" onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Typeahead
            onChange={this.showLogin}
            minLength={1}
            options={banksList}
          />
          <div className={inputWrapClass}>
            <br/>
            <br/>
            {inputs}
          </div>
          <div>
            <br/>
            <br/>
            <input type="button" value="Cancel" onClick={this.onCancelClick} />
            &nbsp;
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}