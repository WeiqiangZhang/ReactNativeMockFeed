import Feed from './Feed';
import { connect } from 'react-redux';
import { loadInitialFeed, updateFeed} from '../../redux/FeedReducer/action';

const mapDispatchToProps = dispatch => {
  return {
    loadInitialFeed: () => dispatch(loadInitialFeed()),
    updateFeed: (nextFeedUrl, fullyLoaded) => dispatch(updateFeed(nextFeedUrl, fullyLoaded)),
  }
}

const mapStateToProps = state => {
  return {
    feedReducer: state.feedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);