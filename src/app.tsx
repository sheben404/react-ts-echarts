import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';

function App() {
  return (
    <div className={'App'}>
      <HashRouter>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>
          <Route exact path={'*'}>
            404
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
