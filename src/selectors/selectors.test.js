import { getPlayers } from './selectors';
import mockPlayers from '../mocks/mockPlayers';

describe('Testing only selector', () => {
    it('Should return all players if filters is undefined', () => {
        expect(getPlayers(mockPlayers, undefined)).toEqual(mockPlayers);
    });

    it('Should return all players if filters fields ara empty', () => {
        const filters = { name: '', position: '', age: '' };
        expect(getPlayers(mockPlayers, filters)).toEqual(mockPlayers);
    });

    it('Should return all players that match with name field value', () => {
        const filters = { name: 'David de Gea', position: '', age: '' };
        const expectedResponse = [{
            "age": 29,
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }];
        expect(getPlayers(mockPlayers, filters)).toEqual(expectedResponse);
    });

    it('Should return all players that match with position field value', () => {
        const filters = { name: '', position: 'Centre-Forward', age: '' };
        const expectedResponse = [{
            "age": 26,
            "contractUntil": "2022-06-30",
            "dateOfBirth": "1993-05-13",
            "jerseyNumber": 9,
            "name": "Romelu Lukaku",
            "nationality": "Belgium",
            "position": "Centre-Forward"
        }];
        expect(getPlayers(mockPlayers, filters)).toEqual(expectedResponse);
    });

    it('Should return all players that match with age field value', () => {
        const filters = { name: '', position: '', age: '29' };
        const expectedResponse = [{
            "age": 29,
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }, {
            "age": 29,
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-03-20",
            "jerseyNumber": 5,
            "name": "Marcos Rojo",
            "nationality": "Argentina",
            "position": "Centre-Back"
        }];
        expect(getPlayers(mockPlayers, filters)).toEqual(expectedResponse);
    });

    it('Should return all players that match with mixed filter values', () => {
        const filters = { name: 'david', position: '', age: '29' };
        const expectedResponse = [{
            "age": 29,
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }];
        expect(getPlayers(mockPlayers, filters)).toEqual(expectedResponse);
    });


});
