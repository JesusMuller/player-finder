import React from 'react';
import { string } from 'prop-types';
import { textInput } from './text-input.module.scss';

const TextInput = ({ placeHolder }) => (
    <input className={textInput} type="text" placeholder={placeHolder} />
);

TextInput.propTypes = {
    placeHolder: string
};

export default TextInput;
