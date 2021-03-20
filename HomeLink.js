import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default class HomeLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://efs5i1ube5.execute-api.eu-central-1.amazonaws.com/prod')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{  padding: 100, }}>
        {isLoading ? <ActivityIndicator/> : (
           
              <Text> {data.home}</Text>
          
        )}
      </View>
    );
  }
};