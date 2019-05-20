import React from 'react';
import SearchForm from './search-form/search-form';

const SearchFormContainer = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <SearchForm onSubmitHandler={onSubmitHandler} />
    );
};

export default SearchFormContainer;
