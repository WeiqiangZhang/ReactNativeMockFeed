import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Icon } from "native-base";
import styles from "./styles";

export default class FeedInfo extends Component {
  componentDidMount() {}
  render() {
    const { post } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            style={styles.profileImage}
            source={{
              uri: post.image.profile,
            }}
          />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: post.image.post,
          }}
        />
        <Text style={styles.caption}>{post.caption}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Icon style={styles.icon} name="star" />
            <Text>{post.stats.star}</Text>
          </View>
          <View style={styles.stats}>
            <Icon style={styles.icon} name="md-people" />
            <Text>{post.stats.follow}</Text>
          </View>
          <View style={styles.stats}>
            <Icon style={styles.icon} name="md-eye" />
            <Text>{post.stats.views}</Text>
          </View>
        </View>
      </View>
    );
  }
}
