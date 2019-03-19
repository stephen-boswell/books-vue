<template>
    <b-list-group-item :to="url">
        <h4>{{book.title}}</h4>
        <p>{{book.author}}</p>
    </b-list-group-item>
</template>

<script>
export default {
  name: 'BookSummary',
  computed: {
    url() {
      return `/book-details/${this.book.id}`;
    },
  },
  props: {
    book: Object,
  },
};
</script>
