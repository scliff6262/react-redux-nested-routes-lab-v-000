import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import PetsPage from '../containers/PetsPage';
import PetsNew from '../containers/PetsNew'
import PetsShow from '../containers/PetsShow'

const App = (props) =>
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/pets">See All The Pets!</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/pets/new">Add A Pet</NavLink>
      </div>
      <Switch>
        <Route exact path="/" render={() => <h3>Welcome to the Pets List App</h3>} />
        <Route exact path="/pets" component={PetsPage} />
        <Route exact path="/pets/new" component={PetsNew} />
        <Route exact path="/pets/:petId" component={PetsShow} />
      </Switch>
    </div>
  </Router>;

export default App;
