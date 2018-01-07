import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Counter from './counter/Counter';
import Home from './home/Home';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/counter" component={Counter}/>
        </div>
    </Router>
);

export default App;
