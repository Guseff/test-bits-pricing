import React from 'react';

import './style.css';

const INCL = [
  {
    img: require('../../assets/images/30-exchanges-ic.svg'),
    text: '30+ supported exchanges',
  },{
    img: require('../../assets/images/10-coins-ic.svg'),
    text: '10,000+ trading pairs',
  },{
    img: require('../../assets/images/mobile-app-ic.svg'),
    text: 'Mobile Application (in development)',
  },{
    img: require('../../assets/images/friendly-interface-ic.svg'),
    text: 'User friendly interface',
  },{
    img: require('../../assets/images/demo-mode-ic.svg'),
    text: 'Demo Practice mode',
  },{
    img: require('../../assets/images/portfolio-ic.svg'),
    text: 'Portfolio management',
  },{
    img: require('../../assets/images/portfolio-ic.svg'),
    text: 'Portfolio Data export',
  },{
    img: require('../../assets/images/currency-ic.svg'),
    text: 'Local currency conversion',
  },{
    img: require('../../assets/images/limitshadoworders-ic.svg'),
    text: 'Limit orders',
  },{
    img: require('../../assets/images/marketorders-ic.svg'),
    text: 'Market orders',
  },{
    img: require('../../assets/images/stoptake-profit-ic.svg'),
    text: 'Smart orders',
  },{
    img: require('../../assets/images/stoptake-profit-ic.svg'),
    text: 'Shadow orders',
  },{
    img: require('../../assets/images/market-cap-ic.svg'),
    text: 'Market cap',
  },{
    img: require('../../assets/images/high-security-ic.svg'),
    text: 'High-end security',
  },{
    img: require('../../assets/images/email-support-ic.svg'),
    text: 'Email support',
  },{
    img: require('../../assets/images/alerts-ic.svg'),
    text: 'Alerts',
  },{
    img: require('../../assets/images/fast-charts-ic.svg'),
    text: 'Fast charts',
  },{
    img: require('../../assets/images/high-security-ic.svg'),
    text: 'Market depth tool',
  },{
    img: require('../../assets/images/tech-indicators-ic.svg'),
    text: '15 technical indicators',
  },{
    img: require('../../assets/images/noadd-trading-ic.svg'),
    text: 'No additional trading free',
  },{
    img: require('../../assets/images/crypto-ic.svg'),
    text: 'Crypto-to-Crypto Exchange',
  },{
    img: require('../../assets/images/night-mode-ic.svg'),
    text: 'Night mode',
  },{
    img: require('../../assets/images/binocular-ic.svg'),
    text: 'Watchlist',
  },{
    img: require('../../assets/images/detector-ic.svg'),
    text: 'Market anomaly detector',
  },
];

const Includes = () => (
  <div className="includes">
    <div className="includes-title">
      All plans include:
    </div>
    <div className="includes-list">
      {INCL.map((item, i) => (
        <div className='includes-item' key={i}>
          <img alt='' src={item.img} />
          {item.text}
        </div>
      ))}
    </div>     
  </div>
);

export default Includes;