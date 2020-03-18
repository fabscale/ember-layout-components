import Component from '@glimmer/component';

export default class ConfigOption extends Component {
  get options() {
    let defaultOption = [{ value: undefined, label: 'default' }];
    return defaultOption.concat(
      this.args.options.map((opt) => {
        return { value: opt, label: `${opt}` };
      })
    );
  }
}
