import React from "react";
import PropTypes from "prop-types";

class Loading extends React.Component {
  render() {
    const { show } = this.props;
    if (show) {
      return (
        <div className="loader">
          <div className="loader-block">
            <div className="bg">
              <div className="left-bg" />
              <div className="right-bg" />
            </div>
            <div className="fg">
              <div className="top-left-rect">
                <div />
              </div>
              <div className="bottom-right-rect">
                <div />
              </div>
              <div className="top-right-rect">
                <div />
              </div>
              <div className="bottom-left-rect">
                <div />
              </div>
            </div>
          </div>
        </div>
      );
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
