import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShowsPage from '../pages/ShowsPage';
import AddShowPage from '../pages/AddShowPage';
import MyShowsPage from '../pages/MyShowsPage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shows' component={ShowsPage} />
    <Route path='/addshow' component={AddShowPage} />
    <Route path='/myshows' component={MyShowsPage} />
  </Switch>
);

export default routes;
