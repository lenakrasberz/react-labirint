import PropTypes from 'prop-types';
import React from 'react';
import './Space.scss';

const Space = ({ x, y }) => {
    return (
      <div 
        className="space"
        data-x={x}
        data-y={y}
      />
    );
  };

Space.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}

export default Space;