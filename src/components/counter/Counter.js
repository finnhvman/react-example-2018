import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../../actions/counterActions';

export class Counter extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter() {
        this.props.actions.incrementCounter();
    }

    decrementCounter() {
        this.props.actions.decrementCounter();
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <Button onClick={this.incrementCounter} color="primary" raised>+1</Button>
                    <Button onClick={this.decrementCounter} color="accent" raised>-1</Button>
                </div>
                <br/>
                <div>value: {this.props.value}</div>
                <br/>
                <Link to="/">Home</Link>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
