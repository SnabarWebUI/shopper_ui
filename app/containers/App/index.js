/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import WizardFirstStep from './../../components/WizardFirstStep'
import WizardThirdStep from './../../components/WizardThirdStep'
import WizardForthStep from './../../components/WizardForthStep'
import Form from './../../containers/Form'
import SampleForm from './../SampleForm'

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      page : 1,
    }
  }

  static propTypes = {
    children: React.PropTypes.node,
  };

  handleSubmit(data) {
    console.log("data is ", data)
  }

  render() {
    return (
      <WizardFirstStep onSubmit={(data)=>{
        console.log("Submitted form data : ", data)
      }} />
    );
  }
}
