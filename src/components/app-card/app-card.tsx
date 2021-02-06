import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true,
})
export class AppCard {

  render() {
    return (
      <Host
      class="card">
        <slot></slot>
      </Host>
    );
  }

}
