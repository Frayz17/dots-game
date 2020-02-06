import axios from 'axios';

export default async () => {
  try {
    const result = await axios(
      'https://starnavi-frontend-test-task.herokuapp.com/winners'
    );
    return result.data;
  } catch (error) {
    console.error('error', error);
  }
};
