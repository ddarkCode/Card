import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        const handleSubmit =  (event) => {
            event.preventDefault()
            fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(res => res.json())
            .then(data => this.props.onSubmit(data));
            this.setState({ userName: ''});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
            </form>
        )
    }
}