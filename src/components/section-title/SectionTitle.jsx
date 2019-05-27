import React from 'react';
import { string } from 'prop-types';

const SectionTitle = ({ textToShow }) => (
    <h1>{textToShow}</h1>
);

SectionTitle.propTypes = {
    textToShow: string.isRequired
};

export default SectionTitle;
