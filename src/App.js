import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from './components/Home.js'

// MUI Theming 
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    main: {
      font: '#ffffff', 
      highlight: '#00FF00'
  }},
  typography:{ fontFamily:"'Questrial', sans-serif"},
  spacing: 4,
  // breakpoints: { up: },
  zindex: {},
  Globals: {},
  overrides: {},
})




function App() {
  return (
    <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
    </ThemeProvider>
  );
}



export default App;
