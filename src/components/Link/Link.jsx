import React from "react";
import PropTypes from "prop-types";
import withClickTimesTrack from "../../HOCs/withClickTimesTrack";

const Link = ({ type = "primary", children, href, styles, onClick }) => (
  <a
    style={styles}
    className={`badge badge-${type}`}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.element,
  styles: PropTypes.object,
  onClick: PropTypes.func,
};

export const LinkWithTrack = withClickTimesTrack(Link);

export default Link;
