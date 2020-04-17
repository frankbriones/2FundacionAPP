/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import { Container, Header, Content, List, Title, ListItem, Thumbnail, Text, Left, Body, View, Right, Item, Input, Icon, Button} from 'native-base';

//import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/containers/home.js';
/*import Header from './src/sections/components/header.js';*/
import EventoList from './src/eventos/containers/evento_list.js';
import EventoDetalle from './src/screens/containers/evento_detalle.js';

import API from './utils/api.js';





import { store, persistor } from './store.js';
import { PersistGate } from 'redux-persist/integration/react';


import { createStore } from 'redux';
import _ from 'lodash';
import { Provider } from 'react-redux';

import reducer from './reducers/eventos.js';

import { connect } from 'react-redux'; 


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

type Props = {};
class App extends Component<Props>{
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fullData: [],
      loading: false,
      error: null,
      query: "",
      eventoList: []
      
    }
  }

 
  componentDidMount() {
    this.requestAPI()
  }

  requestAPI = _.debounce(() =>{
    this.setState({loading: true})
    const apiURL =  "http://192.168.1.8:8000/API/1.0/eventos/list/"

    fetch(apiURL).then((res) => res.json())
    .then((resJson) => {
      this.setState({
        loading: false,
        data: resJson,
        fullData: resJson,
        eventoList: resJson,
      })
    }).catch(error => {
      this.setState({error, loading:false})
    })
  }, 250)


  render (){
    


    return (
      <Provider 
         store = {store}
      >

        <PersistGate
                  loading = <Text>cargando....</Text>
                  persistor = {persistor}
                >
          <Container>
          
            <Header >

              <Body style={styles.contenedor}>
            <Left >
                  <Thumbnail style={styles.imagen} source={require('./assets/aurora.jpeg')}/>
                </Left>
                <Title style={styles.texto}>Lista de Eventos</Title>
              </Body>
             

            </Header>
            <EventoList lista={this.state.data} /> 
             
          </Container>
          </PersistGate>
        </Provider>
       
    );
  }
}


const styles = StyleSheet.create({
  contenedor:{    
      flex: 1,
      paddingHorizontal: 10,  
      flexDirection: 'row',
      //justifyContent: 'center',
      alignItems: 'center',
  },
  texto:{
    color: 'white',
  },
  imagen: {
    width: 50,
    height: 50,
    
  }
})



export default (App);