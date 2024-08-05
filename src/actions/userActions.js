import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/api/users');
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
};

export const fetchUserById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
    }
};
