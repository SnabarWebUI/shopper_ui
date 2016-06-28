/**
*
* WizardFirstStep
*
*/

import React from 'react';
import styles from './styles.css';
import { reduxForm, Field } from 'redux-form/immutable'
export const fields = ['shop_name','owner'];

class WizardFirstStep extends React.Component {
  render() {
    const {
      handleSubmit
    } = this.props
 
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
      <Field name="shop_name" component={shop_name=>
        <div className="form-group">
            <label className="col-sm-3 control-label">Shop name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control input-sm" placeholder={"Enter shop name"} {...shop_name}/>
            </div>
          </div>
      }/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'firstStep'
})(WizardFirstStep)
