import { proxy, subscribe } from "valtio";

const storedStateString = localStorage.getItem('todosState');
const initialState = storedStateString ? JSON.parse(storedStateString) : { selectedLanguage: 'en', trackingNumber: '', data: [], };
const state = proxy(initialState);
subscribe(state, () => {
  localStorage.setItem('todosState', JSON.stringify(state));
});
export default state;

