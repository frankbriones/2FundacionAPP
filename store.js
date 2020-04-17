import  { createStore } from 'redux';
import reducer from './reducers/eventos.js';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';  

// const store = createStore(reducer, {
// 	// eventos: 'Platzi'
// 	eventos: []
// })

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,

}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor}