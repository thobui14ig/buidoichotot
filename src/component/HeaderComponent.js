import { View, Text, TouchableOpacity, TextInput ,ScrollView, StatusBar, Image, Dimensions} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Home/style'
const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.inputHeader}>
            <FontAwesome name="search" size={20} style={{paddingHorizontal: 10}} />
            <TextInput
                style={styles.input}
                placeholder="Nhập sản phẩm"
                // keyboardType="numeric"
            />
        </View>
        <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" size={30} color="#fff" />
        </View>
    </View>
  )
}

export default HeaderComponent