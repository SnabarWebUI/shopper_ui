/**
*
* SampleReduxForm
*
*/

import React from 'react';
import {reduxForm, Field} from 'redux-form'


class SampleReduxForm extends React.Component {
  render() {
    return (
      <div>
      <form className="form-horizontal" handleSubmit={data=> console.log(data)} >
        <Field name="username" component={username => <input type="text" placeholder="Username" /> } />
      </form>
      </div>
    );
  }
}

export default reduxForm({form: 'redux_form'})(SampleReduxForm)
