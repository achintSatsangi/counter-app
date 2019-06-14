import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, pervState) {
    console.log("prevProps", prevProps);
    console.log("pervState", pervState);
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    console.log("Counter - rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value < 1}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    var classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning m-2" : "primary m-3";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
