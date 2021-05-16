import axios from 'axios';
import { BACKEND_MESSAGING_URL } from '../constants/urls';

const http = axios.create({ baseURL: BACKEND_MESSAGING_URL });

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000);
}

const useNotifications = () => {
  const sendNotification = (title: string, description: string, token: string) => {
    const body = {
      title,
      description,
      token,
      date: addMinutes(new Date(Date.now()), 1),
    };
    http.post('/schedule', body);
  };

  return { sendNotification };
};

export default useNotifications;
