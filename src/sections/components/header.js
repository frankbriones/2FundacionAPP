import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react-native';



function Header(props) {
	return(
		<View>
			<SafeAreaView>
				<View style={styles.container}>
					<Image 
						source={require('../../../assets/aurora.jpeg')}
						style={styles.logo}
					/>
					<View style={styles.right}>
						{props.children}
					<Text style={styles.textito}>Tacita App</Text>

					</View>
				</View>
			</SafeAreaView>
		</View>


	)
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 25,
		// default resizeMode: 'cover';
		resizeMode: 'contain',
		borderWidth: 2,
		borderRadius: 40,
		borderColor: 'white'
	},
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: '#021C1E',
		// para colocar en una sola lines de manera horizontal los componets
		flexDirection: 'row',

	},

	right: {
		//backgroundColor: '',
		// ocupar mas espacio al elemento
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	textito: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		fontFamily: 'monospace',
		//fontStyle: 'italic',
		textDecorationLine: 'underline'
	}


})

export default Header;