import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config
const npmLifecycleEvent = process.env['npm_lifecycle_event'];
const ifTest = ( npmLifecycleEvent === 'start' || npmLifecycleEvent === 'test' || npmLifecycleEvent === 'test.watch');
const baseUrlExceptIfTesting = ifTest ? {} : {baseUrl: 'https://brenoes.github.io/stencil-app/'};
console.log(`${JSON.stringify(baseUrlExceptIfTesting)}`);
export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  buildEs5:true,
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      ...baseUrlExceptIfTesting
    },
  ],
};
