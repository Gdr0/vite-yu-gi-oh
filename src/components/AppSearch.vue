<script>
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="col-6 col-md-4 col-lg-2">
      <label for="select-archetype" class="visually-hidden">Select</label>
      <select
        class="form-select mb-3"
        name="select-archetype"
        v-model="store.FindArchetype"
      >
        <option class="selectArchetype">Select Archetype</option>
        <option
          @click.prevent="$emit('Search')"
          v-for="archetype in store.ArchetypeList"
        >
          {{ archetype }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
