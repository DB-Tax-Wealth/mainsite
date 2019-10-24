import React from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './process-wheel-section.style.scss';

export const ProcessWheelSection = props => {
  const {
    active,
    className: classNameProp,
    color,
    label,
    labelDx,
    message,
    messageDx,
    onClick,
    radius,
    rotation,
    strokeDasharray,
    strokeWidth
  } = props;

  const className = classnames(styles.root, classNameProp, { [styles.active]: active });
  const cx = 50;
  const cy = 50;
  const id = uniqueId('process-wheel-section__');

  return (
    <g key={id} className={className} style={{ transform: `rotate(${rotation}deg)` }} onClick={onClick}>
      <circle
        cx={cx}
        className={styles.circle}
        cy={cy}
        fill="none"
        stroke={color}
        r={radius}
        strokeDasharray={strokeDasharray}
        strokeWidth={strokeWidth}
      />
      <path
        id={id}
        fill="transparent"
        className={styles.path}
        d={`
          M ${cx}, ${cy}
          m -${radius}, 0
          a ${radius}, ${radius} 0 0, 1 ${radius * 2}, 0
        `}
      />
      <text className={styles.label} dx={labelDx} dy="-1%" x="50%" y="0" textAnchor="middle">
        <textPath xlinkHref={`#${id}`}>{label}</textPath>
      </text>
      <text className={styles.message} dx={messageDx} dy="3.5%" x="50%" y="0" textAnchor="middle">
        <textPath xlinkHref={`#${id}`}>{message}</textPath>
      </text>
    </g>
  );
};

ProcessWheelSection.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  labelDx: PropTypes.number,
  message: PropTypes.string,
  messageDx: PropTypes.number,
  onClick: PropTypes.func,
  radius: PropTypes.number,
  rotation: PropTypes.number,
  strokeDasharray: PropTypes.array,
  strokeWidth: PropTypes.number
};

ProcessWheelSection.defaultProps = {
  active: false,
  className: '',
  color: '',
  label: '',
  labelDx: 0,
  message: '',
  messageDx: 0,
  onClick: null,
  radius: 0,
  rotation: 0,
  strokeDasharray: [],
  strokeWidth: 20
};
