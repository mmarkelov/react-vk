import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

const asyncComponent = getComponent =>
  class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return <div className="App-content">Loading...</div>;
    }
  };

const components = [
  { link: '/', title: 'Home' },
  { link: '/login', title: 'Login' },
  { link: '/comments', title: 'Comments' },
  { link: '/community', title: 'CommunityMessages' },
  { link: '/like', title: 'Like' },
  { link: '/group', title: 'Community' },
  { link: '/playlist', title: 'Playlist' },
  { link: '/contact', title: 'ContactUs' },
  { link: '/subscribe', title: 'Subscribe' },
  { link: '/recommend', title: 'Recommendations' },
  { link: '/poll', title: 'Poll' },
  { link: '/post', title: 'Post' },
  { link: '/app', title: 'Application' },
  { link: '/article', title: 'Article' }
];

const NotFound = asyncComponent(() =>
  import('./components/NotFound').then(module => module.default),
);

const App = () => {
  const renderRoutes = item => {
    const component = asyncComponent(() =>
      import(`./components/${item.title}`).then(module => module.default),
    );

    return (
      <Route key={item.title} exact path={item.link} component={component} />
    );
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-VK Package</h1>
        </header>
        <div className="App-main">
          <Navigation />
          <Switch>
            {components.map(item => renderRoutes(item))}
            <Route component={NotFound} />
          </Switch>
        </div>
        <footer>
          <p>
            Done by{' '}
            <b>
              <a href="https://github.com/mmarkelov">mmarkelov</a>
            </b>, 2018
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
