import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { textInput } from './text-input.module.scss';

//errorMessage is an optinal string to show a validation error
//it render a conditional element
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
