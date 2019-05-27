import { calculateAge } from './calculateAge';

export function addPlayersAge(players) {
    let auxPlayers = [];
    auxPlayers = players.map(player => {
        const birthDay = new Date(player.dateOfBirth);
        const today = new Date();
        return { ...player, 'age': calculateAge(today, birthDay) };
    });
    return auxPlayers;
}
