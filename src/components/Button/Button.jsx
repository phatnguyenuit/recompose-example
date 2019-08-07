import React from "react";
import PropTypes from "prop-types";
import withClickTimesTrack from "../../HOCs/withClickTimesTrack";

const Button = ({ type = "primary", children, style, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick} style={style}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export const ButtonWithTrack = withClickTimesTrack(Button);

export default Button;
