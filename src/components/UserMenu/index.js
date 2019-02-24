import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

const USER_ITEMS = [
  {
    text: 'Login',
  },{
    text: 'Sign Up',
    blue: true,
  },
];

class UserMenu extends Component {
  render() {
    return (
      <div className="user-menu">
        <ul>
          {USER_ITEMS.map((item) => (
            <li>
              <button className={classNames('user-menu-button', {'user-menu-button--blue': item.blue})}>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserMenu;