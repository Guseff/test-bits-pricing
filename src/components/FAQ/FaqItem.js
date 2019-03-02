import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

import './style.css';

class FaqItem extends Component {
  state = {
    height: 0,
  };

  toggle = () => {
    const {height} = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };

  render() {
    const {height} = this.state;

    const buttonClass = classNames('faq-item--question',
                                    {'faq-item-question--not-bold': height === 0,}
                                  );
    const beforeClass = classNames('faq-item--question-before',
                                  {'faq-item-question-before--not-bold': height === 0,}
                                );

    return (
      <div className='faq-item'>
        <button onClick={this.toggle} className={buttonClass}>
          <div className={beforeClass}>
            {height === 0 ? '\u25BA' : '\u25BC'}
          </div>
          {this.props.question}
        </button>
        <AnimateHeight duration={500} height={height}>
          <div className='faq-item--answer'>
            {this.props.answer}
          </div>
        </AnimateHeight>
      </div>
    )
  }
}

export default FaqItem;