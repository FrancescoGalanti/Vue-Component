<template>
  <div class="card">
    {{name}} {{url}}
  </div>

</template>

<script>
export default {
  name: "Card",
  props: {
    name:{
      type: String,
      required: true
    }  
  },
  url:{
      type: String
  }
}
</script>

<style>

</style>