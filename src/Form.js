import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            userName: ''
        }
    }

        handleSubmit =  (event) => {
            event.preventDefault()
            fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(res => res.json())
            .then(data => this.props.onSubmit(data));
            this.setState({ userName: ''});
        }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                value={this.state.userName}
                onChange={event => this.setState({userName: event.target.value })}
                placeholder='GitHub username'
                required />
                <button>Add card</button>
            </form>
        )
    }
}

export default Form;