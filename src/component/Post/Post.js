import React from 'react'
import { Text, View , StyleSheet, Image} from 'react-native'
import Slick from 'react-native-slick'
import HeaderComponent from '../HeaderComponent';
const item_image = require('../../asset/item.jpg');
const Post = ({ route }) => {
    // console.log(route.params.data)
  const data = route.params.data;
  return (
    <View>
       <HeaderComponent/> 
       <View>
          <Text>Image</Text>
       </View>  
      <View>
          <Text>{data.id}</Text>
          <Text>{data.name}</Text>

          <Text>{data.gia}</Text>
          <Text>{data.time}</Text>

      </View>      
    </View>

  )
}

export default Post

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })