import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [secured, setSecured] = useState(true);

   

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={{
                marginTop:30,
                textAlign:'center',
                fontSize: 30,
                fontWeight:'bold',
                color: '#000',
            }}>Login</Text>
            <View style={{
                marginTop: 100,
            }}>
                <TextInput
                    onChangeText={(val) => setEmail(val)} 
                    placeholder="Enter your email"
                    style={{
                        width: '100%',
                        padding: 15, 
                        paddingLeft: 50,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#4c4c4c',
                        backgroundColor: '#ffff',
                        color: '#000',
                    }}
                />
                <Feather name='mail' size={24} color='#4c4c4c' style={{
                    top: 18,
                    left: 10,
                    position: 'absolute'
                }} />
            </View>
            
            <View style={{
                marginTop: 20,
            }}>
                <TextInput 
                    placeholder="Password"
                    onChangeText={(val) => setPassword(val)}
                    style={{
                        width: '100%',
                        padding: 15, 
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#4c4c4c',
                        backgroundColor: '#ffff',
                        color: '#000',
                        paddingLeft: 50,

                        
                    }}
                    secureTextEntry={secured}
                />
                <Feather name='lock' size={24} style={{
                    position:'absolute',
                    top: 17,
                    left: 14,
                }} />

                {
                    secured ? 
                    <TouchableOpacity onPress={() => setSecured(false)} style={{
                        position:'absolute',
                        top:17,
                        right: 15,
                    }}>
                        <MaterialCommunityIcons name='eye-off-outline' size={24} />
                    </TouchableOpacity> : 
                    <TouchableOpacity onPress={() => setSecured(true)} style={{
                        position:'absolute',
                        top:17,
                        right: 15,
                    }}> 
                        <MaterialCommunityIcons name='eye-outline' size={24} />
                    </TouchableOpacity>
                }
                
            </View>

            <TouchableOpacity>
                <Text style={{
                    color: '#5d5add',
                    marginTop:20,
                    marginLeft:10,
                }}>Forgot Password ? </Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.button}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                marginTop: 20,
            }}>
                <Text style={{
                    color:'#000',
                    marginRight: 10,
                    marginLeft: 10,
                }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{
                        color: '#5d5add'
                    }}>Sign Up</Text>
                </TouchableOpacity>
              
            </View>

        </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding:22,
        backgroundColor:'#fff',
        height: '100%'
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#4c4c4c',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      },
})