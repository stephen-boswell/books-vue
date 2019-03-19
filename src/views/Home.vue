<template>
  <book-list />
</template>

<script>
// @ is an alias to /src
import BookList from '../components/BookList.vue';

export default {
  name: 'home',
  components: {
    BookList,
  },
};
</script>
