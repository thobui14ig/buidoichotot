import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e7feff"
    },
    body:{
      flex: 1,
      marginVertical: 50,
      marginHorizontal: 20,
      
    },
    header:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    item:{
      flexDirection: "row",
      backgroundColor: "#ffffff",
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      alignItems: 'center',
    }, 
    itemStt:{
      backgroundColor: "blue",
      padding: 5,
      borderRadius: 20
    },
    itemText:{
      fontSize: 20,
      paddingLeft: 10
    },
  
    input:{
      flex: 1
    }
  
  
  
  });

  export default styles 
  