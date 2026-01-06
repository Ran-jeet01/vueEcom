<script setup lang="ts">
import { ref } from "vue";
const blank = "  ";
const count = ref(1);
</script>

<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/product">About</router-link>
    <router-link to="/cart">Contact</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.nav {
  display: flex;
  gap: 300px;
}
</style>
