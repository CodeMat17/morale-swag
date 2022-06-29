import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

export const setToken = (userData) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', userData.user.id);
  Cookies.set('username', userData.user.username);
  Cookies.set('jwt', userData.jwt);

  if (Cookies.get('username')) {
    Router.reload('/');
  }
};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('username');
  Cookies.remove('jwt');

  Router.reload('/');
};

export const getUserFromLocalCookie = () => {
  const jwt = (get = getTokenFromCookie());
  if (jwt) {
    return axios
      .get(`${NEXT_PUBLIC_STRAPI_URL}/api/users/me`, {
        headers: {
          'Content-Type': 'applicatiuon/json',
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((userData) => {
        return userData.username;
      })
      .catch((error) => console.error(error));
  } else {
      return
  }
};

export const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((data) => {
      return data.id;
    });
  } else {
    return;
  }
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};

export const getTokenFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};

export const getIdFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const idCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('id='));
  if (!idCookie) {
    return undefined;
  }
  const id = idCookie.split('=')[1];
  return id;
};
