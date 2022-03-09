import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Notifications = () => {
  const [data, setData] = useState([]);
  console.log("-------------------------")

  useEffect(() => {
    const url = `http://172.29.125.105:4000/benhnhan`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(error => {
       
      });
  }, []);
  const renderItem = ({ item }) => (
    <Item title={item.name} />

  );
  console.log("lần 1")
console.log(data)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default  Notifications;


