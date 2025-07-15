import axios from 'axios';

interface Game {
    id: string;
    name: string;
    image: string;
    categories: string[];
}

interface JackPort {
    game: string;
    amount: number;
}

const apiClient = axios.create({
    baseURL: 'https://stage.whgstage.com/front-end-test/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchGames = async () => {
    const { data } = await apiClient.get('/games.php');
    return data as Game[];
};

export const fetchJackPort = async () => {
    const { data } = await apiClient.get('/jackpots.php');
    return data as JackPort[];
};