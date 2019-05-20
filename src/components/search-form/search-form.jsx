import React from 'react';
import { positions } from '../../constants'
import TextInput from '../text-input';
import ComboBox from '../combo-box';
import SubmitButton from '../submit-button';
import './search-form.scss';

const SearchForm = () => (
    <form>
        <TextInput placeHolder="Player Name" />
        <ComboBox optionsInitializer={"Position"} options={positions} />
        <TextInput placeHolder="Age" />
        <SubmitButton buttonText="Search"/>
    </form>
);

export default SearchForm;