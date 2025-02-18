import React from "react";
import PropTypes from "prop-types";

export const Button = React.memo(({ 
  text, 
  onClick, 
  type = "button", 
  disabled = false, 
  ariaLabel 
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || text} // Improves accessibility
      className={`bg-orange-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500'}`}
    >
      {text}
    </button>
  );
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  disabled: false,
  ariaLabel: "",
};
