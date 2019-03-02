import React from 'react';

import './style.css';

const PAYMENTS = [
  {
    img: require('../../assets/images/ico-bitcoin.svg'),
    text: 'bitcoin',
  },{
    img: require('../../assets/images/ico-litecoin.svg'),
    text: 'litecoin',
  },{
    img: require('../../assets/images/ico-ethereum.svg'),
    text: 'ethereum',
  },{
    text: '+ 7 more',
  },
];

const PaymentsBlock = () => (
  <div className="payment">
    <div className='payment-title'>
      Supported payment methods:
    </div>
    <ul>
      {PAYMENTS.map((item, i) => (
        <li key={i}>
          <button className='payment-button'>
            {item.img ? <img alt='' src={item.img} /> : null}
            {item.text}
          </button>
        </li>
      ))}
    </ul>
    <div className='payment-note'>
      Currently we accept payments only in cryptocurrencies.
    </div>
  </div>
);

export default PaymentsBlock;