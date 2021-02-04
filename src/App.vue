<template>
  <div id="app">
    <header>
      <h1 class="header_title">Io sono l'header</h1>
    </header>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Title msg="Hello" />
    <!-- <ul>
      <li v-for="(pokemon, index) in pokemons" :key="index">
        {{ pokemon.name }} 
        {{ pokemon.url }}
      </li>
    </ul> -->
    <FormCustom
      msg="Cerca un pokemon"
      @sendForm="searchPokemon"
      @sendTypeSelected="sendTypeSelected"
    />
    <FormCustom
      msg="Cerca un tipo di pokemon"
      @sendForm="searchType"
      @sendTypeSelected="sendTypeSelected"
    />
    <!-- <FormCustom @sendForm="searchPokemon" /> -->
    <Cards :cards="pokemons" v-if="pokemons.length > 0" />
    <h1 v-else>Non ci sono risultati</h1>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Title from "./components/Title.vue";
import Cards from "./views/Cards.vue";
import FormCustom from "./components/Form.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Title,
    Cards,
    FormCustom
  },
  data() {
    return {
      pokemons: [],
      count: 0
    };
  },
  mounted() {
    this.axios
      .get(`${this.base_url}/pokemon`)
      .then(result => {
        // const {
        //   data: { results }
        // } = result;
        // console.log(results);

        // this.pokemons = result.data.results;

        result.data.results.forEach(element => {
          const id = element.url.split("/");
          console.log(id[id.length - 2]);

          this.pokemons.push({
            ...element,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              id[id.length - 2]
            }.svg`
          });
        });

        console.log(this.pokemons);
        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

        this.count = result.data.count;
        console.log(this.pokemons.length);
      })
      .catch(() => {
        // console.error(err);
        this.pokemons = [];
      });
  },
  methods: {
    searchPokemon(text) {
      console.log(text);
      this.axios
        .get(`${this.base_url}/pokemon/${text}`)
        .then(result => {
          console.log(result);
          this.pokemons = [
            {
              name: result.data.name,
              height: result.data.height,
              weight: result.data.weight
            }
          ];

          // const {
          //   data: { results }
          // } = result;
          // console.log(results);

          // this.pokemons = result.data.results;
          // this.count = result.data.count;
        })
        .catch(() => {
          // console.error(err);
          this.pokemons = [];
        });
    },
    searchType(text) {
      console.log(text);
      this.axios
        .get(`${this.base_url}/type/${text}`)
        .then(result => {
          const results = result.data.pokemon;

          const pokemons = results.map(element => {
            return { name: element.pokemon.name, url: element.pokemon.url };
          });

          this.pokemons = pokemons;
        })
        .catch(err => {
          console.error(err);
        });
    },
    sendTypeSelected(text) {
      console.log(text);
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/_common.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
