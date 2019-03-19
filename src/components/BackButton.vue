<template>
    <b-button v-on:click="click">Back</b-button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    click() {
      this.$router.go(-1);
    },
  },
};
</script>
