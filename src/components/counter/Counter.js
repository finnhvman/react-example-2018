import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const Counter = () => (
    <div>
        <h1>Counter</h1>
        <div>
            <Button color="primary" raised>+1</Button>
            <Button color="accent" raised>-1</Button>
        </div>
        <br/>
        <div>under construction</div>
        <br/>
        <Link to="/">Home</Link>
    </div>
);

export default Counter;
