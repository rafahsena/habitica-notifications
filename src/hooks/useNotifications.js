import axios from 'axios';
import { FIREBASE_CLOUD_URL } from '../constants/urls';

import secrets from 'secrets';

const http = axios.create({ baseURL: FIREBASE_CLOUD_URL });

const useNotifications = () => {
  const sendNotification = (token) => {
    const body = {
      notification: {
        title: 'Teste',
        body: 'Texto da notificação',
      },
      to: token,
    };
    http.post('/send', body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `key=${secrets.serverKey}`,
      },
    });
  };

  return { sendNotification };
};

export default useNotifications;
