import React from 'react';
import {
	StyleSheet,
	Image,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
}from 'react-native';
import { Container, Header, Content, List, Title, ListItem, Thumbnail, Text, Left, Body, View, Right, Item, Input, Icon, Button} from 'native-base';


function Sugerencia(props){

const { detalle, programa, fecha_programa, nombre } = props;
return(
	<List>

		<ListItem thumbnail>
			<Left>
				<TouchableOpacity
				// onPress= {props.onPress}
				>
					<Thumbnail square source={{ uri: programa.imagen }} />
				</TouchableOpacity>
			</Left>
			<Body>
				<TouchableOpacity>
					<Text style={styles.titulo} >{nombre}</Text>
					<Text note numberOfLines={1}>{props.detalle}</Text>
				</TouchableOpacity>
			</Body>
			<Right>
				<Button transparent light>
					<Text >date:{props.fecha_programa}</Text>
				</Button>
			</Right>
  		</ListItem>
  </List>


			
	)
}


const styles = StyleSheet.create({
  
  titulo: {
		color: 'black',
		textTransform: 'lowercase',
	}
});


export default Sugerencia;