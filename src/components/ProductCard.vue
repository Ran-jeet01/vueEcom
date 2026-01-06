<script setup>
defineProps({
  title: String,
  price: String,
  image: String
});
</script>

<template>
  <div class="product-card">
    <div class="product-img-box">
      <div class="product-overlay">
        <button class="btn btn-primary addToCart">Add to Cart</button>
      </div>
      <img :src="image" :alt="title" />
    </div>
    <div class="product-info">
      <h3>{{ title }}</h3>
      <span class="price">{{ price }}</span>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.product-img-box {
  height: 300px;
  position: relative;
  overflow: hidden;
}

.product-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.product-card:hover .product-img-box img {
  transform: scale(1.05);
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.price {
  font-weight: 700;
  color: var(--accent-color);
  font-size: 1.1rem;
}
</style>
