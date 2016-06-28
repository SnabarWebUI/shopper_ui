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
      <div>
        <legend>Personal Info<small>&nbsp; Let us know about you</small></legend>
        <form className="form-horizontal" onSubmit={data => console.log(data)}>
        {/* Shop name  */}
        <Field name="shop_name" component={shop_name => 
        <div className="form-group">
            <label className="col-sm-3 control-label">Shop Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control input-sm" placeholder="Shop name" {...shop_name}/>
            </div>
          </div>
        }  />
        {/* Shop owner name  */}
        <Field name="owner_name" component={owner_name=>
          <div className="form-group">
            <label className="col-sm-3 control-label">Owner</label>
            <div className="col-sm-9">
              <input type="text" className="form-control input-sm" placeholder="Owner Name" {...owner_name}/>
            </div>
          </div>
        } />
          </form>
        </div>
    );
  }
}

export default reduxForm({
  form: 'firstStep'
})(WizardFirstStep)
