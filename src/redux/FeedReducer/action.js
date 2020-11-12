import {
  LOAD_FEED,
  UPDATE_FEED,
  FEED_LOADING,
} from './actionTypes';
import {
  getInitialFeed,
  getFeed,
} from '../../apis/feedApi';


export const loadInitialFeed = () => {
  return async (dispatch) => {
    dispatch({type: FEED_LOADING});
    const data = await getInitialFeed();
    dispatch({
      type: LOAD_FEED,
      data: data,
    });
  };
};

export const updateFeed = (nextFeedUrl, fullyLoaded) => {
  return async (dispatch) => {
    if (fullyLoaded) return;
    dispatch({type: FEED_LOADING});
    const data = await getFeed(nextFeedUrl);
    dispatch({
      type: UPDATE_FEED,
      data: data,
    });
  };
};
