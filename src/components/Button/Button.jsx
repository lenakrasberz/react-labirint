import React from "react";
import "./Button.scss";
import PropTypes from "prop-types"


const Button = ({
type="button",
onClick= () => {},
className = "",
children,
...restProps
}) => {

    return (
        <button 
        type={type} 
        className={`button ${className}`}
        onClick={onClick}
        {...restProps}
        >
        {children}
        </button>
    )
}



Button.propTypes = {
type: PropTypes.string.isRequired,
onClick: PropTypes.func,
className: PropTypes.string,
children: PropTypes.any,
restProps: PropTypes.object
}

export default Button;
