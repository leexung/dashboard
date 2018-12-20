import { Base64 } from 'js-base64';

const basicAuthHeader = credentials => {
  // const credentials = auth[key]
  if (credentials) {
    const credential = Base64.encode(`${credentials.username}:${credentials.password}`);
    return { Authorization: `Basic ${credential}` };
  }

  throw new ReferenceError(`No credentials found with key '${credentials}' in auth.js`);
};
export default basicAuthHeader;
