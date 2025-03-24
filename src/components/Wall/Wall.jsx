import React from "react";
import './Wall.scss';
import PropTypes from "prop-types";

const Wall = ({x, y}) => {
return (
    <div className="wall"
        data-x={x}
        data-y={y}
     />
)
}

Wall.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}

export default Wall;