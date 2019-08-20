import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import classNames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './column.style.scss';

export class Column extends Component {
  static propTypes = {
    children: CHILDREN_PROP_TYPE,
    className: PropTypes.string,
    offset: PropTypes.number,
    offsetLg: PropTypes.number,
    offsetMd: PropTypes.number,
    offsetPrint: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetXl: PropTypes.number,
    order: PropTypes.number,
    orderLg: PropTypes.number,
    orderMd: PropTypes.number,
    orderSm: PropTypes.number,
    orderXl: PropTypes.number,
    style: STYLE_PROP_TYPE,
    width: PropTypes.number,
    widthLg: PropTypes.number,
    widthMd: PropTypes.number,
    widthPrint: PropTypes.number,
    widthSm: PropTypes.number,
    widthXl: PropTypes.number
  };

  static defaultProps = {
    children: null,
    className: '',
    offset: null,
    offsetLg: null,
    offsetMd: null,
    offsetPrint: null,
    offsetSm: null,
    offsetXl: null,
    order: null,
    orderLg: null,
    orderMd: null,
    orderSm: null,
    orderXl: null,
    style: null,
    width: null,
    widthLg: null,
    widthMd: null,
    widthPrint: null,
    widthSm: null,
    widthXl: null
  };

  getClassNames() {
    const { className } = this.props;

    const result = classNames(
      styles.root,
      className,
      this.getOffsetClassNames(),
      this.getOrderClassNames(),
      this.getPrintClassNames(),
      this.getWidthClassNames()
    );

    return result;
  }

  getOffsetClassNames() {
    const { offset, offsetLg, offsetMd, offsetSm, offsetXl } = this.props;

    const result = classNames({
      [styles[`offset-xs-${offset}`]]: false,
      [styles[`offset-lg-${offsetLg}`]]: offsetLg,
      [styles[`offset-md-${offsetMd}`]]: offsetMd,
      [styles[`offset-sm-${offsetSm}`]]: offsetSm,
      [styles[`offset-xl-${offsetXl}`]]: offsetXl
    });

    return result;
  }

  getOrderClassNames() {
    const { order, orderLg, orderMd, orderSm, orderXl } = this.props;

    const result = classNames({
      [styles[`order-xs-${order}`]]: order,
      [styles[`order-lg-${orderLg}`]]: orderLg,
      [styles[`order-md-${orderMd}`]]: orderMd,
      [styles[`order-sm-${orderSm}`]]: orderSm,
      [styles[`order-xl-${orderXl}`]]: orderXl
    });

    return result;
  }

  getWidthClassNames() {
    const { width, widthLg, widthMd, widthSm, widthXl } = this.props;

    const result = classNames({
      [styles[`root-xs-${width}`]]: width,
      [styles[`root-lg-${widthLg}`]]: widthLg,
      [styles[`root-md-${widthMd}`]]: widthMd,
      [styles[`root-sm-${widthSm}`]]: widthSm,
      [styles[`root-xl-${widthXl}`]]: widthXl
    });

    return result;
  }

  getPrintClassNames() {
    const { offsetPrint, widthPrint } = this.props;

    const result = classNames({
      [styles[`print-${widthPrint}`]]: widthPrint,
      [styles[`print-offset-${offsetPrint}`]]: offsetPrint !== null
    });

    return result;
  }

  render() {
    const { children, style } = this.props;
    const className = this.getClassNames();

    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
}
