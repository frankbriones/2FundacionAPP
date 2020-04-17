
const BASE_API = 'http://192.168.1.8:8000/API/1.0/';

class API {

	async getEvento(id) {
		const query = await fetch(`${BASE_API}eventos/list/`);
		const data = await query.json();
		// console.log(data);
		return data;
	}

	async getTaller(id) {
		const query = await fetch(`${BASE_API}talleres/list/`);
		const data = await query.json();
		console.log(data);
		return data;
	}


}

export default new API();