import { REQ_METHOD_TYPES } from './req-types';

export const fetchData = async (
  endpoint,
  method = REQ_METHOD_TYPES.get,
  body
) => {
  const host = 'https://nemat-hanbal.herokuapp.com/';
  const url = `${host}${endpoint}`;

  const reqOptions = {
    method,
  };

  if (method === 'POST' || method === 'PATCH') {
    reqOptions.headers = {
      'Content-Type': 'application/json',
    };

    reqOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, reqOptions);
  const data = await res.json();
  if (process.env.NODE_ENV !== 'production') console.log(data);
  return data;
};
