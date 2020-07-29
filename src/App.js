import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from './components/Home.js'

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </main>
  );
}



export default App;
