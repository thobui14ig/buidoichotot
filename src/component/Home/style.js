import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: "row",
        backgroundColor: "#1e88e5",
        justifyContent: 'space-between',
        paddingVertical: 7
    },
    inputHeader:{
        backgroundColor: "#fff",
        flexDirection: "row",
        flex: 1,
        marginLeft: 10,
        alignItems: "center",
        borderRadius: 10
    },
    input:{
        
    },
    cartContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sectionContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
      },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#2f2f2f',
        marginVertical: 12,
    },
    sectionImage: {
        width: width - 24,
        height: 100,
        borderRadius: 4,
    },


    danhmucItem:{
        marginRight: 20
    },
    danhmucItemImage: {
        marginHorizontal: 10,
        height: 70,
        width: 70,
        borderRadius: 20
        
    },
    danhmucItemName: {
        textAlign: "center",
        fontSize: 14,
        color: '#484848',
        marginVertical: 4,
    },

    


      //kham pha danh muc
      khamphadanhmuc:{
        marginHorizontal: 10,
        marginTop: 10,
      },
      khamphadanhmucTitle:{
          fontSize: 16,
          fontWeight: "bold",
          paddingVertical: 10,
          color: "#000000"

      }



  
  
  });

  export default styles 
  