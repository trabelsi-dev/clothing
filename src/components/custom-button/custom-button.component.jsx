
import React from 'react';

import './custom-buttom.styles.scss';

//{children} heki feha liktiba ili fi wisit button 
// w component hedi hawka tijim tista3mlha barcha marat 
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;