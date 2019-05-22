import { calculateAge } from './calculateAge';
// This is a function helper to add an age key to players
export function addPlayersAge(players) {
    let auxPlayers = [];
    auxPlayers = players.map(player => {
        const birthDay = new Date(player.dateOfBirth);
        const today = new Date();
        return { ...player, 'age': calculateAge(today, birthDay) };
    });
    return auxPlayers;
}
