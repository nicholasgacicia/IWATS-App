import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShowsPage from '../pages/ShowsPage';
import AddShowPage from '../pages/AddShowPage';
import EditShowPage from '../pages/EditShowPage';
import MyShowsPage from '../pages/MyShowsPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shows' component={ShowsPage} />
    <Route path='/addshow' component={AddShowPage} />
    <Route path='/editshow/:id' component={EditShowPage} />
    <Route path='/myshows' component={MyShowsPage} />
    <Route path='/signup' component={SignupPage} />
    <Route path='/login' component={LoginPage} />
  </Switch>
);

export default routes;
