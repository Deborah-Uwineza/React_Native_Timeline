import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


const OnBoard = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.HeaderText}>TASKS APP</Text>
            {/* <Text style={{
                fontSize: 45,
                color: 'black',
                marginTop: 50,
            }}>Girls Talk</Text> */}
            <TouchableOpacity onPress={() => navigation.navigate('Chapter2')} style={styles.button}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', }}>Let's Get started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.buttonSignin}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 22,
    },
    HeaderText: {
      color: 'blue',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 40,
    },
   
    button: {
      width: '100%',
      padding: 15,
      backgroundColor: '#4c4c4c',
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 200,
    },
    buttonSignin: {
      width: '100%',
      padding: 15,
      backgroundColor: '#5d5add',
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 20,
    }
  });
  
