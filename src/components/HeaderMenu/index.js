import React, { Component } from 'react';

import './style.css';

const MENU_ITEMS = [
  {
    text: 'Overview',
  },{
    text: 'Pricing',
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
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;