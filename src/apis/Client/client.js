import axios from 'axios';

// const API_URL = 'https://vitality-ais.onrender.com/api/clients';
const API_URL = 'https://vitality-ais.onrender.com/api/clients';

const registerClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, clientData);
    return response.data;
  } catch (error) {
    console.error('Error registering client:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

const loginClient = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; 
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      throw new Error('No response from server');
    } else {
      throw new Error(error.message);
    }
  }
};


export { registerClient, loginClient };
