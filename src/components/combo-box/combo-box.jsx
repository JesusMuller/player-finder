import React from 'react';
import { string, arrayOf } from 'prop-types';
import './combo-box.scss';

const ComboBox = ({ optionsInitializer, options }) => {
    const comboOptions = options.map((option, i) => (
        <option key={option + 'i'} value={option}>{option}</option>
    ));

    return (
        <select>
            <option value="">{optionsInitializer}</option>
            {comboOptions}
        </select>
    );
};

ComboBox.proTypes = {
    optionsInitializer: string.isRequired,
    options: arrayOf(string).isRequired
};

export default ComboBox;
