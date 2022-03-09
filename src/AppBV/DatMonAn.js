import { View, Text , Button, TouchableOpacity, SafeAreaView, FlatList, StatusBar} from 'react-native'
import React, {useState, useEffect, useMemo , useCallback} from 'react'
import { StyleSheet } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const vt = [
    {
        "ma_vattu": 1,
        "ten_vattu": "nước cam",
        "gia": 20000
        },
        {
        "ma_vattu": 2,
        "ten_vattu": "cơm",
        "gia": 10000
        },
        {
        "ma_vattu": 3,
        "ten_vattu": "Chè",
        "gia": 5000
        },
        {
            "ma_vattu": 4,
            "ten_vattu": "chuoois",
            "gia": 5000
            }
];
const order = [
    {
        "ma_vattu": 1,
        "ten_vattu": "nước cam",
        "gia": 20000
        }
]

const DanhSachMonAn = React.memo(function Order({ data, handleThemMonAn  }) {
   console.log("render ocn 1")

    return (
        <View style={styles.item}>
        <View style={{flex: 4,}}>
            <View style={styles.tenmonan}>
                <Text style={{ fontSize: 20 }}>{data.ten_vattu} </Text>
            </View>
            <View style={styles.gia}>
                <Text style={{ fontStyle: "italic", fontSize: 16 }}>Gía: {data.gia}đ</Text>
            </View>            
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Octicons name="plus-circle" size={31} onPress={() => handleThemMonAn(data)} />
        </View>

        
        

    </View>
    );

});
const Order = React.memo(function Order({ data }) {
    console.log("render-con 2")
    return(
        <View style={styles.item}>
            <View style={{flex: 4,}}>
                <View style={styles.tenmonan}>
                    <Text style={{ fontSize: 20 }}>+ {data.ten_vattu} </Text>
                </View>
                <View style={styles.gia}>
                    <Text style={{ fontStyle: "italic", fontSize: 12, paddingRight: 20 }}>Gía: {data.gia}đ</Text>
                    <Text style={{ fontStyle: "italic", fontSize: 12 }}>Sl: 2</Text>
                </View>            
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <AntDesign name="delete" size={31}  />
            </View>            
        </View>

    
);
});


const DatMonAn = () => {
    const [data, setData] = useState([]);
    const [orderList, setOrderList] = useState([])
    console.log("cha lowns nhaats----------------------------")
    //lấy danh sách món ăn
    const getVatTu = async () => {
        // try {
        // const response = await fetch('http://192.168.0.106:4000/vattu');
        // const json = await response.json();
        // setData(json);
        // } catch (error) {
        // console.error(error);
        // }
        setData(vt)
    }
    //lấy danh sách món ăn đã đặt
    const getDanhSachMonAnDaDat = async () => {
        // try {
        // const response = await fetch('http://192.168.0.106:4000/vattu');
        // const json = await response.json();
        // setData(json);
        // } catch (error) {
        // console.error(error);
        // }
        setOrderList(order)
    }  
    useEffect(() => {
        getVatTu();
        // getDanhSachMonAnDaDat();
    }, []);
    useEffect(() => {
        // getVatTu();
        getDanhSachMonAnDaDat();
    }, []);
    //

    const handleThemMonAn = useCallback((value) => {
        setOrderList(prevState => {
            return [...prevState, value];
          });
      }, []);

      

    const renderDanhSachMonAn = ({ item }) => (
        <DanhSachMonAn  data={item} handleThemMonAn={handleThemMonAn}/>

    );
    const renderDanhSachOrder = ({ item }) => (
        <Order  data={item} />

    );
  console.log("render-cha",orderList)




  return (
    <View style={{flex: 1, paddingHorizontal: 7}}>
        <View style={{ flexDirection: "row", marginTop: 20}}>
            <Text style={styles.name}>Nguyễn Ngọc Linh</Text>
            <Text style={styles.age}>2 Tuổi</Text>
            <Text style={styles.phong}>p000</Text>
        </View>
        <View style={styles.loai}>
            <TouchableOpacity style={styles.loaiItem}>
                <Text style={{ fontSize: 20 }}>Thường</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loaiItem}>
                <Text style={{ fontSize: 20 }}>Vip</Text>
            </TouchableOpacity>

      </View>
      <View style={ styles.danhsachmonan }> 
            <View style={styles.title}>
                <Text style={styles.titleItem}>Danh sách món ăn</Text>
                <Text style={styles.titleItem}>Đã đặt</Text>

            </View>
            
      </View>
    <View style={styles.container}>
        <View style={styles.listMonAn}>
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={renderDanhSachMonAn}
                    keyExtractor={(item, index) => item.ma_vattu}
                />
            </SafeAreaView>
            
        </View>


        <View style={styles.order}>
            <SafeAreaView>
                <FlatList
                    data={orderList}
                    renderItem={renderDanhSachOrder}
                    keyExtractor={item => item.ma_vattu}
                />
                
            </SafeAreaView>
            <Text style={{ paddingVertical: 20, paddingLeft: 25, fontSize: 16, fontWeight: "bold" }}>Tổng tiền: 200.000đ</Text>
        </View>       
    </View>



    </View>
  )
}

export default DatMonAn



const styles = StyleSheet.create({
    name:{
        width: "50%",
        fontSize: 16,
    },
    age:{
        width: "20%",
        fontSize: 16,
    },
    phong:{
        width: "30%",
        fontSize: 16,
    },
    loai: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    loaiItem:{
        width: 170,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#61aaef"

    },
    title:{
        flexDirection: "row",
    },
    titleItem:{
        fontSize: 20,
        flex: 1,
        height: 40,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center"

    },
    container: {
        borderWidth: 1,
        // flex: 1,
        marginBottom: 50,
      },
      item: {
        flexDirection: "row",
        marginRight: 10,
        height: 80,
        // marginVertical: 8,
        paddingVertical: 5,
        borderBottomWidth: 0.3
    
      },
      tenmonan: {
        height: 50,
    
      },
      container:{
          flexDirection: "row"
      },
      listMonAn:{
          borderRightWidth: 1,
          flex: 1,
        
      },
      order:{
        flex: 1,
        paddingLeft: 5,
        height: 500,
        paddingBottom: 30
      },
      gia:{
          flexDirection: "row"
      }


})

