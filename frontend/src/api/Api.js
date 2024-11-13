
export const DOMAIN = 'http://127.0.0.1:5000'
export const GET_USERS = `${DOMAIN}/users`

export const newUser = async (user) => {
    fetch(GET_USERS, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user
            })
        }).then(response => response.json())
        .then(data => console.log('User created successfully: ', data))
        .catch((error) => {
            console.error('Error:', error)
        })
}

export const addWeight = async (user, weight) => {
    try {
        const response = await fetch(`${DOMAIN}/addWeight/${user}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                weight: weight
            })
        });
        if (response.ok) {
            console.log('ok');
        } else {
            console.error('error');
        }
    } catch (error) {
        console.error('error');
    }   
}

export const deleteUser = async (user) => {
    try {
        const response = await fetch(`${GET_USERS}/${user}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log('ok');
        } else {
            console.error('error');
        }
    } catch (error) {
        console.error('error');
    }   
}

// gets users as json of user:weight
export const getUsers = async () => {
    let response = null;
    try {
        response = await fetch(GET_USERS);
        if (response.ok) {
            console.log('ok');
        } else {
            console.error('error');
        }
    } catch (error) {
        console.error('error');
    }   
    return response.json();
}