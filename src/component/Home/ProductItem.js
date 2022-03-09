import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const item_image = require('../../asset/item.jpg');
const ProductItem = (props) => {
    console.log(1)
  return (
    <View style={styles.danhmucItem}>
        <View style={{ marginBottom: 40 }}>
          <Image source={item_image} style={styles.danhmucItemImage}/>  
          <Text style={styles.danhmucItemName}>Bất động sản</Text>          
        </View>
        <View>
          <Image source={item_image} style={styles.danhmucItemImage}/>  
          <Text style={styles.danhmucItemName}>Bất động sản</Text>          
        </View>

    </View>  
  )
}

export default ProductItem