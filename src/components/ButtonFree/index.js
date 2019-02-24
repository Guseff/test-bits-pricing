import React, { Component } from 'react';

import './style.css';

class ButtonFree extends Component {
  render() {
    return (
      <button className="button-free">
        {this.props.text}
      </button>
    )
  }
}

export default ButtonFree;