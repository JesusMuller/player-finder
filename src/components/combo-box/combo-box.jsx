import React from 'react';
import { string, arrayOf, func } from 'prop-types';
import { searchFormComboBox } from './combo-box.module.scss';

// optionsInitializer is the initial state of select
// and an option to reset the selecte value
const ComboBox = ({ optionsInitializer, options, onSubmitHandler }) => {
    const comboOptions = options.map((option, i) => (
        <option key={option + 'i'} value={option}>{option}</option>
    ));

    return (
        <select className={searchFormComboBox} onChange={onSubmitHandler}>
            <option value="">{optionsInitializer}</option>
            {comboOptions}
        </select>
    );
};

ComboBox.proTypes = {
    optionsInitializer: string.isRequired,
    options: arrayOf(string).isRequired,
    onSubmitHandler: func
};

export default ComboBox;
