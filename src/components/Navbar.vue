<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import icon from "@/assets/khu.png";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const route = useRoute();
const isHome = computed(() => route.path === "/");
const isAbout = computed(() => route.path === "/about");

console.log(cartStore.items.length);
const cartCount = computed(() => cartStore.items.length);

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
        <RouterLink to="/cart" class="nav-link cart-link">
          Cart
          <span v-if="cartCount > 0" class="cart-badge-count">{{
            cartCount
          }}</span>
          <span v-else class="cart-badge-dot"></span>
        </RouterLink>
        <button class="mobile-menu-btn" @click="toggleMenu">
          <i class="ri-menu-4-line"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- sidebar -->
  <div class="mobile-sidebar" :class="{ active: isMenuOpen }">
    <div class="sidebar-header">
      <button class="close-btn" @click="toggleMenu">
        <i class="ri-close-line"></i>
      </button>
    </div>
    <div class="sidebar-links">
      <RouterLink to="/" class="sidebar-link" @click="toggleMenu"
        >Store</RouterLink
      >
      <RouterLink to="/products" class="sidebar-link" @click="toggleMenu"
        >Product</RouterLink
      >
      <RouterLink to="/about" class="sidebar-link" @click="toggleMenu"
        >About Us</RouterLink
      >
      <RouterLink to="/cart" class="sidebar-link" @click="toggleMenu">
        Cart <span v-if="cartCount > 0">({{ cartCount }})</span>
      </RouterLink>
    </div>
  </div>

  <!-- Backdrop -->
  <div
    class="sidebar-backdrop"
    :class="{ active: isMenuOpen }"
    @click="toggleMenu"
  ></div>
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

/* Sidebar Styles */
.mobile-sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: #1a1a1a;
  z-index: 2000;
  transition: right 0.3s ease-in-out;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
}

.mobile-sidebar.active {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar-link:hover {
  color: var(--primary-color, #4caf50);
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.sidebar-backdrop.active {
  opacity: 1;
  visibility: visible;
}
</style>
