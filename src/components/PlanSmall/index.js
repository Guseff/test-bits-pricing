import React, { Component } from 'react';

import './style.css';
import ButtonFree from '../ButtonFree';

class PlanSmall extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="plan-small">
        <div className="plan-small--title">
          {data.title}
        </div>
        {data.subtitle}
        <div className="plan-small--price">
          &euro;{data.price}
        </div>
        <div className="plan-small--lowprice">
          or &euro;{data.low_price} per month if billed annually
        </div>
        <ButtonFree text='Start free trial' />
        <div className="plan-small--li">
          All our standard features
        </div>
        <div className="plan-small--li">
          Unlimited exchanges
        </div>
        <div className="plan-small--li">
          <span>{data.month_limit ? ('€' + data.month_limit + ',000') : 'Unlimited' }</span> monthly trading limit
        </div>
        <div className="plan-small--li">
          Portfolio
        </div>
        <div className="plan-small--li">
          Smart trades
        </div>
        <div className="plan-small--li">
          Shadow orders 
        </div>
        <div className="plan-small--li">
          {data.arbitrage && <span>Arbitrage</span>}
        </div>
        <div className="plan-small--li">
          {data.priority && <span>Priority Support</span>}
        </div>
      </div>
    )
  }
}

export default PlanSmall;