<script>
export default {
  name: "SingleCard",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="card text-center">
    <img class="img-fluid mb-3" :src="info.card_images[0].image_url" alt="" />
    <div class="properties d-flex flex-column justify-content-between">
      <h4 class="name">{{ info.name }}</h4>
      <p class="archetype">{{ info.archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: #d48f38;
  .properties {
    height: 120px;
    h4 {
      color: white;
      font-weight: bold;
      font-size: 15px;
    }
  }
}
</style>
