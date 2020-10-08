import React from 'react';

import './form-input.styles.scss';
// label heki mta3 email passowrd maktoubin w ki tinzil bech tiktib yitna7aw yatl3ou fou9 w hawka nsta3mlou fi class css
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;