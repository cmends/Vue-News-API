<template>
  <HeadlineNav :heading="techHeadline" />
  <card :allnews="tech" />
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from '@/components/Card.vue';

export default {
  name: 'TechnologyView',
  components: { HeadlineNav, Card },
    async created() {
        await this.getAllGlobalTechnology()
    },
    computed: {
        ...mapGetters({
            globalTechnology:"getGlobalTechnology"
        }),
      techHeadline() {
        let tech = this.$store.state.globalTechnology;
        let newTech = tech.slice(0, 1);
        return newTech
      },
      tech() {
        let tech = this.$store.state.globalTechnology;
        let newTech = tech.slice(1, 10);
        return newTech
      },
    },
    methods: {
    ...mapActions({
      getAllGlobalTechnology: "getAllGlobalTechnology"
    })
  }
}
</script>

<style scoped>

</style>
