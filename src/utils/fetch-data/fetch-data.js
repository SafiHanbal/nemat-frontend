import { REQ_METHOD_TYPES } from './req-types';

// const res = await fetch(
//   `https://nemat-hanbal.herokuapp.com/api/v1/user/login`,
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       phone: Number(phone),
//       password,
//     }),
//   }
// );

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

  console.log(body);

  if (method === 'POST' || method === 'PATCH') {
    reqOptions.headers = {
      'Content-Type': 'application/json',
    };

    reqOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, reqOptions);
  const data = await res.json();
  return data;
};
