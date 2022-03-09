import { Dimensions, Image,  StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text ,} from 'react-native'
import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';
const item_image = require('../../asset/wifi.jpg');


const TinDangMoi = () => {
    const navigation = useNavigation(); // navigation hook
    // console.log("tin mới lần 1", navigation)
    
    
    const [justifyContent, setJustifyContent] = useState("NOKIA N90");

    const handleGetDataPost = (data) => {
      navigation.navigate("Post",  { data: data })
    }
    return (
        <PreviewLayout
            label="Tin mới nhất"
         
            values={[
                {
                  id: 1,
                  name: "NOKIA N90",
                  gia: 2000000,
                  time: "1 giờ"
                },
                {
                  id: 2,
                  name: "NOKIA N91",
                  gia: 2000000,
                  time: "1 giờ"
                },
                {
                  id: 3,
                  name: "NOKIA N92",
                  gia: 2000000,
                  time: "1 giờ"
                },
                {
                  id: 4,
                  name: "NOKIA N93",
                  gia: 2000000,
                  time: "1 giờ"
                }


            ]}
            handleGetDataPost={handleGetDataPost}
            >

        </PreviewLayout>
    )
}

export default TinDangMoi

const PreviewLayout = ({
    label,
    children,
    values,
    handleGetDataPost,
  }) => (
    <View style={{ padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity 
            key={value.id}
            onPress={() => handleGetDataPost(value)}
            style={[styles.button]}
          >
            <View style={{ borderRadius: 5 , height: 162, width: "100%", zIndex: 100 }}>
                <Image source={item_image} style={{  height: "100%", width: "100%", resizeMode: 'stretch', zIndex: 1, borderRadius: 5 }}/> 
            </View>
            <Text
              style={[
                styles.buttonLabel,
               
              ]}
            >
              {value.name} 
            </Text>
            <Text style={styles.price}>12.978đ</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View  style={styles.timeIcon}>
                  <MaterialIcons name="person" size={16} color="white"/>
              </View>
              
              <Text style={styles.time}>
                  1 tiếng trước
              </Text>              
            </View>


          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container]}>
        {children}
      </View>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: "aliceblue",
    },
    box: {
      width: 50,
      height: 50,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      
    },
    button: {
      borderWidth: 0.2,
      height: 285,
      paddingHorizontal: 3,
      paddingVertical: 3,
      // borderRadius: 4,
      // backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "coral",
      borderWidth: 0,
    },
    buttonLabel: {
      width: 162,
      height: 60,
      fontSize: 15,
      fontWeight: "500",
      paddingVertical: 10,
      lineHeight: 21
    },
    price:{
      fontSize: 15,
      color: "red",
      fontWeight: "bold",
      width: 162,
      height: 30
    },
    selectedLabel: {
      color: "white",
      paddingBottom: 10
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      paddingVertical: 10,
      color: "#000000"
    },
    time:{
      fontSize: 12
    },
    timeIcon:{
      width: 18,
      height: 18,
      borderRadius: 100,
      marginRight: 5,
      backgroundColor: "#9b9b9b",
      justifyContent: "center",
      alignItems: "center"
    },

  });