import React from 'react';
import './Form.scss'

const Form = ({ handleInputChange, handleInputSubmit, userName}) => {	
	
  	return (
    	<form onSubmit={handleInputSubmit}>
    	  <input 
          type="text" 
          value={userName}
          onChange={handleInputChange}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }



    
export default Form;