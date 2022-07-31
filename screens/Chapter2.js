import React, { useState,useEffect} from 'react';
import {View,Text ,StyleSheet,TouchableOpacity,TextInput,Modal, Alert,ScrollView} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import axios from 'axios';
import SearchBar from "../components/SearchBar";


 


const Chapter2 = () => {
    // const items
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [modalVisible, setModalVisible]= useState(false);
    const [text, setText]= useState('');
    const [time, setTime]= useState('');
    const [items , setItems]= useState([]);
    const [items2, setItems2]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(() => {
        axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res =>{
                setItems(res.data.data.filter(item => item.finished === false));
                const item = res.data.data . filter(item => item.finished === true);
                setItems2(item);
        })
    },[])

    const flagFinished = (text) => {
        axios.patch('https://todooapp.vercel.app/api/addTodo.js',{
            text: text
        }).then((res) => {
            
            axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res =>{
                setItems(res.data.data.filter(item => item.finished === false ));
                const item = res.data.data.filter(item => item.finished === true );
                setCompItems(item);
                });
            
        })
    }
  

    const addTask = () => {
        setLoading (true)
        axios.post('https://todooapp.vercel.app/api/addTodo.js',{
        text:text,
        time:time,
        finished:false
      }).then(res =>{
          axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res => {
              setItems(res.data.data.filter(item => item.finished === false));
              const item = res.data.data.filter(item =>item.finished === true);
              setItems2(item);
              setLoading(false)
              setModalVisible(!modalVisible)
          });
      })
    }

    return(
            <View Style={styles.container}>
                <ScrollView>
                <View style={{
                    marginTop:35,
                    marginRight:20,
                    marginLeft:20,
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <Feather name='menu' size={24} color='#4c4c4c'/>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:20,
                    }}>Plan your Task</Text>
                    
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Feather name='plus-square' size={24} color='#89d9af' style={{marginTop:5}} />
                    </TouchableOpacity>
                    
                </View>
                <View> <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      /></View>
                <Text style={{
                    marginTop:20,
                    fontSize:15,
                    marginLeft:20,
                    fontWeight:'bold',
                }}>Place of Complete Task:<Text>({items2.length})</Text></Text>
                <View>
                {
                    items2.length === 0 ? <Text style={{
                        color: '#4c4c4c',
                        marginLeft: 20
                    }}>No complete task here</Text>:items2?.map((item,idx) => {
                        return(
                            <TouchableOpacity style={{
                            backgroundColor:'#89d9af',
                            padding:20,
                            margin:20,
                            marginLeft:20,
                            marginRight:20,
                            borderRadius:20,
                            borderColor:'#000',
                            borderWidth:1,
                            width:'90%',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            minHeight: 100,
                            
                        }}>
                            <AntDesign name='checkcircle' size={18} color='#4c4c4c'/>
                            <Text styl={{
                                textAlign:'justify',
                                width: '60%'
                            }} >{item.text}
                            </Text>
                            <Text style={{
                                fontSize:11,
                                color:'#4c4c4c',
                            }}>{item.time}</Text>
                        </TouchableOpacity>
                        )
                    })
                }
                </View>
                <Text style={{
                     marginTop:20,
                     fontSize:15,
                     marginLeft:20,
                     fontWeight:'bold',
                }}>Place here new activities:<Text>({items.length})</Text></Text>
                 <View>
                {items.length=== 0 ? <Text style={{
                     color: '#4c4c4c',
                     marginLeft: 20
                }}> No task assigned</Text>: items?.map((item,idx) =>{
                   return(
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Todoo App','Do you want to flag this task as finished?',[
                            {
                                text:'OK',
                                onPress:() => flagFinished(item.text)
                            },
                            {
                             text:'Cancel',
                             onPress:() => {
                                 return false;
                             }  
                            }
                        ]);
                         
                    }}key={idx} style={{
                        backgroundColor:'#f9f9f9',
                        padding:20,
                        margin:10,
                        marginLeft:20,
                        marginRight:20,
                        borderRadius:20,
                        borderColor:'#000',
                        borderWidth:1,
                        width:'90%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        minHeight: 100
                        
                    }}>
                        <AntDesign name='checkcircle' size={18} color='#4c4c4c'/>
                        <Text style={{
                            textAlign:'justify',
                            width: '60%'
                        }} >{item.text}</Text>
                        <Text style={{
                            fontSize:11,
                            color:'#4c4c4c',
                        }}>{item.time}</Text>
                    </TouchableOpacity>
                   )
               })
               }
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput 
                    onChangeText={(val) => setText(val)}
                    placeholder='Type here your task'
                    style={{
                        borderColor:'grey',
                        width:'100%',
                        padding:10,
                        borderWidth:1,
                        borderRadius:20,
                        alignSelf:'center',
                    }}
                    />
                    <TextInput 
                    onChangeText={(val) => setTime(val)}
                    placeholder='Type here you schedure'
                    style={{
                        borderColor:'grey',
                        width:'100%',
                        marginTop:10,
                        padding:10,
                        borderWidth:1,
                        borderRadius:20,
                        alignSelf:'center',
                    }}
                    />
                    <View style={{
                        width:'100%',
                        marginTop:20,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        
                      

                    }}>
                       {/* ii */}
                        <TouchableOpacity onPress={addTask}
                        style={{
                            backgroundColor:'#89d9af',
                            borderRadius:10,
                            width:80,
                            height:40,
                            alignItems: 'center',
                            justifyContent:'center',
                            

                        }} >
                            <Text style={{
                                color:'#fff',
                                alignSelf:'center',
                            }}>{loading?'Adding..':'Add'}</Text>
                        </TouchableOpacity  >
                        <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            backgroundColor:'#aa1212',
                            borderRadius:10,
                            width:80,
                            height:40,
                            alignItems: 'center',
                            justifyContent:'center',
                            

                        }} >
                            <Text style={{
                                color:'#fff',
                            }}
                            >Exit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
            </ScrollView>
            </View>

    )
}

export default Chapter2;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width:'97%',
        position:'absolute',
        bottom: 5,


        shadowOffset: {
          width: 0,
          height: 2

        },
        shadowOpacity: 1,
        shadowRadius: 14,
        elevation: 10
      },
      
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

