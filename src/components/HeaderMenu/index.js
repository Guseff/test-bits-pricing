import React from 'react';
import classNames from 'classnames';

import './style.css';

const MENU_ITEMS = [
  {
    text: 'Overview',
  },{
    text: 'Pricing',
    active: true,
  },{
    text: 'Security',
  },{
    text: 'About',
    sub: true,
  },{
    text: 'Knowledge Base',
  },
];

const HeaderMenu = () => (
  <nav className="header-menu">
    <ul className="text">
      {MENU_ITEMS.map((item, i) => (
        <li key={i} className={classNames({'header-menu--active': item.active})}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>{item.text}{item.sub ? <i className='arrow-up' /> : null}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderMenu;