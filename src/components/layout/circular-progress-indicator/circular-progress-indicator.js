import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './circular-progress-indicator.style.scss';

const DEFAULT_SIZE = 3;

export class CircularProgressIndicator extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    color: null,
    size: DEFAULT_SIZE,
  };

  getClassNames() {
    const { className, color } = this.props;

    const result = classNames(styles.root, className, {
      [styles[color]]: color,
    });

    return result;
  }

  getSize() {
    const { size } = this.props;
    return `${size}rem`;
  }

  getBorderWidth() {
    const { size } = this.props;
    if (size >= DEFAULT_SIZE) return styles['border-width-large'];

    return `${(size / 5).toFixed(2)}rem`;
  }

  getStyles() {
    const value = this.getSize();
    return { width: value, height: value };
  }

  render() {
    const className = this.getClassNames();
    const style = this.getStyles();
    const borderWidth = this.getBorderWidth();
    const indicatorStyles = { borderWidth };

    return (
      <div className={className} style={style}>
        <div className={styles.indicator} style={indicatorStyles} />
      </div>
    );
  }
}
