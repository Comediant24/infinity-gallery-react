import { API_CONFIG } from './utils';

const { URL, KEY, COUNT } = API_CONFIG;

export const getPhotos = async (query, page) => {
  let response = await fetch(
    `${URL}/search/photos?query=${query}&page=${page}&client_id=${KEY}`
  );
  if (response.ok) {
    let photos = await response.json();
    return photos.results;
  } else {
    return Promise.reject({
      error: response.status,
    });
  }
};

export const getStartRandomPhotos = async () => {
  let response = await fetch(
    `${URL}/photos/random?content_filter=low&count=${COUNT}&client_id=${KEY}`
  );
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject({
      error: response.status,
    });
  }
};
