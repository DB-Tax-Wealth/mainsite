import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './progress-indicator-overlay.style.scss';
import { CircularProgressIndicator } from '../circular-progress-indicator/circular-progress-indicator';
import { Overlay } from '../overlay/overlay';

export class ProgressIndicatorOverlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    dark: PropTypes.bool
  };

  static defaultProps = {
    active: false,
    dark: false
  };

  shouldComponentUpdate(nextProps) {
    const { active } = this.props;
    if (!active && !nextProps.active) return false;

    return true;
  }

  render() {
    const { active, dark } = this.props;
    const className = classNames(styles.root, { [styles.active]: active });

    const color = dark ? 'white' : null;

    return (
      <div className={className}>
        <Overlay active={active} color={!dark ? 'white' : 'type'} />
        <CircularProgressIndicator className={styles.indicator} color={color} />
      </div>
    );
  }
}
