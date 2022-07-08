<template>
    <header v-for="head in heading" :key="head">
        <div class="heroImage-cover">
            <figure class="hero-img"><img :src="head.urlToImage" /></figure>
        </div>
        <div class="text">
            <h1>{{ head.title }}</h1>
            <p class="date">{{headDate (head.publishedAt) }}</p>
            <p class="author">Author:  {{ head.author }}</p>
        </div>
    </header>
</template>
<script>
export default {
    name: "HeadlineNav",
    props: ["heading"],
    computed: {
        headDate() {
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
.date {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
}

.author {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
}

.text {
    padding: 148px 0px 53px 237px;
    background: #6b0b5b;
    text-align: left;
    margin-top: 400px;
}

h1 {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #ffffff;
text-align: left;
    width: 33.5625rem;
}

p {
    font-family: "Public Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    /* color: #ffffff; */
    margin-top: 1rem;
        margin-bottom: 2rem;
        color: #000;
}

.hero-img {
    /* height: 400px; */
        width: 966px;
        position: absolute;
        top: 128px;
        left: 237px;
        margin: 0 auto;
        border-radius: 8px;
}

.hero-img img {
    /* margin-top:50px; */
width: 966px;
    /* height: 400px; */
    object-fit: fill;
    border-radius: 8px;
    /* position: absolute; */
        /* left: 237px;
        top: 128px; */
}
</style>