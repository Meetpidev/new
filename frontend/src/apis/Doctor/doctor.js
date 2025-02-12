import axios from 'axios';

const API_URL = 'http://localhost:4000/api/doctors';

const getDoctors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
};

const createDoctor = async (doctorData) => {
    try {
      const response = await axios.post(API_URL, doctorData);
      return response.data;  
    } catch (error) {
      console.error('Error creating doctor:', error);
      throw error; 
    }
  };

export { getDoctors, createDoctor };
