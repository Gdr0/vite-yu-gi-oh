<script>
export default {
  name: "AppHeader",
  props: ["message"],
};
</script>

<template>
  <header class="container-fluid">
    <h1 class="mt-2 mb-5">{{ message }}</h1>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 30px;
}
</style>
