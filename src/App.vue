<template>
  <div id="app">
   <!--  <img alt="Vue logo" src="./assets/logo.png" /> -->
   <!--  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Title  msg="hello" />
   <!-- <ul>
     <li v-for=" (pokemon, index) in pokemons" :key="index">
        {{pokemon.name}} <br/>
        {{pokemon.url}}
     </li>
   </ul> -->
    <Cards :cards="pokemons" />
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */
import Title from './components/Title';
import Cards from './views/Cards';

export default {
  name: "App",
  components: {
    /* HelloWorld */
    Title,
    Cards
  },

  data(){
    return {
      pokemons: [],
      count: 0,
    }
  },

  mounted(){
      this.axios
           .get(`${this.base_url}/pokemon`)

           .then(response => {
             /*  console.log(response);
              const {data: {results}} = response;
              console.log(results); */
              this.pokemons = response.data.results;
              this.count = response.data.count;
              console.log(this.pokemons);
               console.log(this.count);
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
