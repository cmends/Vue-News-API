<template>
  <HeadlineNav :heading="businessHeadline"/>
  <card :allnews="business"/>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HeadlineNav from "@/components/HeadlineNav.vue";
import Card from '@/components/Card.vue';
export default {
    name: "BusinessView",
    components: { HeadlineNav, Card },
    async created() {
        await this.getAllBusinessNews();
    },
    computed: {
        ...mapGetters({
            businessNews:"getBusinessNews",
        }),
        businessHeadline() {
            let bus = this.$store.state.businessNews;
            let newBus = bus.slice(0, 1);
            return newBus
        },
        business() {
            let bus = this.$store.state.businessNews;
            let newBus = bus.slice(1, 10);
            return newBus
            // return this.businessNews;
        },
    },
    methods: {
        ...mapActions({
            getAllBusinessNews:"getAllBusinessNews"
        })
    }
}
</script>

<style>

</style>