import React from 'react';
import { positions } from '../../../constants'
import TextInput from '../../text-input';
import ComboBox from '../../combo-box';
import SubmitButton from '../../submit-button';
import './search-form.scss';

const SearchForm = ({ onSubmitHandler }) => (
    <form onSubmit={onSubmitHandler}>
        <div className="input-container"><TextInput placeHolder="Player Name" /></div>
        <div className="input-container">
            <ComboBox optionsInitializer={"Position"} options={positions} />
        </div>
        <div className="input-container"><TextInput placeHolder="Age" /></div>
        <div className="input-container"><SubmitButton buttonText="Search" /></div>
    </form>
);

export default SearchForm;