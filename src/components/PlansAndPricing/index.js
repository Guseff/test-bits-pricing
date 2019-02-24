import React from 'react';

import Currency from '../CurrencyChange';
import PlanWrapSmall from './PlanWrapperSmall';

import './style.css';
import PlanSmall from '../PlanSmall';

const PLANS = [
  {
    title: 'Advanced',
    subtitle: 'Advanced features and arbitrage',
    price: 39,
    low_price: 31,
    month_limit: 100,
    arbitrage: true,
  },{
    title: 'Pro',
    subtitle: 'Unlimited possibilities for professionals',
    price: 97,
    low_price: 78,
    arbitrage: true,
    priority: true,
  },{
    title: 'Basic',
    subtitle: 'More power and trading tools',
    price: 17,
    low_price: 14,
    month_limit: 25,
  },
];

const PlansAndPricing = () => (
  <div className="plans-wrapper">
    <div className="plans">
      <div className="plans-title">
        Plans &amp; Pricing
      </div>
      <div className="plans-subtitle">
        One tool to rule all your cryptocurrency assets. <br />
        Start with a 14-day free trial. No credit card required!
      </div>
      <Currency curr='eur' />
      <div className='plans-container'>
        {PLANS.map((data, i) => (
          <PlanWrapSmall key={i}>
            <PlanSmall data={data} />
          </PlanWrapSmall>
        ))}
      </div>
      <div className='plans-note'>
        Please note that our prices are VAT exclusive.<br />
        VAT will be billed to EU customers in line with the applicable rates of their member state unless a valid VAT number is provided.
      </div>
    </div>
  </div>
);

export default PlansAndPricing;