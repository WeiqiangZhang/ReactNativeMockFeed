import axios from "axios";

export const getInitialFeed = () => {
  return axios.get('https://staging-app.figure1.com/mock/feed')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
};

export const getFeed = (nextFeedUrl) => {
  console.log(nextFeedUrl)
  return axios.get(nextFeedUrl)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
};