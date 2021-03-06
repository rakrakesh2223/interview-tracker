import React,{ useState,useEffect } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View,ScrollView, Pressable,FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const Main = () => {
  const MyStack = useNavigation();
  
  const[Candidates] = useState ([
    {ID:'1',Appid:'A1',Name:'Mayandi',Degree:'B.Sc(CS)',Contact:'9087654321'},
    {ID:'2',Appid:'A2',Name:'Muppidathi',Degree:'B.Sc(CS)',Contact:'9087698421'},
    {ID:'3',Appid:'A3',Name:'Rakesh',Degree:'B.Sc(CS)',Contact:'9087655421'},
    {ID:'4',Appid:'A4',Name:'Kuthalinagm',Degree:'B.Sc(CS)',Contact:'98777654321'},
    {ID:'5',Appid:'A5',Name:'Jp',Degree:'B.Sc(CS)',Contact:'9087687321'},
    {ID:'6',Appid:'A6',Name:'Seelan',Degree:'B.Sc(CS)',Contact:'9034654321'},
    {ID:'7',Appid:'A7',Name:'pathakar',Degree:'B.Sc(zoology)',Contact:'7767887866'}
  ]);

const CandidatesData = () => {
MyStack.navigate('CvvView');
};

const [cards,setCards] = useState([])
useEffect(()=>{
  axios.get("http://192.168.1.103:8080/candidate")
  .then(({data}) => {
     setCards(data)
  })
  .catch(err => {
     console.log(err)
  })
}, [])

return(
    <View style={styles.container}>
      
      {/*
      {cards.map((card, idx) => (
      <Card
      style={styles.card}
      key={idx}> 
      <View style={styles.list}>
        <Text style={styles.text}>{card.title}</Text>
        <Text style={styles.text}>{card.count}</Text>
        <Text>hello</Text>
      </View>
      </Card>))}
      */}

      <FlatList 
      data={Candidates}
      renderItem={({item})=>
    <Card
    onPress={CandidatesData.bind(this,item)} 
    style={styles.card}>
      <View style={styles.list}>
        <Text style={styles.text}>Application ID</Text>
        <Text style={styles.text}>{item.Appid}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>{item.Name}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Degree</Text>
        <Text style={styles.text}>{item.Degree}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Contact</Text>
        <Text style={styles.text}>{item.Contact}</Text>
      </View>
    </Card>
    }
    keyExtractor={item=>item.ID}
    />
    
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:"lightblue"
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginLeft :20
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontWeight:'bold',
    color:"white"
  },
  card:{
    margin:5,
    backgroundColor:"blue",
    borderRadius:15
  }
});

export default Main;