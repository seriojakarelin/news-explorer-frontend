export const BASE_URL = 'http://localhost:3001';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    if (res.status === 400) {
        console.log('Некорректно заполнено одно из полей');
        return false
    }
    return res.json();
  })
  .catch((err) => console.log(err))
}; 

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => {
      if (res.status === 200){
        return res.json();
      }
      if (res.status === 400) {
          console.log('Не передано одно из полей');
          return false
      }
      if (res.status === 401) {
        console.log('Пользователь с email не найден');
        return false
    }
    })
    .then((data) => {
        if (data.token){
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
    .catch((err) => console.log(err))
  }; 

  export const getUser = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((res) => {
      if (res.status === 200){
        return res.json();
      }
      if (res.status === 401) {
        console.log('Токен не передан или передан не в том формате');
        return false
    }
    })
    .catch((err) => console.log(err))
  } 