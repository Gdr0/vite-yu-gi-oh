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
        })
        .catch((err) => {
          console.log("Errori", err);
        });
      axios;
      //   const allArchetypes = store.CardList.map((card) => card.archetype);
      //   store.ArchetypeList = [
      //     ...new Set(allArchetypes.filter((archetype) => archetype)),
      //   ];
      //   console.log(store.ArchetypeList);
    },
    getArchetypes() {
      axios
        .get(store.archetypeURL)
        .then((response) => {
          store.ArchetypeList = response.data;
          console.log(store.ArchetypeList);
        })
        .catch((err) => {
          console.log("Errori", err);
        });
    },
  },
  created() {
    this.getCards();
    this.getArchetypes();
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
