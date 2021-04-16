import React from 'react';

import './custom-button.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        type='button'
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButtom;