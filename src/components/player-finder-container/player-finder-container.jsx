import React from 'react';
import SectionTitle from '../section-title';
import SearchForm from '../search-form';
import './player-finder-container.css';

const PlayerFinderContainer = () => (
    <div className="section-container">
        <SectionTitle textToShow="Football Player Finder"/>
        <SearchForm />
    </div>
);

export default PlayerFinderContainer;