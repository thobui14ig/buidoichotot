import { View, Text, TouchableOpacity, TextInput ,ScrollView, StatusBar, Image, Dimensions} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'


import Fillter from '../Fillter';
import HomeSectionComponent from './HomeSectionComponent';
import HeaderComponent from '../HeaderComponent';
import TinDangMoi from './TinDangMoi';
// import { dummyData } from '../data/Data'


const Home = ({ navigation }) => {
  

  return (
    <View>

      <StatusBar barStyle='light-content' />
      
        {/* -----------------------HEADER */}
        <HeaderComponent/>   
        {/* <ScrollView horizontal={true}>
            <Fillter/>
    
        </ScrollView> */}
        <ScrollView >
            <HomeSectionComponent/>         
            <TinDangMoi/>
      </ScrollView>





    </View>

  )
}

export default Home