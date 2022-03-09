import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        height: 40, 
        marginHorizontal: 30,
        marginVertical: 10     
    },
    itemText:{
        width: "20%"
    }, 
    input:{
        borderColor: 'gray',
        borderWidth: 1,
        width: "80%",
        padding: 10,
        // marginLeft: 10

    },
    action:{
        flex: 1,
        width: "100%",
        height: "20%",
        justifyContent:"center",
        alignItems:"center"
    },
    actionItem:{
        borderWidth: 1,
        width: "50%",
        height: 50,
        marginTop: 10,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",

    }


  
  
  });

  export default styles 
  