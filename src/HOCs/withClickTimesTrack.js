import React, { Component } from "react";
import PropTypes from "prop-types";

const withClickTimesTrack = WrappedComponent => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        times: 0,
      };
    }
    handleClick = e => {
      e.preventDefault();
      const { onClick } = this.props;
      this.setState(prevState => ({ times: prevState.times + 1 }));
      onClick && onClick();
    };
    render() {
      const { children, ...props } = this.props;
      const { times } = this.state;
      return (
        <span onClick={this.handleClick}>
          <WrappedComponent type={times > 5 ? "danger" : "primary"} {...props}>
            {children} <small>({times} times clicked)</small>
          </WrappedComponent>
        </span>
      );
    }
  }
  Wrapper.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func,
  };
  return Wrapper;
};

export default withClickTimesTrack;

// https://blog.logrocket.com/using-recompose-to-write-clean-higher-order-components-3019a6daf44c/
