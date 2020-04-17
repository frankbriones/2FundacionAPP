function eventos(state= {}, action){
	switch (action.type) {
		case 'SET_EVENTOS_LIST': {
			return {...state, ...action.payload}

		}
		case 'SET_TALLERES_LIST': {
			return {...state, ...action.payload}
		}
		case 'SET_SELECTED_EVENTO': {
			return {...state, selectedEvento: action.payload.evento}
		}
		default:
			return state
	}
	return state
}

export default eventos;