import React, { Component } from 'react';

import { Footer } from 'components/main/footer/footer';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './screen.style.scss';

export class Screen extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string
  };

  static defaultProps = {
    children: null,
    className: ''
  };

  getClassNames() {
    const { className } = this.props;
    const result = classNames('animated', 'fadeIn', className, styles.root);

    return result;
  }

  render() {
    const { children } = this.props;
    const className = this.getClassNames();

    return (
      <div className={className}>
        {children}
        <Footer />
      </div>
    );
  }
}
