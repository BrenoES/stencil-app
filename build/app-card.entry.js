import { r as registerInstance, h, e as Host } from './index-3e9a74df.js';

const appCardCss = ":host{display:flex;flex-direction:column;box-shadow:0 0px 20px 0 rgba(0,0,0,0.08);transition:0.3s;border-radius:20px;padding:2rem 2.5rem;margin:3.5rem 1rem}@media screen and (min-width: 768px){:host{flex-direction:row;align-items:center}}:host(:hover){box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}";

const AppCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "card" }, h("slot", null)));
  }
};
AppCard.style = appCardCss;

export { AppCard as app_card };
