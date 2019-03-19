<template>
    <b-container>
        <b-list-group>
            <BookSummary v-for="book in bookList" :key="book.id" :book="book"/>
        </b-list-group>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BookSummary from './BookSummary.vue';

export default {
  name: 'Booklist',
  components: {
    BookSummary,
  },
  computed: mapGetters({
    bookList: 'books',
  }),
  mounted() {
    this.$store.dispatch('loadBookList');
  },
};
</script>
