/**
*
* WizardThirdStep
*
*/

import React from 'react';
import InputBasic from './../InputBasic'
import styles from './styles.css';

class WizardThirdStep extends React.Component {
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={e=>console.log("submitting")}>
          <legend>Income Tax Details</legend>
          <InputBasic label="Pan No" placeholder="Pan Card No" />
          <InputBasic label="VAT No" placeholder="Vat No" />
          <InputBasic label="TIN No" placeholder="TIN No" />
          <legend>Bank Details</legend>
          <InputBasic label="Account No" placeholder="Bank Account number" />
          <InputBasic label="Account Name" placeholder="Bank Account name" />
          <InputBasic label="Bank IFSC Code" placeholder="Bank IFSC Code" />
        </form>
      </div>
    );
  }
}

export default WizardThirdStep;
