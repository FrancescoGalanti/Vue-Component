<template>
  <div class="card">
    {{name}} {{url}}
  </div>

</template>

<script>
export default {
  name: "Card",
  props: ["name", "url"],
}
</script>

<style>

</style>