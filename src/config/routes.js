import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShowsPage from '../pages/ShowsPage';
import AddShowPage from '../pages/AddShowPage';
import EditShowPage from '../pages/EditShowPage';
import MyShowsPage from '../pages/MyShowsPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const Routes = ({ token, setToken }) => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shows' component={ShowsPage} />
    <Route path='/addshow' component={AddShowPage} />
    <Route path='/editshow/:id' component={EditShowPage} />
    <Route path='/myshows' component={MyShowsPage} />
    {/* <Route path='/myshows' component={token ? MyShowsPage : LoginPage} /> */}
    {/* {token ? <Route path='/myshows' component={MyShowsPage} /> : <Redirect to='/login' />} */}
    <Route path='/signup' component={SignupPage} />
    <Route path='/login' component={() => <LoginPage setToken={setToken} />} />
    <Route path='*' component={() => <div><h2>Page Not Found</h2></div>} />
  </Switch>
);

export default Routes;
