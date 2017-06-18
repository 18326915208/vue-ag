import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)
var store=new Vuex.State({
	state:{
		count:0
	},
	mutations:{
		minCount(state){
			state.count--
		},
		decCount(state){
			state.count++
		}
	}
})
export default store;