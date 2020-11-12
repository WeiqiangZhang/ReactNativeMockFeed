import React, { Component } from "react";
import {
  ScrollView,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Card, Text, Button, Spinner } from "native-base";
import styles from "./styles";

export default class Feed extends Component {
  componentDidMount() {
    this.props.loadInitialFeed();
  }
  handleFeedClick = (post) => {
    const { navigation } = this.props;
    navigation.push("FeedInfo", {
      post: post,
    });
  };
  handleLoadMore = () => {
    const { updateFeed, feedReducer } = this.props;
    console.log(feedReducer.nextUrl);
    console.log(feedReducer.fullyLoaded);
    updateFeed(feedReducer.nextUrl, feedReducer.fullyLoaded);
  };
  render() {
    const { feedReducer } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {feedReducer.feed.map((post, i) => (
            <TouchableWithoutFeedback
              onPress={() => this.handleFeedClick(post)}
              key={`feed_${i}`}
            >
              <Card style={styles.card}>
                <Text>{`Posted by: ${post.username}`}</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: post.image.post,
                  }}
                />
                <Text>{post.caption}</Text>
              </Card>
            </TouchableWithoutFeedback>
          ))}
          {!feedReducer.feedLoaded ? (
            <Spinner />
          ) : (
            <Button
              disabled={feedReducer.fullyLoaded}
              full
              style={styles.button}
              onPress={() => this.handleLoadMore()}
            >
              <Text>{feedReducer.fullyLoaded ? 'No More Posts' : 'Load More'}</Text>
            </Button>
          )}
        </View>
      </ScrollView>
    );
  }
}
