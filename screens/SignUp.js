import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity, ScrollView} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

const SignUp = ({ navigation }) => {

        const [userName,setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [ConfirmPassword,setConfirmPassword] = useState('');
        const [secured, setSecured] = useState(true);
        const [secure, setSecure] = useState(true);
        return (
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.text}>SIGN UP</Text>
            <View style={{
                marginTop: 100,
            }}>
            <TextInput
                onChangeText={(val) => setUserName(val)}
                placeholder="user-Name"
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
        <FontAwesome name='user-circle-o' size={24} color='#4c4c4c' style={{
                    top: 14,
                    left: 10,
                    position: 'absolute'
        }} />
        </View>
    
        <View style={{
            marginTop: 20,
        }}>
        <TextInput
            onChangeText={(val) => setEmail(val)}
            placeholder="Email"
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
                    top: 14,
                    left: 10,
                    position: 'absolute'
                }} />
        </View>
        <View style={{
            marginTop: 20,
        }}>
        <TextInput
            onChangeText={(val) => setPassword(val)}
            placeholder="Password"
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
                secureTextEntry={secured}
        />
        <FontAwesome name='lock' size={24} color='#4c4c4c' style={{
            top: 14,
            left:10,
            position: 'absolute',
        }}/>
        {
         secured?
         <TouchableOpacity onPress={() => setSecured(false)}style={{
             top:14,
             right:10,
             position:'absolute',
         }} >
             <MaterialCommunityIcons name='eye-off-outline' size={24}/>
         </TouchableOpacity> :
         <TouchableOpacity onPress={() => setSecured(true)} style={{
             top:14,
             right:10,
             position:'absolute',
         }}>
             <MaterialCommunityIcons name='eye-outline' size={24}/>
         </TouchableOpacity>  
        }
        </View>
        <View style={{marginTop: 20,}}>
        <TextInput
            onChangeText={(val) => setConfirmPassword(val)}
            placeholder="Confirm-Password"
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
                secureTextEntry={secure}
        />
        <FontAwesome name='lock' size={24} color='#4c4c4c' style={{
            top: 14,
            left:10,
            position: 'absolute',
        }}/>
        {
            secure?
            <TouchableOpacity onPress={() => setSecure(false)} style={{
                top:14,
                right:10,
                position:'absolute',
            }}>

                <MaterialCommunityIcons name="eye-off-outline" size={24}/>
            </TouchableOpacity>:
            <TouchableOpacity onPress={() => setSecure(true)} style={{
                top:14,
                right:10,
                position:'absolute',
            }}>
                <MaterialCommunityIcons name="eye-outline" size={24}/>
            </TouchableOpacity>
        }
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Chapter')} style={styles.button} > 
        <Text style={{fontSize: 18,alignSelf: 'center',color:'#FFF'}}> Start </Text>
        </TouchableOpacity>
        
        <View style={{
          marginTop:20,
          flexDirection:'row',
        }}>
            <Text style={{ color:'#000', }}> Do you have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn') }>
                <Text style={{
                        color: '#5d5add',
                        marginLeft:10, 
                        marginRight:10
                }}>LogIn</Text>
            </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        )
        }
        

export default SignUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:22,
    },

    text:{
        marginTop:50,
        fontSize: 30,
        alignSelf: 'center',
        color:'#000',
        fontWeight: 'bold',
        
    },
    button:{
        width: '100%',
        padding: 15,
        backgroundColor: '#4c4c4c',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop:20,
        
    },
})
    