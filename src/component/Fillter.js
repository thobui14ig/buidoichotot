import { View, Text } from 'react-native'
import React from 'react'
import styles from './Home/style'
const Fillter = () => {
  return (
    <View style={styles.fillterContainer}>
        {[
            'Tất cả',
            'Điện thoại SmartPhone',
            'Máy tính bảng',
            'Điện thoại',
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }>
                {e}
              </Text>
            </View>
          ))}

    </View>
  )
}

export default Fillter