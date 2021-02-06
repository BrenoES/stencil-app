import { newSpecPage } from '@stencil/core/testing';
import { AppImage } from '../app-image';

describe('app-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppImage],
      html: `<app-image></app-image>`,
    });
    expect(page.root).toEqualHtml(`
      <app-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-image>
    `);
  });
});
