import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Counter from './counter/Counter';
import Home from './home/Home';

const App = () => (
    <Router>
        <MuiThemeProvider>
            <Route exact path="/" component={Home}/>
            <Route path="/counter" component={Counter}/>
        </MuiThemeProvider>
    </Router>
);

export default App;
