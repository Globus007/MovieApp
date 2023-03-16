import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, this.state.count),
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('button', { onClick: this.increment }, '+'),
    );
  }
}
