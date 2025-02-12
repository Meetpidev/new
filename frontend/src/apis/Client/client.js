import axios from 'axios';

const API_URL = 'http://localhost:4000/api/clients';

const registerClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, clientData);
    return response.data;
  } catch (error) {
    console.error('Error registering client:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

export { registerClient };
