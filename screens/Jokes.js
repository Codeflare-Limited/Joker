import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, StatusBar, RefreshControl, Alert} from 'react-native';
import {styles} from '../assets/style/Style';
import axios from 'axios';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      isRefreshing: false,
      error: ''
    };
  }

  async fetchJokes() {
    await fetch('https://official-joke-api.appspot.com/jokes/ten', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson,
          loading: false,
        });
      })
      .catch(error => {
        {
          Alert.alert(error);
        }
      });
  }

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    const url = `https://official-joke-api.appspot.com/jokes/ten`;
    axios.get(url)
      .then(res => {
        let data = res.data
        this.setState({ isRefreshing: false, data: data }) // false isRefreshing flag for disable pull to refresh indicator, and clear all data and store only first page data
      })
      .catch(error => {
        this.setState({ isRefreshing: false, error: 'Something just went wrong' }) // false isRefreshing flag for disable pull to refresh
      });
  }

  renderJokes = joke => (
    <View style={{flex: 1}}>
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.card,
            {backgroundColor: joke.item.id % 2 == 0 ? '#916361' : '#2F4858'},
          ]}>
          <Text style={styles.cardText}>{joke.item.setup}</Text>
          <Text style={styles.punchLine}>{joke.item.punchline}</Text>
        </View>
      </View>
    </View>
  );

  componentDidMount() {
    this.fetchJokes();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.jokesTitle}>Swipe down to get new jokes</Text>
       <StatusBar barStyle="light-content" backgroundColor={'#000'} />
        {this.state.loading && (
          <ActivityIndicator
            style={{
              flex: 1,
              flexDirection: 'column',
              marginLeft: 0,
              position: 'relative',
              top: 50,
              bottom: 0,
              left: 0,
              marginTop: 0,
            }}
            size="large"
            color="red"
          />
        )}
        <FlatList
        refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          style={{marginTop: 50}}
          data={this.state.data}
          removeClippedSubviews={true}
          renderItem={item => this.renderJokes(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default Jokes;
