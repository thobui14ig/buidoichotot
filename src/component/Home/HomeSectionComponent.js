import { View, Text, TouchableOpacity, TextInput ,ScrollView, StatusBar, Image, Dimensions} from 'react-native'
import React from 'react'
import styles from './style'

const section_banner = require('../../asset/banner.png');

import ProductItem from './ProductItem';



const HomeSectionComponent = () => {
  return ( 
    <View style={styles.bodyContainer}>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Diem thoa - may tinh bang</Text>
            <Image source={section_banner} style={styles.sectionImage}/>           
        </View>

        {/* ------------------------LISSTITEM */} 
        <View>
            {/* TAB1 */}
            <View style={styles.khamphadanhmuc}>
                <Text style={styles.khamphadanhmucTitle}>Khám phá danh mục</Text>
        
                        <ScrollView horizontal={true} style={{ marginTop: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <ProductItem/>
                                <ProductItem/>   
                                <ProductItem/> 
                                <ProductItem/>                    

                                <ProductItem/>                              
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <ProductItem/>
                                <ProductItem/>   
                                <ProductItem/> 
                                <ProductItem/>                    

                                <ProductItem/>                              
                            </View>
                  

                        </ScrollView>
                         
               




        
                        
            </View>
    
                    
        </View>


    </View>  
  )
}

export default HomeSectionComponent