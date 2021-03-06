import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
//import Set from '../Screens/Dashboard/Dashboard';
import Home from '../Screens/Home/Home';
import CvvView from '../Screens/CvvView/CvvView';
import CvvUpload from '../Screens/CvvUpload/CvvUpload';
import Dashboard from '../Screens/Dashboard/Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return(
    <Drawer.Navigator initialRouteName='Candidates List'>
    <Drawer.Screen name="Candidates List" component={Main} />
    <Drawer.Screen name="Add Candidate" component={CvvUpload} />
    <Drawer.Screen name="canditates" component={Dashboard} /> 
    <Drawer.Screen name="mian info" component={Main} />
    <Drawer.Screen name="viewer" component={CvvView} />
    <Drawer.Screen name="dash" component={Dashboard} />
    <Drawer.Screen name="login info" component={Login} />
    <Drawer.Screen name="Home" component={Home} /> 
    </Drawer.Navigator>
    
  );
};

const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}
         options={{
          title: 'Mr.Rk Login Page',
          headerTitleStyle: {
            color: '#fff',
            textAlign :'center',
          },
          headerStyle: {
            backgroundColor: 'blue',
          
          },
        }}
        />
        <Stack.Screen name="Main" component={DrawerRoute}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Candidate Register" component={Home} />
        <Stack.Screen name="CvvView" component={CvvView} 
         options={{
          title: 'Cvv Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
        />
        <Stack.Screen name="CvvUpload" component={CvvUpload} 
         options={{
          title: 'CvvUpload',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        <Stack.Screen name="Dash Board" component={Dashboard} 
         options={{
          title: 'Dash Board',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />

        <Stack.Screen name="Home" component={Home}
        options={{
          titile:'Home',
          headerTitleStyle:{
            color:'#fff',
          },
          headerStyle:{
            backgroundColor:'rayalblue',
          }
        }}
        />

        
      </Stack.Navigator>
  );
};

export default MyStack;