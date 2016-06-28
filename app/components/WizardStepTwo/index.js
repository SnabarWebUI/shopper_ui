/**
*
* WizardStepTwo
*
*/

import React from 'react';
import {reduxForm,Field} from 'redux-form/immutable'
import {renderField} from './../WizardStepFirst'
import styles from './styles.css';

const WizardSecondStep = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} >
      <Field name="categories" type="text" component={renderField} placeholder="Enter name for category" />
      <Field name="sub_categories" type="text" component={renderField} placeholder="Select subcategories" />

      <div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'wizard', destroyOnUnmount: false})(WizardSecondStep)
