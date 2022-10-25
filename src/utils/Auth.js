export const BASE_URL = 'http://api.mymovie.nomorepartiesxyz.ru'; // "api.mymovie.nomorepartiesxyz.ru"  158.160.13.244

export const register = (regValue) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regValue),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
};

export const authorize = (loginValue) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginValue),
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(`Упс, ошибка ${err}`);
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
};

//вставить проверку на ответ от сервера
// .then((res) => {
//   if (res.ok) {
//     return res.json()
//   }
//   return Promise.reject(res.status);
