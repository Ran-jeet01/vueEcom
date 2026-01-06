<script setup>
import { fetchProducts } from "@/service/  products.service";
import { onMounted, ref } from "vue";
const loading = ref(true);
const error = ref(null);
onMounted(async () => {
  try {
    const response = await fetchProducts();
    console.log(response);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
});
</script>

<template>
  <p>you are in the Home page</p>
</template>

<style scoped></style>
