
export const DOMAIN = 'http://127.0.0.1:5000'
export const GET_USERS = `${DOMAIN}/users`

export const fetchUsers = async () => {
    try {
        const promiseResolve = new Promise((resolve, _) => 
            setTimeout(resolve, 3000));
        await promiseResolve;
        const response = await fetch(GET_USERS);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json()
    } catch (error) {
        return {users: ['placeholderName']}
    }
    
}