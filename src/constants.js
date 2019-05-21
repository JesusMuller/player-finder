const positions = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back'
];

const PLAYER_NAME_VALIDATION_ERROR = "You must use only letters";
const PLAYER_AGE_VALIDATION_ERROR = "You must use numbers from 18 to 40";
const NO_RESULTS_MESSAGE = "No results were found for given filters. Please try other values";
const LOADING_RESULTS_MESSAGE = "Loading...";
const HOST = "https://football-players-b31f2.firebaseio.com";
const PLAYERS_ENDPOINT = "players.json";

export { positions,
    PLAYER_NAME_VALIDATION_ERROR,
    PLAYER_AGE_VALIDATION_ERROR,
    NO_RESULTS_MESSAGE,
    LOADING_RESULTS_MESSAGE,
    HOST, PLAYERS_ENDPOINT
};
