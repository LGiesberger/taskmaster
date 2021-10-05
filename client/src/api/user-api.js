const SERVER_URL = 'http://localhost:3001';

export function registerUser(data) {
  return fetch(`${SERVER_URL}/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function loginUser(credentials) {
  return fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
}

export function checkAuthentication() {
  return fetch(`${SERVER_URL}/authenticated`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
