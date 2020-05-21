import React, { Component } from 'react';



class Form extends Component {
	
	render() {
  	return (
    	<form onSubmit={this.props.handleInputSubmit}>
    	  <input 
          type="text" 
          value={this.props.userName}
          onChange={this.props.handleInputChange}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}


    
export default Form;