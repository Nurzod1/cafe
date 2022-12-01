// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     deserts: [],
//     foods: [],
//   },
//   mutations: {
//     SET_DESERTS_TO_STATE: (state, deserts) => {
//       state.deserts = deserts;
//     },
//     SET_FOODS_TO_STATE: (state, foods) => {
//       state.foods = foods;
//     },
//   },
//   actions: {
//     GET_DESERTS_FROM_API({ commit }) {
//       return axios("  http://localhost:4000/deserts", {
//         method: "GET",
//       })
//         .then((deserts) => {
//           console.log(deserts);
//           commit("SET_DESERTS_TO_STATE", deserts.data);
//           return deserts;
//         })
//         .catch((error) => {
//           console.log(error);
//           return error;
//         });
//     },
//     GET_FOODS_FROM_API({ commit }) {
//       return axios(" http://localhost:3000/foods", {
//         method: "GET",
//       })
//         .then((foods) => {
//           commit("SET_FOODS_TO_STATE", foods.data);
//           return foods;
//         })
//         .catch((error) => {
//           return error;
//         });
//     },
//   },
//   getters: {
//     DESERTS(state) {
//       return state.deserts;
//     },
//   },
//   modules: {},
// });
