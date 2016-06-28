/*
 *
 * SampleForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import {reduxForm,Field} from 'redux-form/immutable'

const renderField = props => (
  <div>
    <label>{props.placeholder}</label>
    <div>
      <input {...props}/>
      {props.touched && props.error && <span>{props.error}</span>}
    </div>
  </div>
)

const ImmutableForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  console.log(this.props);
  return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} placeholder="Username"/>
        <Field name="email" type="email" component={renderField} placeholder="Email"/>
        <Field name="age" type="number" component={renderField} placeholder="Age"/>
        <div>
          <button type="submit" className="btn btn-info" >Submit</button>
        </div>
      </form>
    )
}

class SampleForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {handleSubmit} = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
      <Field name="firstname" component={firstname => 
        <div className="form-group">
          <label htmlFor="" className="control-group col-md-3">First Name</label>
          <div className="col-md-9">
            <input type="text" className="input-sm" placeholder="First Name" {...firstname}/>
          </div>
        </div>
      }/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sampleForm'
})(SampleForm)
