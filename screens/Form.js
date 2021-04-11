
import React from 'react';
import {  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader'
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
import firebase from "firebase";

export default class Form extends React.Component{
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: "",
      lastName: "",
      location: "",
      age: 0,
      hobbies:""
    };
  }
  
  updateForm = (userId) => {
    

    db.collection("users")
    .where("email_id", "==", userId)
    .get()
    .then()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        db.collection("users").doc(doc.id).update({
          formpresent: true,
        });
      });
    });
    
    
          db.collection("forms").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            location: this.state.location,
            age: this.state.age,
            hobbies: this.state.hobbies,
            userId:this.state.userId
          });
          return alert("Form Filled Successfully", "", [
            {
              text: "OK",
              onPress: () => {},
            },
          ]);
       
  };

    render(){
        return(
          <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
          
              <View style={{flex:0.95}}>
                  <Text style={styles.label}>First Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"First Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        firstName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Last Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Last Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        lastName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Age </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Age"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        age: text,
                      });
                    }}
                  />

                  <Text style={styles.label}> Location </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Location"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        location: text,
                      });
                    }}
                  />


                  <Text style={styles.label}> Hobbies </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Hobbies"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        hobbies: text,
                      });
                    }}
                  />

              </View>

            <View style={{flex:0.2,alignItems:'center'}}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  this.updateForm(
                    this.state.userId
                  )
                }
              >
                <Text style={styles.registerButtonText}>Submit</Text>
              </TouchableOpacity>
              </View>
              </ScrollView>
          
            
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    loginBox: {
      width: "80%",
      height: RFValue(50),
      borderWidth: 1.5,
      borderColor: "#ffffff",
      fontSize: RFValue(20),
      paddingLeft: RFValue(10),
    },
    button: {
      width: "80%",
      marginTop:15,
      height: RFValue(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(25),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom:RFValue(10),
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText: {
      color: "#32867d",
      fontWeight: "200",
      fontSize: RFValue(20),
    },
    label:{
      fontSize:RFValue(13),
      color:"#717D7E",
      fontWeight:'bold',
      paddingLeft:RFValue(10),
      marginLeft:RFValue(20)
    },
    formInput: {
      width: "90%",
      height: RFValue(45),
      padding: RFValue(10),
      borderWidth:1,
      borderRadius:5,
      borderColor:"grey",
      paddingBottom:RFValue(10),
      marginLeft:RFValue(20),
      marginBottom:RFValue(14)
    },
    registerButton: {
      width: "75%",
      height: RFValue(50),
      marginTop:RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(3),
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      // marginTop:RFValue(10),
    },
    registerButtonText: {
      fontSize: RFValue(23),
      fontWeight: "bold",
      color: "#fff",
    },
    cancelButtonText:{
      fontSize : RFValue(20),
      fontWeight:'bold',
      color: "#32867d",
      marginTop:RFValue(10)
    },
    scrollview:{
      flex: 1,
      backgroundColor: "white",
      marginTop:20
    },
    signupView:{
      flex:0.05,
      justifyContent:'center',
      alignItems:'center'
  },
  signupText:{
    fontSize:RFValue(20),
    fontWeight:"bold",
    color:"#32867d"
  },
  santaView:{
    flex:0.85,
    justifyContent:"center",
    alignItems:"center",
    padding:RFValue(10)
  },
  // santaImage:{
  //   width:"70%",
  //   height:"100%",
  //   resizeMode:"stretch"
  // },
  TextInput:{
    flex:0.5,
    alignItems:"center",
    justifyContent:"center"
  },
  bookImage:{
    width:"100%",
    height:RFValue(220)
  }
  });
