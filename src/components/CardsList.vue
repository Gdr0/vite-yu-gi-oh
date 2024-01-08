<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store";
export default {
  name: "CardsList",
  components: { SingleCard },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="container-fluid border py-5">
    <div class="row px-4 py-3">
      <div v-for="card in store.CardList" class="col-6 col-md-4 col-lg-2 mb-5">
        <SingleCard :info="card" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.container-fluid {
  background-color: #d48f38;
  .row {
    width: 90%;
    margin: 0 auto;
    background-color: white;
  }
}
</style>
