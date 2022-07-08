<template>
    <HeadlineNav :heading="globalHeadline" />
    <card :allnews="global" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from '@/components/Card.vue';

export default {
    name: 'GlobalView',
    components: { HeadlineNav, Card },
    
    async created() {
        await this.getAllGlobalArticle()
    },
    computed: {
        ...mapGetters({
            globalArticle:"getGlobalArticle"
        }),
        globalHeadline() {
            let globe = this.$store.state.globalArticle;
            let newGlobe = globe.slice(0, 1);
            return newGlobe
        },
        global() {
            let globe = this.$store.state.globalArticle;
            let newGlobe = globe.slice(1, 10);
            return newGlobe
        },
    },
    methods: {
        ...mapActions({
            getAllGlobalArticle:"getAllGlobalArticle"
        })
     }
}
</script>

<style scoped>

</style>