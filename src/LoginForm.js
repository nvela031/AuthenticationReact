import React, {Component} from 'react';
import {ButtonSection, Card, CardSection, Input} from './components/common';
import firebase from 'firebase';

export class LoginForm extends Component {
  state = {email: '', password: ''};

  onButtonPress() {
    const {email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
          />
        </CardSection>

        <CardSection>
          <ButtonSection onPress={this.onButtonPress.bind(this)}>
            Log in
          </ButtonSection>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
