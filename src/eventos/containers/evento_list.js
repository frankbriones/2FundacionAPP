import React, { Component } from 'react';
import {
	FlatList,
	StyleSheet,
	ActivityIndicator,
	StatusBar,
	ScrollView,
	SafeAreaView,
	YellowBox,
} from 'react-native';
import { Container, Header, Content, List, Title, ListItem, Thumbnail, Text, Left, Body, View, Right, Item, Input, Icon, Button} from 'native-base';


import Layout from '../components/evento-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';
import Sugerencia from '../components/sugerencias.js';
import _ from 'lodash';
import { connect } from 'react-redux'; 

function mapStateToProps(state){
	// debugger
	return {
		list: state.eventos
	}
}

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])


type Props = {};
class EventoList extends Component<Props> {
	constructor(props){
		super(props)
		this.state = {
			loading: true,
			data: undefined,
			error: null,
		}

		
	}

	//viewEvento = (item)=>{
	// 	this.props.dispatch({
	// 		type : 'SET_SELECTED_EVENTO',
	// 		payload : {
	// 			evento: item,
	// 		}
	// 	})

	// }

	keyExtractor = item => item.id.toString()

	renderEmpty = () => <Empty text="No hay Elementos" />

	//itemSeparator = () => <Separator color="grey" />

	renderItem = ({item}) => {
		return (
		<Sugerencia 
		{...item}
		// onPress={()=>{this.viewEvento(item) }}
		 />
		
	)
	}

	 _renderItem = ({item, index}) => {
		
		    return(
		    

		     <ListItem thumbnail>
		            <Left>
		              <Thumbnail square source={{ uri: item.programa.imagen }} />
		            </Left>
		            <Body>
		              <Text>{item.nombre}</Text>
		              <Text note numberOfLines={1}>{item.detalle}</Text>
		            </Body>
		            <Right>
		            <Button transparent light>
		              <Text >{item.fecha_programa}</Text>
		            </Button>
		            </Right>
		          </ListItem>


		      )
  }


  state= {
  	text : ''
  }

  handleSubmit = () => {
  	console.log(this.state.text)
  }

  handleSearch = (text) => {
    
    const formattedQuery = text.toUpperCase()
   	console.log(formattedQuery)
    const data = _.filter(this.props.lista, name =>{
      if (name.nombre.includes(formattedQuery)) {
        console.log(name)
        return true
      }
      return
    } )
    this.setState({
    	data,
    	query: text,
    	// text
    })
	
  }




  componentDidMount() {
  	this.getData();
  }
  
  getData = _.debounce(() => {
  	
  	try{
  		const data = this.props.lista
  		this.setState({loading: false, data: data})
  		console.log(this.state)
  	}catch{
  		this.setState({loading:false, error:error})
  	}
  }, 1000)


render () {
	if(this.state.loading === true){
		return (
      
        <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: "#CEB0CE"}}>
        <ActivityIndicator color="navy" animating size="large"/>
        
        </View>
      
      )

	}

return (
	// importar el layout para los eventos list
	// <Layout
		
	// 	title="Proximos Eventos"
	// >
	<Container>
    
	
	<Header androidStatusBarColor="#2c3e50" searchBar rounded style={styles.items}>
        <StatusBar barStyle="light-content" />
     
          <Item style={styles.itemC}>
            
            <Input placeholder="Search" onChangeText={text => this.handleSearch(text)} onSubmitEditing={this.handleSubmit}/>
            
          </Item>

          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
	<List>
        
	<FlatList 
		keyExtractor= {(item, index) => index.toString()}

		 data = {this.state.data}
		//data = {this.props.list}		
		ListEmptyComponent={this.renderEmpty} 
		ItemSeparatorComponent = {this.itemSeparator}
		
		renderItem = {this.renderItem}
		
	/>
	  
      </List>
      </ScrollView>
 
      </Container>
	// </Layout>


)
}
}

const styles = StyleSheet.create({
	items: {
		backgroundColor: 'white',
		
	},
	itemC:{
		borderColor: '#eaeaea',
	},

})

export default connect(mapStateToProps)(EventoList);