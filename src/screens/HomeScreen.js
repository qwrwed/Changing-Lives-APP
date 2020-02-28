import React from 'react';
import { Image, View } from 'react-native';
import { API_BASEROUTE } from 'react-native-dotenv';
import styles from '../styles';
import { retrieveData, genericGet } from '../utils';
import ButtonList from '../components/ButtonList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
  };

  componentDidMount () {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      retrieveData('authToken').then((authToken) => {
        var apiSubroute = '/api/users/login/silent';
        var apiQuery = `?token=${authToken}`;
        genericGet(API_BASEROUTE, apiSubroute, apiQuery, true).then((response) => {
          if (response !== 'OK') {
            this.props.navigation.navigate('Login');
          }
        });
      });
    });
  }

  componentWillUnmount () {
    // Remove the event listener
    this.focusListener.remove();
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <ButtonList
          // style={{
          // container: styles.topicContainer,
          // }}
          data={[
            {
              title: 'Resources',
              target: 'Sections'
            },
            {
              title: 'Forum',
              target: 'Forum'
            },
            {
              title: 'Settings',
              target: 'Settings'
            }
          ]}
          onPress={(item) => this.props.navigation.navigate(item.target)}
        />
      </View>
    );
  }
}