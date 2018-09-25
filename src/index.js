import React from 'react';

class ToggleGroup extends React.Component {
  static defaultProps = { single: true };
  state = { on: [] };

  constructor(props) {
    super(props);

    this.state = {
      on: props.defaultOn ? props.defaultOn : []
    };
  }

  toggle = index => {
    const { single } = this.props;

    this.setState(({ on }) => {
      if (on.includes(index)) {
        return {
          on: single ? [] : on.filter(i => i !== index)
        };
      } else {
        return {
          on: single ? [index] : on.concat(index)
        };
      }
    });
  };

  isOn = index => this.state.on.includes(index);

  render() {
    return this.props.children({
      ...this.state,
      toggle: this.toggle,
      isOn: this.isOn
    });
  }
}

export default ToggleGroup;
