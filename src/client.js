import { Switch, Route, HashRouter as Router} from 'react-router-dom';

import { withRouter} from 'react-router-dom';


import { Body, Footer, Header, Layout } from "./app";
import {Profile} from './profile';
import { Category } from './category';

const app = document.getElementById('app');

ReactDOM.render(
  (<Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Layout}/>
        <Route path="/archives/:article" name="archives" component={Profile}/>
        <Route path="/settings" name="settings" component={Settings}/>
      </Switch>
    </Layout>
  </Router>)
    , app);