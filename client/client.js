import { Switch, Route, render, HashRouter as Router} from 'react-router-dom';

//import { withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Body, Footer, Header, Layout } from "../src/app";
import { Profile } from '../src/profile';
import { Menu } from '../src/menu';
import store from '../src/store';

const app = document.getElementById('app');

render(
  (<Provider store={ store }>
    <Router history={ history }>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Menu }/>
          </Switch>
      </Layout>
    </Router>
  </Provider>)
    , app);

//<Route path="/profile/:profile" name="archives" component={ Profile }/>
        