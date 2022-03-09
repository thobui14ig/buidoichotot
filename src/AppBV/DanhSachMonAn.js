import { View, Text, TouchableOpacity,Button, Platform, Picker } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
const DanhSachMonAn = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    console.log(selectedValue)
  return (
      <View style={{flex: 1}}>
        <View style={styles.home}> 
            <TouchableOpacity onPress={() => {
                navigation.goBack()
                }}>
                <View style={styles.back}>
                <Text>Back</Text>
                </View>        
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Setting")
                }}>
                <View style={styles.setting}>
                    <Text>Setting</Text>
                </View>        
            </TouchableOpacity>

        </View>     
        <View style={{marginHorizontal: 20, flex: 10}}>
            <Text style={{fontSize: 30, marginTop: 20}}>Danh sách món ăn</Text>
            <View style={styles.selectBox}>
                <Text>Chọn:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Thức ăn" value="thuc-an" />
                    <Picker.Item label="Nước" value="nuoc" />
                </Picker>          
            </View>
            <View style={styles.monAnitem}>
                <View>
                    <Text style={{fontSize: 22}}>Nước ép chanh</Text>
                    <Text style={{fontSize: 18}}>15.000đ</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.addmon}>+</Text>
                </TouchableOpacity>
                
                <Text style={styles.soluong}>x</Text>

                <Text style={styles.soluong}>2</Text>

            </View>

           
        </View> 
        <TouchableOpacity  style={styles.chonMonBottom}onPress={() => {
                 navigation.navigate("Order")
            }}>
            <View>
                    <Text style={{fontSize: 20}}>Tiếp theo</Text>
            </View>             
        </TouchableOpacity>
    
      </View>

  )
}

export default DanhSachMonAn