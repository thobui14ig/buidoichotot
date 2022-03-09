import { View, Text, TouchableOpacity,Button, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import DateTimePicker from '@react-native-community/datetimepicker';

const ChonNgayVaBuoi = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate)
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
    showMode('date');
    };

    const showTimepicker = () => {
    showMode('time');
    };
    
  return (
        <View style={{flex: 1}}>

            <View style={{paddingHorizontal: 20, flexDirection: "row", marginTop: 20}}>
                <Text style={styles.name}>Nguyễn Ngọc Linh</Text>
                <Text style={styles.age}>2 Tuổi</Text>
                <Text style={styles.phong}>p000</Text>
            </View>
            <View style={{marginTop: 20}}>
                <View>
                    <Button onPress={showDatepicker} title="Chọn ngày!" />
                </View>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
            </View>
            <View style={{flex: 1,}}>
                <View style={styles.buttonBuoi}>
                    <TouchableOpacity style={styles.buoi} onPress={() => {
                    navigation.navigate("DatMonAn")
                    }}>
                        <Text style={styles.fontBuoi}>Sáng</Text>
                    </TouchableOpacity>

                    <View style={styles.listMonAnDanDat}>
                        <ScrollView>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 2 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Nước cam</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 10000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>

                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "blue"}}>(Đã xong)</Text>

                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 1 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "blue"}}>(Đã xong)</Text>
                                
                            </View>                            
                        </ScrollView>

                    </View>
                                        
                </View>

                {/* //TRUA */}
                <View style={styles.buttonBuoi}>
                    <TouchableOpacity style={styles.buoi} onPress={() => {
                    navigation.navigate("DanhSachMonAn")
                    }}>
                        <Text style={styles.fontBuoi}>Trưa</Text>
                    </TouchableOpacity>

                    <View style={styles.listMonAnDanDat}>
                        <ScrollView>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 2 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "red"}}>(Chưa hoàn thành)</Text>

                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 1 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "blue"}}>(Đã xong)</Text>
                                
                            </View>                            
                        </ScrollView>

                    </View>
                                        
                </View>

                {/* //TỐI */}
                <View style={styles.buttonBuoi}>
                    <TouchableOpacity style={styles.buoi} onPress={() => {
                    navigation.navigate("DanhSachMonAn")
                    }}>
                        <Text style={styles.fontBuoi}>Tối</Text>
                    </TouchableOpacity>

                    <View style={styles.listMonAnDanDat}>
                        <ScrollView>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 2 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "red"}}>(Chưa hoàn thành)</Text>

                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold"}}>* Đơn 1 - Mã: s000001</Text>
                                <View style={{paddingLeft: 10}}>
                                    <Text>+ Cá mú chiên dòn</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{paddingLeft: 10, fontStyle: "italic"}}>Gía: 200000đ</Text>
                                        <Text style={{paddingRight: 50, fontStyle: "italic"}}>Số lượng: 1</Text>
                                    </View>

                                </View>
                                <Text style={{paddingLeft: 130, fontStyle: "italic", paddingVertical: 5, color: "blue"}}>(Đã xong)</Text>
                                
                            </View>                            
                        </ScrollView>

                    </View>
                                        
                </View>


             
            </View>

      </View>

  )
}

export default ChonNgayVaBuoi