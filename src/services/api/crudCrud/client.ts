// API docs for more details https://crudcrud.com/
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_CRUDCRUD_API_KEY;
const BASE_URL = `https://crudcrud.com/api/${API_KEY}`;

const client = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
	},
});

export default client;
