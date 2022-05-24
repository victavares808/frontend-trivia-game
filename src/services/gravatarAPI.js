import { MD5 } from 'crypto-js';

const fetchGravatar = (email) => {
  const url = `https://www.gravatar.com/avatar/${MD5(email).toString()}`;
  return url;
};

export default fetchGravatar;
