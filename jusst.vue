<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import type { ProductDataType } from "@/types/product";
import type { CartItem } from "@/types/cart";
import { onMounted, ref, computed } from "vue";
import { useProductsStore } from "@/stores/productsStore";
import { useCartStore } from "@/stores/cartStore";

const store = useProductsStore();
const cartStore = useCartStore();

// Local reactive data
const products = ref<ProductDataType[]>([]);
const loading = ref(true); // Your own local loading state

const handleAddToCart = (product: ProductDataType) => {
  const cartItem: CartItem = { ...product, quantity: 1 };
  cartStore.addToCart(cartItem);
};

onMounted(async () => {
  loading.value = true; // Start loading
  try {
    await store.loadProducts(); // This fetches and sets store.products
    products.value = store.products; // Copy to local ref
  } catch (error) {
    console.error("Failed to load products:", error);
  } finally {
    loading.value = false; // Always stop loading
  }
});
</script>

<template>
  <div class="page-container container main-padding">
    <h1 class="section-title">Our Products</h1>
    <p class="section-subtitle">Explore our full catalog.</p>

    <!-- Show loading state -->
    <div v-if="loading" class="loading text-center py-8">
      Loading products...
    </div>

    <!-- Show empty state if needed -->
    <div v-else-if="products.length === 0" class="text-center py-8">
      No products available.
    </div>

    <!-- Actual product grid -->
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(".jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-text {
  width: 100%;
}

.hero-subtitle {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  display: block;
  font-size: 1rem;
}

.hero-title {
  font-size: 5rem;
  line-height: 1;
  color: white;
  margin-bottom: 2rem;
  font-weight: 800;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.hero-desc {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: black;
  border: 2px solid white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
}

.btn-outline {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: white;
  background: transparent;
}

.btn-outline:hover {
  background: white;
  color: black;
  border-color: white;
}

/* Featured Section */

.section-padding {
  padding: 6rem 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
