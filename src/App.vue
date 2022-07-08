<template>
  <nav>
    <figure class="img-one">
      <img src="@/assets/Group1.svg" alt="">
    </figure>
    <div class="links">
      <router-link to="/global">Global</router-link>
      <router-link to="/technology">Technology</router-link>
      <!-- <router-link to="/">Home</router-link> -->
      <router-link to="/business">Business</router-link>
      <router-link to="/health">Health</router-link>
    </div>
    <div class="menu">
      <p>Menu</p>
      <figure>
        <img src="@/assets/menulogo.svg" alt="">
      </figure>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
font-family: 'Public Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.img-one{
  width: 30px;
    height: 30px;
      background: #6B0B5B;
        border-radius: 17px;
        text-align: center;
}
nav {
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 38px;
  /* padding: 30px;
  background-color: white; */
}
nav a {
  /* font-weight: bold; */
  color: #2c3e50;
  /* padding: 30px; */
    text-decoration: none;
    margin-right: 3.5rem;
}
.menu {
  display: flex;
  align-items: center;
}

.menu figure {
  margin-left: 1rem;
}

p {
  color: #000;
}
nav a.router-link-exact-active {
  color:#6B0B5B;
}
</style>
