import React from 'react'
import { Route, Switch } from 'react-router';
import ReduxToastr from 'react-redux-toastr';
import Root from './Root';

class App extends React.Component {
  // ReduxToastr fails
  render() {
    return (
      <div className="App">
        <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" />
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </div>
    );
  }
}

export default App