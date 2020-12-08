import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAMuNWKPQ0TA-tY_wnsUuBI9j4OSwNP1I',
      authDomain: 'auth-2a7a2.firebaseapp.com',
      projectId: 'auth-2a7a2',
      storageBucket: 'auth-2a7a2.appspot.com',
      messagingSenderId: '533726724695',
      appId: '1:533726724695:web:e8f3b918952905b168d912',
      measurementId: 'G-8DRW7FM5WT',
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
