import api from '../api'

export async function registerUser(userData) {
    try {
        const response = await api.post('api/User/register', {
            ...userData
        }, {
            headers: {
                "Content-Type": 'application/json',
                'Accept': "*/*"
            },
            responseType: 'text'
        });
        return { success: true, message: response.data };
    } catch (error) {
        const message =
            error.response?.data || 'Erro ao registrar usuário.';
        return { success: false, message };
    }
}

export async function login(identifier, password) {
    try {
        const response = await api.post('api/User/login', { identifier, password });
        console.log('Resposta da API:', response);

        return { success: true, message: response.data };
    } catch (error) {
        console.log('Erro no login:', error.response || error.message);
        return { success: false, message: 'Erro de conexão.' };
    }
}
