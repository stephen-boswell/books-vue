<template>
    <b-container>
        <b-card>
            <b-row>
                <b-col md="4">
                    <b-card-img :src="url" />
                </b-col>
                <b-col md="8">
                    <h4 slot="header">{{book.title}}</h4>
                    <b-card-body>
                        <b-card-sub-title>{{book.author}}</b-card-sub-title>
                        <b-card-text>{{book.summary}}</b-card-text>
                        <b-card-text>
                          Published by <em>{{book.publisher}}</em> in <em>{{book.publication}}</em>
                        </b-card-text>
                        <back-button />
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'BookDetails',
  computed: {
    book() {
      return this.$store.getters.getBook(this.$route.params.id);
    },
    url() {
      return `/covers/${this.book.cover}`;
    },
  },
  mounted() {
    this.$store.dispatch('loadBookDetails', this.$route.params.id);
  },
  components: {
    BackButton,
  },
};
</script>
