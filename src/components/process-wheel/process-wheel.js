import React from 'react';
import PropTypes from 'prop-types';
import colors from 'styles/config/variables.scss';
import Color from 'color';
import styles from './process-wheel.style.scss';
import { ProcessWheelSection } from './process-wheel-section/process-wheel-section';

export const ProcessWheel = props => {
  const { activeIndex, color, sections, strokeWidth, title } = props;

  const sectionsLength = sections.length;

  const radius = 50;
  const radiusAdjusted = radius - strokeWidth / 2;
  const circumferenceAdjusted = Math.PI * (radiusAdjusted * 2);
  const radiusShift = circumferenceAdjusted / sectionsLength;

  const strokeDasharray = [radiusShift, circumferenceAdjusted];
  const sectionDegrees = 360 / sectionsLength;
  const rotationOffset = sectionDegrees / 2;
  const rotation = -activeIndex * sectionDegrees - (rotationOffset - 90);

  return (
    <div className={styles.root}>
      <svg viewBox="0 0 100 100">
        <circle cx={50} cy={50} fill="none" r={radiusAdjusted} strokeWidth={strokeWidth} stroke="transparent" />
      </svg>
      <h2 className={styles.title}>{title}</h2>
      <svg viewBox="0 0 100 100" className={styles.section} style={{ transform: `rotate(${rotation}deg)` }}>
        {sections.map(({ onClick, label }, index) => {
          const key = `section-${index}`;

          const strokeColor = Color(color)
            .darken(index * 0.1)
            .hex();

          const labelDx = -25;

          return (
            <ProcessWheelSection
              active={index === activeIndex}
              className={styles.wheelSection}
              color={strokeColor}
              key={key}
              label={label}
              labelDx={labelDx}
              onClick={onClick}
              radius={radiusAdjusted}
              rotation={(360 / sectionsLength) * index}
              strokeDasharray={strokeDasharray}
              strokeWidth={strokeWidth}
            />
          );
        })}
      </svg>
    </div>
  );
};

ProcessWheel.propTypes = {
  activeIndex: PropTypes.number,
  color: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object),
  strokeWidth: PropTypes.number,
  title: PropTypes.string
};

ProcessWheel.defaultProps = {
  activeIndex: 0,
  color: colors.secondary,
  sections: [],
  strokeWidth: 20,
  title: 'Our Process'
};
