import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    home:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        marginTop: 10
    },

    content:{
        marginHorizontal: 10,
        paddingHorizontal: 10,
        
    },
    selectBox:{
        alignItems: "center",
        flexDirection: "row",
        
    },
    search:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input:{
        width: 120,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    },
    listNV:{
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
    },
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
    chonBuoi:{
        width: "30%",
        height: "20%",
        justifyContent:"center", alignItems: "center",
        marginTop: 30,
        borderWidth:1,
    },
    monAnitem:{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    addmon:{
        marginTop: 10,
        fontSize: 20,
        marginLeft: 50,
        backgroundColor: "#555555",
        width: 40,
        height: 40,
        textAlign: "center",
        borderRadius: 100
    },
    soluong:{
        marginTop: 10,
        fontSize: 20,
        marginLeft: 50,

        textAlign: "center",
    },
    chonMonBottom:{
        flex: 1,  justifyContent: "center", alignItems: "center"
    },

    //CHON MON
    buttonBuoi:{
        flex: 1, flexDirection: "row"
    },
    buoi:{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",  
         borderBottomWidth: 1 
    },
    fontBuoi:{
        fontSize: 20,
        
       
    },
    listMonAnDanDat:{
        flex: 3,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth: 1 
    }

    //đặt


  
  
  });

  export default styles 
  