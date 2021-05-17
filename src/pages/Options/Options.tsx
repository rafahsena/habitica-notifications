import React, { useEffect, useState } from 'react';
import { User } from '../../interfaces/user';
import { getUserInfo, setUserInfo } from '../../lib/chrome.storage';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const [user, setUser] = useState<User>();
  const [inputApiKey, setInputApiKey] = useState('');
  const [inputApiUser, setInputApiUser] = useState('');

  useEffect(() => {
    getUserInfo((userInfo: User) => setUser(userInfo));
  }, []);

  const submitUser = () => {
    setUserInfo(inputApiKey, inputApiUser);
  };

  return (
    <div className="OptionsContainer">
      <input
        placeholder="API Key"
        value={user?.apiKey}
        onChange={(e) => setInputApiKey(e.target.value)}
      />
      <input
        placeholder="API User"
        value={user?.apiUser}
        onChange={(e) => setInputApiUser(e.target.value)}
      />
      <button onClick={submitUser}>Salvar credenciais</button>
    </div>
  );
};

export default Options;
