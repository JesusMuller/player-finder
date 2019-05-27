import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { textInput } from './TextInput.module.scss';

const TextInput = ({ placeHolder, errorMessage }) => {
    return (
        <Fragment>
            <input className={textInput} type="text" placeholder={placeHolder} />
            {errorMessage ? <span>{errorMessage}</span> : null}
        </Fragment>
    );
};

TextInput.propTypes = {
    placeHolder: string,
    errorMessage: string
};

export default TextInput;
