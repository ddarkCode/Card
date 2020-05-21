import React, { Component } from 'react';
import CardList from './CardList'
import Form from './Form';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            profiles: []
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.addNewProfile(resp.data);
        this.setState({ userName: '' });
    };
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
          profiles: [...prevState.profiles, profileData],
      }));
    };
    handleChange = (event) => {
        this.setState({userName: event.target.value})
    }

    render() {
        return (
            <div>
                <div className='header'>The GitHub Cards Ap"</div>
                <Form userName={this.state.userName} handleInputChange={this.handleChange} handleInputSubmit={this.handleSubmit} />
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}

export default App;