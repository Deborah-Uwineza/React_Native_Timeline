import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet, TouchableOpacity, Modal, TextInput, Alert, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const ChapterI = ()=>{
    const [items, setItems] = useState([]);
    const [compItems, setCompItems]= useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [time, setTime]= useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res => {
            setItems(res.data.data.filter(item => item.finished === false ));
            const item = res.data.data.filter(item => item.finished === true );
            setCompItems(item);
        })
    }, [])



    const flagFinished = (text) => {
        axios.patch('https://todooapp.vercel.app/api/addTodo.js', {
            text: text
        }).then(() => {
            axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res => {
                setItems(res.data.data.filter(item => item.finished === false ));
                const item = res.data.data.filter(item => item.finished === true );
                setCompItems(item);
            });
        })
    }

    const addTask = () => {
        setLoading(true)
        axios.post('https://todooapp.vercel.app/api/addTodo.js', {
            text: text,
            time: time,
            finished: false
        }).then(res => {
            axios.get('https://todooapp.vercel.app/api/addTodo.js').then(res => {
                setItems(res.data.data.filter(item => item.finished === false ));
            const item = res.data.data.filter(item => item.finished === true );
            setCompItems(item);
                setLoading(false)
                setModalVisible(!modalVisible)
            })
        })
    }

    
return(
    <View style={styles.container}>
        <ScrollView>
       <View style={{
           marginTop: 35,
           marginLeft: 20,
           marginRight:20,
           flexDirection: 'row',
           justifyContent:'space-between',
       }}>
            <Feather name='menu' size={24} color='#4c4c4c'/>
            <Text style={{ fontSize:20 , fontWeight:'bold' }}>My TODO App</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name='plus-square' size={24} color='#89d9af' style={{marginTop:5}}/>
            </TouchableOpacity>
       </View>
       <Text style={{
           color:'black',
           fontSize:18,
           marginTop: 20,
           marginLeft:14,
           marginBottom: 10,
       }}> Completed Tasks <Text>({compItems.length})</Text></Text>
       
       {
           compItems.length === 0 ? <Text style={{
            color: '#4c4c4c',
            marginLeft: 20
        }}>No Tasks Completed </Text> : compItems.map((item, idx) => {
            return (
                 <TouchableOpacity style={{ 
            backgroundColor:'#89d9af',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20,
            width:'90%',
            borderRadius:20,
            alignSelf:'center',
            marginTop:0,
            marginBottom:10,
            minHeight: 100,
         }}>
            <AntDesign name='checkcircle' size={18} color='green'/>
            <Text style={{
                width:'60%',
                textAlign: 'justify'  
             }}>{item.text}</Text>
            <Text style={{
                fontSize: 11,
                color: '#4c4c4c'
            }}>{item.time}</Text>
        </TouchableOpacity>
        )
    })
       }
       <Text style={{
           color:'black',
           fontSize:18,
           marginTop: 20,
           marginLeft:14,
           marginBottom: 10,
       }}> Remaining Tasks <Text>({items.length})</Text></Text>
       <View> 
        { items.length === 0 ? <Text style={{
            color: '#4c4c4c',
            marginLeft: 20
        }}>No Tasks Assigned</Text> : items?.map((item, idx) => {
            return (
                
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
                    
                }} key={idx} style={{ 
                    backgroundColor:'#f9f9f9',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:20,
                    width:'90%',
                    borderRadius:20,
                    alignSelf:'center',
                    marginTop:10,
                    minHeight: 100,
                    }}>
                    <AntDesign name='checkcircle' size={18} color='#c4c4c4'/>
                    <Text style={{
                        width:'60%',
                        textAlign: 'justify'  
                        }}>{item.text}</Text>
                    <Text style={{
                        fontSize: 11,
                        color: '#4c4c4c'
                    }}>{item.time}</Text>
                </TouchableOpacity>
            )
        }) }
       </View>
       {/* Modal element for adding a task */}
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
                        placeholder='Type a task'
                        style = {{
                            borderColor:'grey',
                            width:'100%',
                            padding:10,
                            borderWidth:1,
                            borderRadius:10,
                            alignSelf:'center',
                            marginBottom: 10,
                        }}
                    />
                    <TextInput 
                        onChangeText={(val) => setTime(val)}
                        placeholder='Type schedure'
                        style = {{
                            borderColor:'grey',
                            width:'100%',
                            padding:10,
                            marginTop:2,
                            borderWidth:1,
                            marginBottom: 10,
                            borderRadius:10,
                            alignSelf:'center',
                        }}
                    />
                    <View style={{
                        width: '100%',
                        marginTop:5,
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}>
                        <TouchableOpacity onPress={addTask} style={{
                            backgroundColor: '#89d9af',
                            width: 100,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}>
                             <Text style={{
                                color: '#fff'
                            }}>{loading ? 'Adding..' : 'Add' }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                            backgroundColor: '#aa1212',
                            width: 100,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                color: '#fff'
                            }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        </ScrollView>
    </View>
)
}
export default ChapterI;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 10,
        width: '97%',
        minHeight: 180,
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",

        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
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