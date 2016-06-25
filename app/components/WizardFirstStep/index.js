/**
*
* WizardFirstStep
*
*/

import React from 'react';
import styles from './styles.css';
import { reduxForm } from 'redux-form'
export const fields = ['shop_name','owner'];

class WizardFirstStep extends React.Component {
  render() {
    const {
      fields: {shop_name,owner,email,mobile,area,latitude,longitude,address},
      handleSubmit,
    } = this.props
    return (
      <div>
        <legend>Personal Info<small>&nbsp; Let us know about you</small></legend>
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-3 control-label">Shop Name</label>
            <div className="col-sm-9">
              <input type="text" className="form-control input-sm" id="inputPassword3" placeholder="Shop name" {...shop_name}/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-3 control-label">Owner</label>
            <div className="col-sm-9">
              <input type="text" className="form-control input-sm" id="inputPassword3" placeholder="Owner Name" {...owner}/>
            </div>
          </div>
          </form>
        </div>
    );
  }
}

export default reduxForm({
  form: 'firstStep',
  fields
})(WizardFirstStep)