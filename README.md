# react-togglegroup

This component abstracts maintaining boolean state for a list of items. One can then implement various components on top of `react-togglegroup` - like radiogroup, checkbox group, rich text editor toggles etc.

It's built as a render-prop component. The on/off state for each of the items can be asked using the `isOn` function passed as argument to `children` function prop.

E.g. This is how a Radiogroup can be implemented using `react-togglegroup`

```
class RadioGroup extends React.PureComponent {
  render() {
    const { items } = this.props;

    // P.S. - Radio implementation not shown here
    return (
      <ToggleGroup>
        {({ toggle, isOn }) => {
          return items.map((item, index) => {
            return (
              <div>
                <Radio
                  checked={isOn(index)}
                  onChange={() => toggle(index)}
                  {...item}
                />
              </div>
            );
          });
        }}
      </ToggleGroup>
    );
  }
}
```
