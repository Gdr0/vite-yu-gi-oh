<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import CardsList from "./components/CardsList.vue";
import AppSearch from "./components/AppSearch.vue";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    AppSearch,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    getCards() {
      let myUrl = store.apiURL;
      if (store.FindArchetype !== "") {
        myUrl += `&archetype=${store.FindArchetype}`;
      }
      axios
        .get(myUrl)
        .then((res) => {
          store.CardList = res.data.data;
          const allArchetypes = store.CardList.map((card) => card.archetype);
          store.ArchetypeList = [
            ...new Set(allArchetypes.filter((archetype) => archetype)),
          ];
          console.log(store.ArchetypeList);
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
  <AppSearch @Search="getCards" />
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
