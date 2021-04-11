
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import MyHeader from '../components/MyHeader'
export default class Reset extends React.Component{
    render(){
        return(
          <View style={styles.container}>
          <View style={{ flex: 0.12 }}>
                <MyHeader title="Settings" navigation={this.props.navigation} />
                </View>
            <View style={styles.container}>
                
                <Text>Reset Password Tab</Text>
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
