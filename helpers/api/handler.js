import axios from "axios";
import getAccessToken from "./auth";
import { BASE_URL, PAGES_BASE_URL, FORMSPREE_LINK } from "../../configs/configs";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const { response } = error;
    if (response && response.status === 401) {
        await getAccessToken(true);
        location.reload();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

const checkExpiresTime = () => {
  const date1 = new Date() / 1000;
  const date2 = new Date(localStorage.getItem('expiredTime')) / 1000;
  let diffTime = date2 - date1;
  diffTime += (10 * 60) // refresh 60 min after
  return diffTime > 1;
}

export const get = async (url, params, isAnotherUrl) => {
  const apiUrl =  BASE_URL + url;
  let token = '';

  if (!checkExpiresTime()) {
    token = await getAccessToken(true);
  } else {
    if (!localStorage.getItem('accessToken')) {
      token = await getAccessToken(true);
    } else {
      token = localStorage.getItem('accessToken');
    }
  }

  return axios
    .get(apiUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        params
    })
    .then((response) => response.data)
    .catch((error) => handleError(error));
};

export const post = (url, payload, isAnotherUrl, formSpree = false) => {
  const apiUrl = formSpree ? FORMSPREE_LINK : BASE_URL + url;
  return axios
    .post(apiUrl, payload)
    .then((response) => {
        return formSpree ? response : response.data;
    })
    .catch((error) => {
        return handleError(error);
    });
};

// Naming 'delet' is not a mistake
// 'delete' is reserved keyword we can not use.
export const delet = (url) =>
  axios
    .delete(BASE_URL + url)
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const put = (url, payload, isAnotherUrl) => {
  const apiUrl =  BASE_URL + url;
  return axios
    .put(apiUrl, payload)
    .then((response) => {
        return response.data;
    })
    .catch((error) => handleError(error));
};

export const patch = (url, payload, isAnotherUrl) => {
  const apiUrl =  BASE_URL + url;
  return axios
    .patch(apiUrl, payload)
    .then((response) => {
        return response.data;
    })
    .catch((error) => handleError(error));
};

export const handleError = (error) => {
  const { response } = error;
    if (error && response && response.data.message) {
            throw response.data.message;
    } else if (response.data.errorMessage) {
        if (response.data && response.data.code && response.data.code == 409) {
            alert(response.data.errorMessage);
        } else {
            throw response.data.errorMessage;
        }
    }
  throw error;
};
