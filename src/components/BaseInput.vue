<template>
  <input v-if="type === 'submit'"
    :type="type"
    :id="id"
    :name="name"
    :value="value" 
    @click="$emit('click')"
  >

  <input v-else
    :type="type"
    :placeholder="placeholder"
    :id="id"
    :name="name"
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>

<style>

</style>