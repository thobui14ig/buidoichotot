import { View, Text, TouchableOpacity, TextInput ,ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import {Picker} from '@react-native-picker/picker';
import styles from './style'
const user = {
  "data": [
  {
  "id_benhnhan": 1,
  "ten": "Bui Thanh Tho",
  "tuoi": "20",
  "thongtinluotkhams": [
  {
  "id": 1,
  "id_luotkham": 100
  },
  {
  "id": 2,
  "id_luotkham": 101
  }
  ]
  }
  ],
  "count": 1,
  "total": 1,
  "page": 1,
  "pageCount": 1
  }
const DanhSachBenhNhan = ({navigation}) => {
  console.log(11111)
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [data, setData] = useState([]);
    const getBenhNhan = async () => {
      setData(user);
        // try {
        // const response = await fetch('http://192.168.0.106:4000/benhnhan');
        // const json = await response.json();
        // setData(user);
        // } catch (error) {
        // console.error(error);
        // }
    }
  
    useEffect(() => {
        getBenhNhan();
    }, []);
  
   console.log("-----",data)
    return (
        <View style={{flex: 1}}>


        <View style={styles.content} >
          
          <View style={styles.selectBox}>
            <Text>Khoa:</Text>
            <Picker style={{ height: 50, width: 150 }}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Nhi" value="java" />
              <Picker.Item label="Covid" value="js" />
          </Picker> 
          </View>
          <View style={styles.search}>
  
            <TextInput style={styles.input} placeholder="Theo tên"/>
            <TextInput style={styles.input} placeholder="Theo phòng"/>
          </View>
          <View>
            <ScrollView>
              {data.data && data.data.length > 0 && 
                data.data.map((item, index) => {
                  return(
                      <TouchableOpacity key={index} onPress={() => {
                        navigation.navigate("ChonNgayVaBuoi")
                    }}>
                      <View style={styles.listNV}>
                          <Text style={styles.name}>{item.ten}</Text>
                          <Text style={styles.age}>2 Tuổi</Text>
                          <Text style={styles.phong}>p0001</Text>
                      </View>               
                  </TouchableOpacity>   
                  )
                })
             
              }
  
  
                          
            </ScrollView>
    
                 
          </View>
  
  
        </View>
        
  
      </View>
    )
}

export default DanhSachBenhNhan





  