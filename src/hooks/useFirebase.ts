import {useEffect, useState} from 'react';

export default () => {
  const sw = navigator.serviceWorker;
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sw) {
      sw.onmessage = ({ data }) => {
        if (data.token !== undefined) {
          setToken(data.token);
        }
      };
    }
    sw.controller?.postMessage('getToken');
  }, [setToken, sw]);

  return { token };
}
