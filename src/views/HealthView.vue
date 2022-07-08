<template>
    <HeadlineNav :heading="healthHeadline" />
    <card :allnews="health" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from '@/components/Card.vue';
export default {
    name: "HealthView",
    components: { HeadlineNav, Card },
    async created() {
        await this.getAllHealthNews();
    },
    computed: {
        ...mapGetters({
            healthNews: "getHealthNews",
        }),
        healthHeadline() {
            let health = this.$store.state.healthNews;
            let newHealth = health.slice(0, 1);
            return newHealth
        },
        health() {
            let health = this.$store.state.healthNews;
            let newHealth = health.slice(1, 10);
            return newHealth
            // return this.businessNews;
        },
    },
    methods: {
        ...mapActions({
            getAllHealthNews: "getAllHealthNews"
        })
    }
}
</script>

<style>
</style>