import { Component, h } from '@stencil/core';
// import { createRouter, match, Route} from 'stencil-router-v2';

// const Router = createRouter();
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
        <app-home/>
          {/* <Router.Switch>
            <Route path={match('/', { exact: true })}>
             
            </Route>
          </Router.Switch> */}
          {/* <stencil-router root='/stencil-app'>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router> */}
        </main>
      </div>
    );
  }
}
