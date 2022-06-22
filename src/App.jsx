import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Heroes from './pages/Heroes';
import Layout from './components/Layout';
import NewHero from './pages/NewHero';
import Hero from './pages/Hero';
import NotFound from './pages/NotFound';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Heroes} />
            <Route exact path="/heroes">
              <Redirect from="/heroes" to="/" />
            </Route>
            <Route exact path="/newHero" component={NewHero} />
            <Route exact path="/detailHero" component={Hero} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
