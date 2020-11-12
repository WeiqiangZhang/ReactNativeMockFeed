import { LOAD_FEED, UPDATE_FEED, FEED_LOADING } from "./actionTypes";

const FeedDefaultState = {
  nextUrl: "",
  feed: [],
  feedLoaded: false,
  fullyLoaded: false,
};

const UserReducer = (state = FeedDefaultState, action) => {
  switch (action.type) {
    case LOAD_FEED:
      return {
        ...state,
        feedLoaded: true,
        nextUrl: action.data._links.next.url,
        feed: action.data.feed,
        feedLoaded: true,
        fullyLoaded: action.data.feed.length === 0,
      };
    case UPDATE_FEED:
      return {
        ...state,
        feedLoaded: true,
        nextUrl: action.data._links.next.url,
        feed: state.feed.concat(action.data.feed),
        fullyLoaded: action.data.feed.length === 0,
      };
    case FEED_LOADING:
      return {
        ...state,
        feedLoaded: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
