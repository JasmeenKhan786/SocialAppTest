
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";
import MyHeader from '../components/MyHeader'
const actions=[{
  text: "New User",
  icon: require("../assets/icon.png"),
  name: "new_user",
  position: 1
}]

export default class Display extends React.Component{
    render(){
        return(
          <View style={styles.container}>
          <View>
               <MyHeader title="Home" navigation={this.props.navigation} />
               </View>
            <View style={styles.container}>
                
                <Text>This is the Display Screen! Display your records here!!</Text>
               
                <FloatingAction  actions={actions}
                actionsPaddingTopBottom={5}
                onPressItem={()=>this.props.navigation.navigate('Form')}/>
            
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
