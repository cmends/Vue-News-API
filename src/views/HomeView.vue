<template>
  <input class="search-area" type="text" placeholder="Search for articles..." v-model="searchTerm" /> <button class="search-btn" @click="filteredInfo">Search</button>
  <HeadlineNav :heading="globalHeadline" />
  <card :allnews="filteredInfo" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from '@/components/Card.vue';

export default {
  name: 'GlobalView',
  components: { HeadlineNav, Card },
  data: () => ({
    // username: "",
    searchTerm: "",
  }),

  async created() {
    await this.getAllGlobalArticle()
  },
  computed: {
    ...mapGetters({
      globalArticle: "getGlobalArticle",
      headlineNews:"getHeadlineNews"
    }),
    filteredInfo() {
      if (this.searchTerm) {
        return this.globalArticle.filter((info) =>
          info.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.global;
      }
    },
    globalHeadline() {
      if (this.searchTerm) {
        const headArt = this.globalArticle.filter((info) =>
          info.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        return headArt.slice(0, 1)
      }else {
        let globe = this.$store.state.globalArticle;
        let newGlobe = globe.slice(0,1);
        return newGlobe 
      }
    },
    global() {
      let globe = this.$store.state.globalArticle;
      let newGlobe = globe.slice(1, 10);
      return newGlobe
    },
  },
  methods: {
    ...mapActions({
      getAllGlobalArticle: "getAllGlobalArticle"
    })
  }
}
</script>

<style scoped>
.search-btn{
  padding: 10px 20px;
  background-color: purple;
  border-radius: 4px;
  font-weight: bold;
  /* box-shadow: black; */
}
.search-area{
  padding: 10px 20px;
    margin-left: 10px;
    background-color:white;
    border-radius: 4px;
    box-shadow: black;
}
</style>