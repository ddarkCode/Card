import React, { Component } from 'react';
import CardList from './CardList'
import Form from './Form';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            profiles: []
        }
    }
    addNewProfile = (profileData) => {
        this.setState({
            profiles: [profileData]
        });
    }

    render() {
        return (
            <div>
                <div className='header'>The GitHub Cards Ap"</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}

export default App;