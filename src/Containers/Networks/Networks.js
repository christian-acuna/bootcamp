import React from "react";

class Networks extends React.Component {
  state = {
    showHiddenText: false,
  };

  render() {
    return (
      <div>
        <div>Network {this.props.params.id}</div>
        <button
          onClick={() =>
            this.setState({ showHiddenText: !this.state.showHiddenText })
          }
        >
          Click to show text
        </button>
        {this.state.showHiddenText && <div>Hidden text</div>}
      </div>
    );
  }
}

export default Networks;
