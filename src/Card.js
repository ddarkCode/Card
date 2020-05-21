import React from 'react';
import './Card.scss';

const Card = ({ avatar_url, name, company }) => {
  	return (
    	<div className="github-profile">
    	  <img alt='github profile' src={avatar_url} />
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
    	</div>
    );
  }
  


export default Card;