import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dyn-comp',
  styleUrl: 'dyn-comp.css'
})
export class MyComponent {
  @Prop() value: string;

  /**
   * Emitted when the input has been created.
   */
  @Event() dynCompDidLoad: EventEmitter<void>;

  /**
   * Emitted when the input has been removed.
   */
  @Event() dynCompDidUnload: EventEmitter<void>;

  componentDidLoad() {
    console.log(this.value, 'loaded');
    this.dynCompDidLoad.emit();
  }

  componentDidUnload() {
    console.log(this.value, 'unloaded');
    this.dynCompDidUnload.emit();
  }

  render() {
    return <div>{this.value}</div>;
  }
}
