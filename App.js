import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Linking } from 'react-native';
import checkIfFirstLaunch from './checkIfFirstLaunch';
import HomeLink from './HomeLink';
import Link from './Link';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false,
    };
  }

  async UNSAFE_componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }

  render() {
    const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;

    if (!hasCheckedAsyncStorage) {
      return  null;
    }

    return isFirstLaunch ?
        <Text  onPress={() => Linking.openURL(<Link />)}>
          <Link />
        </Text> : 
        <Text  onPress={() => Linking.openURL(<HomeLink />)}>
           <HomeLink />
        </Text>
    ;
  }
}