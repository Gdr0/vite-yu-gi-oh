<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import CardsList from "./components/CardsList.vue";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    getCards() {
      axios
        .get(store.apiURL)
        .then((res) => {
          store.CardList = res.data.data;
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log("Errori", err);
        });
    },
  },
  created() {
    this.getCards();
  },
};
</script>

<template>
  <AppHeader message="Yu-Gi-Ho Api" />
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
