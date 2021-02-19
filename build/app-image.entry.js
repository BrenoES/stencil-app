import { r as registerInstance, h } from './index-3e9a74df.js';

const appImageCss = ":host{display:block;width:-webkit-fill-available}.image-container{margin:0}.image-content{max-width:-webkit-fill-available;object-fit:contain}";

const AppImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("figure", { class: "image-container" }, h("img", { class: "image-content", src: this.src, alt: this.alt, height: this.height, width: this.width })));
  }
};
AppImage.style = appImageCss;

export { AppImage as app_image };
