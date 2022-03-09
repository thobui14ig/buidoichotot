import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Task = (props) => {
  return (
    <View style={styles.body}>
  `    <Text style={styles.header}>Todo list</Text>
      <View>
        <ScrollView>
          {props.todoList && props.todoList.length > 0 &&
            props.todoList.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => props.deleteTask(item.id)}>
                  <View style={styles.item}>
                      <Text style={styles.itemStt}>{item.id}</Text>
                      <Text style={styles.itemText}>{item.name} </Text>
                  </View>            
                </TouchableOpacity>               
              )
            })
          
          }


    
                  
        </ScrollView>

              



      </View>`
  </View>
  )
}

export default Task