import React from 'react';
import { string } from 'prop-types';
import { submitButton } from './SubmitButton.module.scss';

const SubmitButton = ({ buttonText }) => (
    <input className={submitButton} type="submit" value={buttonText} />
);

SubmitButton.propTypes = {
    buttonText: string
};

export default SubmitButton;
