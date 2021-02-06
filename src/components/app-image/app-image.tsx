import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage {
  @Prop() src : string;
  @Prop() alt : string;
  @Prop() height: string;
  @Prop() width: string ; 

  render() {
    return (
         <figure class="image-container">
            <img class="image-content" src={this.src} alt={this.alt} height ={this.height}  width={this.width}/>
          </figure>
    );
  }

}
