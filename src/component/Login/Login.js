import { View, Text , SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './style'


const Login = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate("MyTabs")
    }
   
  return (
     
    <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: "center"}}>
            <View style={{height: "20%", width: "100%",flex: 1, marginTop: 100}}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Email</Text>
                    <TextInput style={styles.input}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Password</Text>
                    <TextInput style={styles.input}
                    />
                </View>
            </View>
            
           <View style={styles.action}>
                <TouchableOpacity style={styles.actionItem} onPress={() => handleLogin()}>
                    <Text style={{ fontSize: 20 }}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                    <Text style={{ fontSize: 20 }}>Đăng ký</Text>
                </TouchableOpacity>
                

           </View>
        </View>
    </View>
  )
}

export default Login