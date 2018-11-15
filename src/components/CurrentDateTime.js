import React, { Component } from "react";

class CurrentDateTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount() {
    // This method is called the first time the component is rendered in
    // the DOM. Use it to fetch, add some event listeners, etc.
    this.intervalId = setInterval(() => {
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    // This method is called before the component is removed from the
    // page. Use it clean up setInterval, setTimeouts, event listeners, etc.
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <span>
        {this.props.onlyTime
          ? this.state.dateTime.toLocaleTimeString()
          : this.state.dateTime.toLocaleString()}
      </span>
    );
  }
}

export default CurrentDateTime;
