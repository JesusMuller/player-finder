import React from 'react';
import { positions } from '../../constants'
import TextInput from '../text-input';
import ComboBox from '../combo-box';
import './search-form.scss';

const SearchForm = () => (
    <form>
        <TextInput placeHolder="Player Name" />
        <ComboBox optionsInitializer={"Position"} options={positions} />
    </form>
);

export default SearchForm;