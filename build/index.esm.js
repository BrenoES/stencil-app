import './index-3e9a74df.js';
import { A as ActiveRouter } from './active-router-acfb7acc.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
