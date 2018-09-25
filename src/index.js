import React from 'react';
import PropTypes from 'prop-types';

class ToggleGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: props.defaultOn ? props.defaultOn : []
    };
    this.toggle = this.toggle.bind(this);
    this.isOn = this.isOn.bind(this);
  }

  toggle(index) {
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
  }

  isOn(index) {
    this.state.on.includes(index);
  }

  render() {
    if (typeof this.props.children !== 'function') {
      throw new Error('react-togglegroup needs children, or children prop, as a function');
    }

    return this.props.children({
      ...this.state,
      toggle: this.toggle,
      isOn: this.isOn
    });
  }
}

ToggleGroup.propTypes = {
  children: PropTypes.func.isRequired,
  single: PropTypes.bool,
  defaultOn: PropTypes.bool
};

ToggleGroup.defaultProps = { single: true };

export default ToggleGroup;
