import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class Currency extends Component {
  render() {
    return (
      <div className="currency">
        <button className={classNames('currency-name', {
                'currency-name--active': this.props.curr === 'usd',
              })}>
          USD
        </button>
        <div className="currency-switch">
          <div className={classNames('currency-ind', {
              'currency-ind--usd': this.props.curr === 'usd',
              'currency-ind--eur': this.props.curr === 'eur',
            })}></div>
        </div>
        <button className={classNames('currency-name', {
                'currency-name--active': this.props.curr === 'eur',
              })}>
          EUR
        </button>
      </div>
    );
  }
}

export default Currency;