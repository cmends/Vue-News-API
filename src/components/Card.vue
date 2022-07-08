<template>
    <section>
        <!-- <p>Articles</p> -->
        <div class="card-container">
            <div class="main-card" v-for="news in allnews" :key="news.title">
                <figure class="img-art">
                    <img :src="news.urlToImage" alt="" />
                </figure>
                <div class="details">
                    <h2>{{ news.title }}</h2>
                    <p>{{articleDate (news.publishedAt) }}</p>
                    <p class="author">Author:  {{ news.author }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Card-i",
    props: ["allnews"],
    computed: {
        articleDate() {
            return (newDate) => {
                let date = new Date(newDate);
                const month = date.toLocaleString('default', { month: 'long' });
                const day = date.toLocaleString('default', { weekday: 'long' });
                return month + ' ' + date.getDate() + ', ' + date.getFullYear();
            }
        }
    }

};
</script>
<style scoped>

section {
    padding: 96px 237px;
}
.img-art{
    align-items: center;
}
section {
padding: 96px 237px;
}
.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
h2 {
margin-top: 16px;
    color: #000;
    width: 264px;
    font-weight: 700;
    font-size: 18px;
   margin-left: 40px;
}
p{
margin-top: 1rem;
    margin-bottom: 2rem;
    color: #000;
    margin-left: 40px;
}
.main-card figure {
    width: 264px;
    height: 168px;
    border-radius: 8px;
}
.main-card figure img {
    width: 264px;
    height: 168px;
    border-radius: 8px;
    object-fit: fill;
}

</style>