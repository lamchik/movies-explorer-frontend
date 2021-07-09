class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  refreshToken() {
    const token = localStorage.getItem('token');
    this.headers['Authorization'] = `Bearer ${token}`;
  }

  getMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUser() {
    this.refreshToken();
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editUser(name, email) {
    this.refreshToken();
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  likeMovie(data) {
    this.refreshToken();
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: data.country === '' || data.country === null ? 'Пусто' : data.country,
        director: data.director === '' || data.director === null ? 'Пусто' : data.director,
        duration: data.duration,
        year: data.year,
        description: data.description === '' || data.description === null ? 'Пусто' : data.description,
        image: 'https://api.nomoreparties.co' + data.image.url,
        trailer:
          data.trailerLink === 'God Bless Ozzy Osbourne' || data.trailerLink === null ? 'https://www.kinopoisk.ru/' : data.trailerLink,
        nameRU: data.nameRU === '' ? 'Пусто' : data.nameRU,
        nameEN: data.nameEN === '' || data.nameEN === null ? 'Пусто' : data.nameEN,
        thumbnail:
          'https://api.nomoreparties.co/' + data.image.formats.thumbnail.hash + data.image.formats.thumbnail.hash.ext,
        movieId: data.id,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteLike(id) {
    this.refreshToken();
    return fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

class AuthAPI {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  signUp(email, password, name) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  signIn(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export default new MainApi({
  url: 'https://diplom.lamara.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = new AuthAPI({
  url: 'https://diplom.lamara.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
});
