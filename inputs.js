import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Colors } from 'react-native'

class Inputs extends Component {

  state = {
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (email, pass) => {
    if (email === "" || pass === "") {
      if (email === "") {
        alert('Please enter email')
      } else {
        alert('Please enter password')
      }
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        alert('Please enter valid email address in xyz@abc.com format')
        return false;
      }
      else {
        () => this.login(email, pass)
        alert('email: ' + email + ' \npassword: ' + pass)
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.sectionTitle}>
          Email
        </Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <Text style={styles.sectionTitle}>
          Password
        </Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePassword} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: "center",
    color: 'white'
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 15,
    color: '#FF0000',
  }
})