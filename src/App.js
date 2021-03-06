import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: "Markus"
    };

    onChangeEventHandler = (event) => {
        return this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    onChange={(event) => this.onChangeEventHandler(event)}
                    username={this.state.username}
                />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
