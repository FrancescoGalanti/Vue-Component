<template>
  <div id="app">
   <!--  <img alt="Vue logo" src="./assets/logo.png" /> -->
   <!--  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
   <Title  msg="hello" />
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */
import Title from './components/Title';
export default {
  name: "App",
  components: {
    /* HelloWorld */
    Title
  },

  data(){
    return {
      pokemons: [],
    }
  },

  created(){
      this.axios
           .get(`${this.base_url}/pokemon`)

           .then(response => {
              console.log(response);
              this.pokemons = response.data.results;
              console.log(this.pokemons);
           })
           .catch(error => {
             console.log(error);
           });
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
