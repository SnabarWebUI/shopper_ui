/**
*
* InputBasic
*
*/

import React from 'react';

import styles from './styles.css';

class InputBasic extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label for="inputPassword3" className="col-sm-3 control-label">{this.props.label}</label>
        <div className="col-sm-9">
          <input type="text" className="form-control input-sm" id="inputPassword3" placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

export default InputBasic;
