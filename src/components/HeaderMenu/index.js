import React, { Component } from 'react';
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

class HeaderMenu extends Component {
  render() {
    return (
      <nav className="header-menu">
        <ul className="text">
          {MENU_ITEMS.map((item) => (
            <li className={classNames({'header-menu--active': item.active})}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{item.text}{item.sub ? <i className='arrow-up' /> : null}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;