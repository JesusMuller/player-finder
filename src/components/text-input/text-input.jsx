import React from 'react';
import { string } from 'prop-types';
import './text-input.scss';

const TextInput = ({ placeHolder }) => (
    <input type="text" placeholder={placeHolder} />
);

TextInput.propTypes = {
    placeHolder: string
};

export default TextInput;
