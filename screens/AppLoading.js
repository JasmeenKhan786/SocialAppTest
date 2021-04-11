
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class AppLoading extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>App Loading Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
