import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Setting = ({ navigation }) => {
  const handleLogOut = () => {
    navigation.navigate("Login")
  }
  return (
    <View style={{flex: 1}}>

      <View style={styles.content} >
        <Text>THÔNG TIN CỦA BẠN</Text>
        <TouchableOpacity style={styles.logout} onPress={() => handleLogOut()}>
            <Text style={{ fontSize: 20 }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Setting