<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import icon from "@/assets/khu.png";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const cartItems = computed(() => cartStore.items);
console.log(cartItems.value.length);

// use of root cuz i want the black nav only in the product AND CART SECTION . they have no bg img
const route = useRoute();

const isHome = computed(() => route.path === "/");
const isAbout = computed(() => route.path === "/about");

const cartCount = 1;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="navbar"
    :class="{ scrolled: isScrolled || (!isHome && !isAbout) }"
  >
    <div class="container navbar-content">
      <!-- Left Section -->
      <div class="nav-left">
        <RouterLink to="/" class="nav-link">Store</RouterLink>
        <RouterLink to="/products" class="nav-link">Product</RouterLink>
      </div>

      <!-- Center Section -->
      <div class="nav-center">
        <RouterLink to="/" class="logo">
          Ever
          <img :src="icon" class="icon" />
        </RouterLink>
      </div>

      <!-- Right Section -->
      <div class="nav-right">
        <RouterLink to="/about" class="nav-link">About Us</RouterLink>
        <!-- <RouterLink to="/cart" class="nav-link cart-link">
          Cart
          <span class="cart-badge-dot"></span>
        </RouterLink> -->
        <RouterLink to="/cart" class="nav-link cart-link">
          Cart
          <span v-if="cartvalue > 0" class="cart-badge-count"
            >{{ cartvalue }}
          </span>
          <span v-else class="cart-badge-dot"></span>
        </RouterLink>
        <button class="mobile-menu-btn" @click="toggleMenu">
          <i class="ri-menu-4-line"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.icon {
  height: 38px;
  width: auto;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  color: white;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.navbar-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
}

.nav-left {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
}

.nav-center {
  display: flex;
  justify-content: center;
}

.nav-right {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon {
  color: white;
}

.nav-link {
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
  position: relative;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 1;
}

.cart-link {
  position: relative;
}
.cart-badge-count {
  position: absolute;
  top: -8px;
  right: -12px;
  min-width: 18px;
  height: 18px;
  background-color: var(--error-color, red);
  border-radius: 99px;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}
.cart-badge-dot {
  position: absolute;
  top: -2px;
  right: -6px;
  width: 6px;
  height: 6px;
  background-color: var(--error-color, red);
  border-radius: 50%;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-content {
    display: flex;
    justify-content: space-between;
  }

  .nav-left,
  .nav-right > .nav-link {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>
