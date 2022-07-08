import { createStore } from 'vuex'
import axios from "axios";




const store = createStore({
  state: {
    globalArticle: [],
    globalTechnology: [],
    businessNews: [],
    healthNews: [],
    headlineNews:[],
  },
  getters: {
    getGlobalArticle: (state) => state.globalArticle,
    getGlobalTechnology: (state) => state.globalTechnology,
    getBusinessNews: (state) => state.businessNews,
    getHealthNews: (state) => state.healthNews,
    getHeadlineNews:(state)=>state.headlineNews,
  },
  mutations: {
    SET_GLOBALARTICLE(state, payload) {
      state.globalArticle = payload;
    },
    SET_GLOBALTECHNOLOGY(state, payload) {
      state.globalTechnology = payload;
    },
    SET_BUSINESSNEWS(state, payload) {
      state.businessNews = payload;
    },
    SET_HEALTHNEWS(state, payload) {
      state.healthNews = payload;
    },
    SET_HEADLINENEWS(state, payload) {
      state.headlineNews = payload;
    }
  },
  actions: {
    async getAllGlobalArticle({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=global&from=2022-07-08&apiKey=d0139b8170b345ca9712c27368312fa5"
        );
        commit("SET_GLOBALARTICLE", response.data.articles);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllGlobalTechnology({ commit }) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=technology&from=2022-07-08&apiKey=d0139b8170b345ca9712c27368312fa5");
        commit("SET_GLOBALTECHNOLOGY", response.data.articles);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllBusinessNews({ commit }) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=business&from=2022-07-08&apiKey=d0139b8170b345ca9712c27368312fa5");
        commit("SET_BUSINESSNEWS", response.data.articles);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllHealthNews({ commit }) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=health&from=2022-07-08&apiKey=d0139b8170b345ca9712c27368312fa5");
        commit("SET_HEALTHNEWS", response.data.articles);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllHeadlineNews({ commit }) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=us&from=2022-07-08&apiKey=d0139b8170b345ca9712c27368312fa5");
        commit("SET_HEADLINENEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error)
      }
    }
  },
});
export default store;
