import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Heroes from './pages/Heroes';
import Layout from './components/Layout';
import NewHero from './pages/NewHero';
import NotFound from './pages/NotFound';
import EditHero from './pages/EditHero';
import DetailHeroe from './pages/DetailHeroe';
import Counter from './react-hooks/useState/counter';
import WithoutDep from './react-hooks/useEffect/WithoutDep';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={WithoutDep} />
            <Route exact path="/heroes">
              <Redirect from="/heroes" to="/" />
            </Route>
            <Route exact path="/newHero" component={NewHero} />
            <Route exact path="/editHero/:heroId" component={EditHero} />
            <Route exact path="/detailhero/:heroId" component={DetailHeroe} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
