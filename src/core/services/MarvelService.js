const BASE_URL = 'http://localhost:3027';

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const randomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const simulateNetworkLatency = (min = 1000, max = 3000) => {
  return delay(randomNumber(min, max));
};

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const MarvelService = {
  heroes: {
    getAll() {
      return callApi('/heroe');
      //return [];
      //throw new Error('💀 500 - Error interno.');
    },
    create(hero) {
      return callApi('/heroe', {
        method: 'POST',
        body: JSON.stringify(hero),
      });
    },
    getById(heroId) {
      return callApi(`/heroe/${heroId}`);
    },
    update(heroId, hero) {
      console.log(heroId, hero);
      return callApi(`/heroe/${heroId}`, {
        method: 'PUT',
        body: JSON.stringify(hero),
      });
    },
    delete(heroId) {
      return callApi(`/heroe/${heroId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default MarvelService;
