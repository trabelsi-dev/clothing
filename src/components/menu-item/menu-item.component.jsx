import React from 'react';
//withRouter hedi bech tijim nista3mlou history et match 
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    // ${match.url}hedi normalment ta3ti position inti feha et ${linkUrl} hawka 7atinha directory 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    
  >
  
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);