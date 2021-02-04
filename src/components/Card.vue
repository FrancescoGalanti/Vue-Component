<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <img :src="img" :alt="name" />
  </div>
</template>

<script>
export default {
  name: "Card",
  // props: ["name", "url"]
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: calc((100% / 4) - 10px);
  margin: 5px;
  background-color: lightblue;
  img {
    width: 60%;
  }
}
</style>
