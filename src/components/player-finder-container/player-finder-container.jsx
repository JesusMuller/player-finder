import React from 'react';
import SectionTitle from '../section-title';
import SearchFormContainer from '../player-search-form';
import PlayerInformationTable from '../player-information-table';
import './player-finder-container.css';

const PlayerFinderContainer = () => (
    <div className="section-container">
        <SectionTitle textToShow="Football Player Finder"/>
        <SearchFormContainer />
        <PlayerInformationTable />
    </div>
);

export default PlayerFinderContainer;