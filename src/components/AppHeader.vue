<script>
export default {
  name: "AppHeader",
  props: ["message"],
};
</script>

<template>
  <header class="container">
    <h1 class="text-center my-5">{{ message }}</h1>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
}
</style>
