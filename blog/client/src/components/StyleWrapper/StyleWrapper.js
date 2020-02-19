import React from "react";
import PropTypes from "prop-types";


const StyleWrapper = (props) => {
  const { className, component: Component = "div", ...others } = props;

  return (
    className ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component className={className} {...others} />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...others} />
    )
  );
};

StyleWrapper.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

StyleWrapper.defaultProps = {
  className: null,
  component: undefined,
};

export default StyleWrapper;
