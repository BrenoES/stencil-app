import { newE2EPage } from '@stencil/core/testing';

describe('app-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-image></app-image>');

    const element = await page.find('app-image');
    expect(element).toHaveClass('hydrated');
  });
});
