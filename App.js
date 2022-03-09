/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Login from './src/component/Login/Login';
import Home from './src/component/Home/Home';
import Setting from './src/component/Setting/Setting'



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from './src/component/Notifications';
import DanhSachBenhNhan from './src/AppBV/DanhSachBenhNhan';
import ChonNgayVaBuoi from './src/AppBV/ChonNgayVaBuoi';
import Post from './src/component/Post/Post';
import DatMonAn from './src/AppBV/DatMonAn';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
            <Tab.Navigator 
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({  color }) => {
                      if (route.name === 'Home') {
                        return (
                          <MaterialIcons name="home" size={26} color={color} />
                        )
                      } else if (route.name === 'Notifications') {
                        return (
                          <MaterialIcons name="notifications-none" size={26} color={color} />
                        );
                      }else if (route.name === 'person') {
                        return (
                          <MaterialIcons name="person" size={26} color={color} />
                        );
                      }else if (route.name === 'AppBV') {
                        return (
                          <MaterialIcons name="local-hospital" size={20} style={{paddingHorizontal: 10}} />
                        );
                      }
                      // else if (route.name === 'Post') {
                      //   return (
                      //     <AntDesign name="pluscircleo" size={20} style={{paddingHorizontal: 10}} />
                      //   );
                      // }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                    headerShown: false 
                  })}
                >
                
                <Tab.Screen
                    name="Home" 
                    component={Home}
                    options={{
                      tabBarLabel: "Trang chủ",
                    }}
                  />
                {/* <Tab.Screen name="Login" component={Login} /> */}
                <Tab.Screen name="Notifications"
                    component={Notifications}
                    options={{
                      tabBarLabel: "Thông báo",
                    }}
                  />
                {/* <Tab.Screen name="Post"
                  component={Post}
                  options={{
                    tabBarLabel: "Đăng bài",
                  }}
                /> */}



                <Tab.Screen name="person" component={Setting} 
                      options={{
                      tabBarLabel: "Cá nhân",
                }}/>
                <Tab.Screen name="AppBV" component={DanhSachBenhNhan} 
                      options={{
                      tabBarLabel: "AppBV",
                }}/>
 


                
              </Tab.Navigator>

  );
}

const Stack = createNativeStackNavigator();
const App: () => Node = () => {


  return (
 

      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
            <Stack.Screen
            options={{headerShown: false}}
              name="MyTabs"
              component={MyTabs}
             
            />
              <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="ChonNgayVaBuoi"
              component={ChonNgayVaBuoi}
            />

          <Stack.Screen
              name="Post"
              component={Post}
            />

          <Stack.Screen
            name="DatMonAn"
            component={DatMonAn}
          />

          </Stack.Navigator>
      </NavigationContainer> 

  
  );
};



export default App;
