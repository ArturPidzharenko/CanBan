import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	    state: {
        listOne: [],
        listTwo: [],
        listThree:[],
        listFour: [],
      },
        
      mutations: {
        ListOne(state) {
          if (localStorage.getItem('list0')) {
            try {
              state.listOne = JSON.parse(localStorage.getItem('list0'));
            } catch(e) {
                localStorage.removeItem('list0');
            }
          }
        },
        ListTwo(state) {
          if (localStorage.getItem('list1')) {
            try {
              state.listTwo = JSON.parse(localStorage.getItem('list1'));
            } catch(e) {
                localStorage.removeItem('list1');
            }
          }
        },
        ListThree(state) {
          if (localStorage.getItem('list2')) {
            try {
              state.listThree = JSON.parse(localStorage.getItem('list2'));
            } catch(e) {
                localStorage.removeItem('list2');
            }
          }
        },
        ListFour(state) {
          if (localStorage.getItem('list3')) {
            try {
              state.listFour = JSON.parse(localStorage.getItem('list3'));
            } catch(e) {
                localStorage.removeItem('list3');
            }
          }
        }
        
      },
      actions: {
        
      }
});