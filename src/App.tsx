import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
// import { Route, Switch } from 'react-router';  // 從這邊import會出錯
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/HomePage';

const theme = {};

const App = () => {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
