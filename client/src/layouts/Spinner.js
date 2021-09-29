import React, { Fragment } from 'react';
import loader from '../assets/images/loader.gif';

export default () => (
    <Fragment>
        <img src={loader}
            style={{width: '30rem', 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
            alt="loading..." />
    </Fragment>
);
