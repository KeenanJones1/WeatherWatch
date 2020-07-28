import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Home}/>
        {/* <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/> */}
        {/* <Route path="/home" component={Home}/> */}
      </Switch>
    </main>
  );
}



export default App;
