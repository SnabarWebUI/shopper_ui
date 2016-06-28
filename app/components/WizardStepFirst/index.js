/**
*
* WizardStepFirst
*
*/

import React from 'react';

import styles from './styles.css';
import {reduxForm, Field} from 'redux-form/immutable'

export const renderField = props => (
<div className="form-group">
  <label className="col-sm-3 control-label">{props.placeholder}</label>
  <div className="col-sm-9">
    <input type="text" className="form-control input-sm" placeholder={props.placeholder} {...props}/>
  </div>
</div>
)

const WizardThirdStep = props => {
  const {handleSubmit} = props;
  return (
    <form>
      <legend>Income Tax Details</legend>
      <Field name="pan_card" component={renderField} placeholder="Enter Pan no"></Field>
      <Field name="vat_no" component={renderField} placeholder="Enter Vat no"></Field>
      <Field name="tin_no" component={renderField} placeholder="Enter TIN No"></Field>
      <legend>Income Tax Details</legend>
      <Field name="account_no" component={renderField} placeholder="Enter Account no"></Field>
      <Field name="account_name" component={renderField} placeholder="Enter Account name"></Field>
      <Field name="bank_ifsc_code" component={renderField} placeholder="Enter bank IFSC code"></Field>
    </form>
  )
}

const wizardStepThree = reduxForm({form:'wizard'})(WizardThirdStep)

const WizardSecondStep = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} >
      <Field name="categories" type="text" component={renderField} placeholder="Enter name for category" />
      <Field name="sub_categories" type="text" component={renderField} placeholder="Select subcategories" />
    </form>
  )
}

const wizardSecondStep = reduxForm({form: 'wizard'})(WizardSecondStep)

const WizardStepFirst = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="shop_name" type="text" component={renderField} placeholder="Shop Name"/>
      <Field name="owner_name" type="text" component={renderField} placeholder="Owner Name"/>
      <Field name="email" type="email" component={renderField} placeholder="Email"/>
      <Field name="Mobile" type="number" component={renderField} placeholder="Mobile No"/>
      <Field name="Address" type="text" component={renderField} placeholder="Address"/>
      <div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
        <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',  // a unique identifier for this form
  destroyOnUnmount: false
})(WizardStepFirst);
