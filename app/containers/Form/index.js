/*
 *
 * Form
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectForm from './selectors';
import WizardFirstForm from './../../components/WizardFirstStep'
import styles from './styles.css';

export class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <WizardFirstForm handleSubmit={()=>{}} />
      </div>
    );
  }
}

const mapStateToProps = selectForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
