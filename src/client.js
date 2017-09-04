import { Switch, Route, HashRouter as Router} from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Body, Footer, Header, Layout } from "./app";
import { Profile } from './profile';
import { Menu } from './menu';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
  (<Provider store={ store }>
    <Router history={ history }>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Menu }/>
          <Route path="/profile/:profile" name="archives" component={ Profile }/>
        </Switch>
      </Layout>
    </Router>
  </Provider>)
    , app);