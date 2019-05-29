import React, { Fragment } from 'react';
import { string, func } from 'prop-types';
import { textInput } from './TextInput.module.scss';

const TextInput = ({ placeHolder, inputValue, onChangeHandler, errorMessage }) => (
    <Fragment>
        <input className={textInput}
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
            placeholder={placeHolder} />
        {errorMessage ? <span>{errorMessage}</span> : null}
    </Fragment>
);

TextInput.propTypes = {
    placeHolder: string,
    inputValue: string.isRequired,
    onChangeHandler: func.isRequired,
    errorMessage: string
};

export default TextInput;
