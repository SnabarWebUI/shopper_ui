/**
*
* WizardForthStep
*
*/

import React from 'react';
import InputBasic from './../InputBasic'
import styles from './styles.css';

class WizardForthStep extends React.Component {
  render() {
    return (
      <div className={styles.wizardForthStep}>
        <form action="#" className="form-horizontal">
          <legend>Set Up Credentials</legend>
          <InputBasic label="Email" placeholder="Email" />
          <InputBasic label="Username" placeholder="Choose Username" />
          <InputBasic label="Password" placeholder="Set password" />
        </form>
      </div>
    );
  }
}

export default WizardForthStep;
