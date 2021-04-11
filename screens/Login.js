import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import Icon from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


import db from "../config";
import firebase from "firebase";
import { ThemeProvider } from "react-native-elements";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "Hello",
      lastName: "World",
      location: "India",
      age: 0,
      confirmPassword: "",
      isModalVisible: "false",
      check_textInputChanged:false,
      secureTextEntry:true,
      confirm_secureTextEntry:true
    };
  }

  textInputChange =(email)=>{
    if(email.length !== 0){
      this.setState({emailId:email,check_textInputChanged:true})
    }
    else{
      this.setState({emailId:email,check_textInputChanged:false})
    }
  
  }
  passwordChange=(pwd)=>{
    this.setState({password:pwd})
  }
  confirmPasswordChange=(pwd)=>{
    this.setState({confirmPassword:pwd})
  }
  
  changeSecureTextEntry=()=>{
    this.setState({secureTextEntry:!this.state.secureTextEntry})
  }
  changeConfirmSecureTextEntry=()=>{
    this.setState({confirm_secureTextEntry:!this.state.confirm_secureTextEntry})
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            location: this.state.location,
            email_id: this.state.emailId,
            age: this.state.age,
            formpresent: false,
            
          });
          return alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () =>{ this.setState({ isModalVisible: false })
            this.props.navigation.navigate('Login')},
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
      >
              <View style={{backgroundColor:"#FFF",height:"100%"}}>
                  <Image source ={require('../assets/adaptive-icon.png')}
                      style={{width:"100%",height:"43%"}}
                  />
                  <Text
                   style={{
                       fontSize:30,
                       fontFamily:"SemiBold",
                       alignSelf:"center",
                   }}
                  >Sign Up Form</Text>
  
                  <Text
                  style={{
                      fontFamily:"SemiBold",
                      marginHorizontal:55,
                      textAlign:'center',
                      marginTop:5,
                      opacity:0.4
                  }}
                  >Register Here
                  </Text>
  
                  <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                      marginHorizontal:55,
                      borderWidth:2,
                      marginTop:50,
                      paddingHorizontal:10,
                      borderColor:"#00716F",
                      borderRadius:23,
                      paddingVertical:2
                  }}>
                    
                       <Icon name="mail" type='antdesign' color="#00716F" size={24} /> 
  
                      <TextInput 
                          placeholder={'Username / Email'}
                          style={{paddingHorizontal:10,width:180}} 
                          onChangeText={(email)=>{this.textInputChange(email)}}
                      />
                      {this.state.check_textInputChanged?(
                        <View style={{paddingHorizontal:0}}>
                      <Feather name="check-circle" color="#00716F" size={24}/>
                      </View>
                      )
                      :null}
                     
  
                      
  
                  </View>
                  <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                      marginHorizontal:55,
                      borderWidth:2,
                      marginTop:15,
                      paddingHorizontal:10,
                      borderColor:"#00716F",
                      borderRadius:23,
                      paddingVertical:2
                  }}>
                    
                     <Icon name="lock" type='antdesign' color="#00716F" size={24} /> 
                      <TextInput 
                       secureTextEntry ={this.state.secureTextEntry?true:false}
                       placeholder="Password"
                       autoCapitalize="none"
                      style={{paddingHorizontal:10,width:180}} 
                      onChangeText={(pwd)=>{this.passwordChange(pwd)}}
                      />
                        <TouchableOpacity onPress={this.changeSecureTextEntry}>
                          <Text>
                      {this.state.secureTextEntry?
                      <Feather name="eye-off" color="grey" size={20} />:
                      <Feather name="eye" color="grey" size={20} />
                      }
                      </Text>
                      </TouchableOpacity>
                      
                      
  
                  </View>

                  <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                      marginHorizontal:55,
                      borderWidth:2,
                      marginTop:15,
                      paddingHorizontal:10,
                      borderColor:"#00716F",
                      borderRadius:23,
                      paddingVertical:2
                  }}>
                    
                     <Icon name="lock" type='antdesign' color="#00716F" size={24} /> 
                      <TextInput 
                       secureTextEntry ={this.state.confirm_secureTextEntry?true:false}
                       placeholder="Confirm Password"
                       autoCapitalize="none"
                      style={{paddingHorizontal:10,width:180}} 
                      onChangeText={(pwd)=>{this.confirmPasswordChange(pwd)}}
                      />
                        <TouchableOpacity onPress={this.changeConfirmSecureTextEntry}>
                          <Text>
                      {this.state.confirm_secureTextEntry?
                      <Feather name="eye-off" color="grey" size={20} />:
                      <Feather name="eye" color="grey" size={20} />
                      }
                      </Text>
                      </TouchableOpacity>
                      
                      
  
                  </View>
  
                  <View style={{
                      marginHorizontal:55,
                      alignItems:"center",
                      justifyContent:"center",
                      marginTop:30,
                      backgroundColor:"turquoise",
                      paddingVertical:10,
                      borderRadius:23
                  }}>
                    <TouchableOpacity   onPress={() =>
                  this.userSignUp(
                    this.state.emailId,
                    this.state.password,
                    this.state.confirmPassword
                  )}>
                      <Text 
                      style={{
                          color:"white",
                          fontFamily:"SemiBold"
                      }}>Sign Up</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{
                      marginHorizontal:55,
                      alignItems:"center",
                      justifyContent:"center",
                      marginTop:30,
                      backgroundColor:"turquoise",
                      paddingVertical:10,
                      borderRadius:23
                  }}>
                    <TouchableOpacity   onPress={() => {
                 this.setState({ isModalVisible: false });
               }}>
                      <Text 
                      style={{
                          color:"white",
                          fontFamily:"SemiBold"
                      }}> Cancel </Text>
                      </TouchableOpacity>
                  </View>
                  </View>
       
          
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.showModal()}
        <Image source ={require('../assets/adaptive-icon.png')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Login Form</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                > Login to the system
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                     <Icon name="mail" type='antdesign' color="#00716F" size={24} /> 

                    <TextInput 
                        placeholder={'Username / Email'}
                        style={{paddingHorizontal:10,width:180}} 
                        onChangeText={(email)=>{this.textInputChange(email)}}
                    />
                    {this.state.check_textInputChanged?(
                      <View style={{paddingHorizontal:0}}>
                    <Feather name="check-circle" color="#00716F" size={24}/>
                    </View>
                    )
                    :null}
                   

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                   <Icon name="lock" type='antdesign' color="#00716F" size={24} /> 
                    <TextInput 
                     secureTextEntry ={this.state.secureTextEntry?true:false}
                     placeholder="Password"
                     autoCapitalize="none"
                    style={{paddingHorizontal:10,width:180}} 
                    onChangeText={(pwd)=>{this.passwordChange(pwd)}}
                    />
                      <TouchableOpacity onPress={this.changeSecureTextEntry}>
                        <Text>
                    {this.state.secureTextEntry?
                    <Feather name="eye-off" color="grey" size={20} />:
                    <Feather name="eye" color="grey" size={20} />
                    }
                    </Text>
                    </TouchableOpacity>
                    
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"turquoise",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                  <TouchableOpacity  onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);  
            }}>
                    <Text 
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                    </TouchableOpacity>
                </View>
          
          <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"white",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                  <TouchableOpacity  onPress={() => this.setState({ isModalVisible: true })}>
                    <Text 
                    style={{
                        color:"turquoise",
                        fontFamily:"SemiBold"
                    }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }});