import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShowsPage from '../pages/ShowsPage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shows' component={ShowsPage} />
  </Switch>
);

export default routes;
