import React from 'react';
import SectionTitle from '../section-title';
import SearchFormContainer from '../player-search-form';
import './player-finder-container.css';

const PlayerFinderContainer = () => (
    <div className="section-container">
        <SectionTitle textToShow="Football Player Finder"/>
        <SearchFormContainer />
    </div>
);

export default PlayerFinderContainer;