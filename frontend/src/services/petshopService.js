import axios from 'axios';

export const calculateBestOption = async ({ date, smallDogs, largeDogs }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/calculate', {
            date,
            smallDogs: parseInt(smallDogs),
            largeDogs: parseInt(largeDogs)
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao calcular a melhor opção', error);
        return null;
    }
};
