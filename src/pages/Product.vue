<script setup>
import ProductCard from "../components/ProductCard.vue";
import { onMounted, ref } from "vue";
import { useProductsStore } from "@/stores/productsStore";

const store = useProductsStore();
const res = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    await store.loadProducts();
    res.value = store.products;
    console.log(res.value[0].imag);

    console.log("after res");
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="page-container container main-padding">
    <h1 class="section-title">Our Products</h1>
    <p class="section-subtitle">Explore our full catalog.</p>

    <div class="product-grid">
      <ProductCard
        v-for="product in res"
        :key="index"
        :title="product.title"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<style scoped>
.main-padding {
  padding-top: calc(var(--header-height) + 2rem);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-bottom: 4rem;
}
</style>
