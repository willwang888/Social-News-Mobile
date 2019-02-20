import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PaddedContainer from '../../components/PaddedContainer';

import globalStyles from '../../constants/Globals';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
  }

  handleSignupPress = () => {
    console.log(this.state);
  }

  navigateToLoginScreen = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    const { username, password, email, firstName, lastName } = this.state;
    return (
      <PaddedContainer>
        <Text style={[globalStyles.textHeaderLarge, globalStyles.textCenter]}>Sign Up</Text>
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ firstName: text })}
          value={firstName}
          placeholder="Enter firstName..."
        />
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ lastName: text })}
          value={lastName}
          placeholder="Enter lastName..."
        />
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ username: text })}
          value={username}
          placeholder="Enter username..."
        />
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ password: text })}
          value={password}
          placeholder="Enter password..."
        />
        <TextInput
          style={[globalStyles.input, globalStyles.textBodyLarge]}
          onChangeText={(text) => this.setState({ email: text })}
          value={email}
          placeholder="Enter email..."
        />
        <TouchableOpacity onPress={() => this.handleSignupPress()}>
          <View style={[globalStyles.buttonBlackBorder]}>
            <Text style={[globalStyles.buttonTextDark]}>Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateToLoginScreen()}>
          <Text style={[globalStyles.textBody, globalStyles.textCenter]}>
            Already have an account? Login
            {' '}
            <Text style={globalStyles.textYellow}>here</Text>
          </Text>
        </TouchableOpacity>
      </PaddedContainer>
    );
  }
}
