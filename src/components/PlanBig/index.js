import React, { Component } from 'react';

import './style.css';
import ButtonFree from '../ButtonFree';

class PlanBig extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="plan-big">
        <div className="plan-big--wrapper">
          <div className="plan-big--title">
            Free plan
          </div>
          <div className="plan-big--subtitle">
            All standard features included. <span>€500</span> trade limit per month.
          </div>
          <div className="plan-big--caution">
            By choosing free plan you may loose important features 
          </div>
        </div>
        <div className="plan-big--wrapper">
          <div className="plan-big--price">
            &euro;0
          </div>
          <div className="plan-big--supports">
            Free, Ads Supported
          </div>
        </div>
        <div className="plan-big--wrapper">
          <ButtonFree text='Start free trial' big={true} />
        </div>
      </div>
    )
  }
}

export default PlanBig;