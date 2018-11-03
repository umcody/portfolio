import React from "react";
import PropTypes from "prop-types";

class Loading extends React.Component {
  render() {
    const { show } = this.props;
    if (show) {
      return <div className="loader">loading...</div>;
    }
    return null;
  }
}

Loading.propTypes = {
  show: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string
};

export default Loading;
