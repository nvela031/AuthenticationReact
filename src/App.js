import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import firebase from 'firebase';
import {ButtonSection, Header, Spinner} from './components/common';
import LoginForm from './LoginForm';

class App extends Component {
  state = {loggedIn: null};
  _isMounted = false;

  componentDidMount() {
    if (!firebase.apps.length) {
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

    this._isMounted = true;

    firebase.auth().onAuthStateChanged((user) => {
      if (this._isMounted) {
        if (user) {
          this.setState({loggedIn: true});
        } else {
          this.setState({loggedIn: false});
        }
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{marginTop: 8}}>
            <Button
              onPress={() => firebase.auth().signOut()}
              title="Log Out"></Button>
          </View>
        );
      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
