import { REQ_METHOD_TYPES } from './req-types';
import { store } from '../../store/store';

export const fetchData = async (
  endpoint,
  method = REQ_METHOD_TYPES.get,
  body,
  stringify = true
) => {
  // const host = 'https://nemat-hanbal.herokuapp.com/';
  const host = 'http://127.0.0.1:8000/';
  const url = `${host}${endpoint}`;

  const reqOptions = {
    method,
  };

  const token = store.getState().user.token;
  reqOptions.headers = {
    Authorization: `Bearer ${token}`,
  };

  if (method === 'POST' || method === 'PATCH') {
    if (stringify) {
      reqOptions.headers['Content-Type'] = 'application/json';
      reqOptions.body = JSON.stringify(body);
    } else {
      console.log(true);
      reqOptions.body = body;
    }
  }

  const res = await fetch(url, reqOptions);
  const data = await res.json();
  if (process.env.NODE_ENV !== 'production') console.log(data);
  return data;
};
