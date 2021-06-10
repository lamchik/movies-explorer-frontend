class MoviesApi {
    constructor(config) {
      this.headers = config.headers;
      this.url = config.url;
    }

    getMovies() {
    return fetch(`${this.url}`, {
      headers: this.headers
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export default new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    }
  });