import { Component, Listen, State} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @State() options: string[] = [];

  @Listen('dynCompDidLoad')
  onDynLoaded(event: CustomEvent) {
    console.log(event, 'loaded');
  }

  @Listen('dynCompDidUnload')
  onDynUnloaded(event: CustomEvent) {
    console.log(event, 'unloaded');
  }

  render() {
    return [
      <button type="button" onClick={this.loadOptionsA.bind(this)}>Options A</button>,
      <button type="button" onClick={this.loadOptionsB.bind(this)}>Options B</button>,
      this.options.map(o => <dyn-comp value={o}/>)
    ];
  }

  private loadOptionsA() {
    this.options = ['parrot', 'cat', 'dog'];
  }

  private loadOptionsB() {
    this.options = ['parrot fish', 'cat fish', 'dog fish', 'fish fish'];
  }
}
