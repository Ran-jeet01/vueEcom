<!-- <script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import icon from "@/assets/khu.png";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <RouterLink to="/" class="logo">
        Ever
        <img :src="icon" class="icon" />
      </RouterLink>

      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
        <li>
          <RouterLink to="/product" class="nav-link">Products</RouterLink>
        </li>
        <li><RouterLink to="/about" class="nav-link">About Us</RouterLink></li>
      </ul>

      <div class="nav-actions">
        <button class="icon-btn search-btn">
          <i class="ri-search-line"></i>
        </button>
        <RouterLink to="/cart" class="icon-btn cart-btn">
          <i class="ri-shopping-cart-2-line"></i>
          <span class="cart-badge">0</span>
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  letter-spacing: -0.5px;
}

.logo-icon {
  color: var(--accent-color);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-weight: 500;
  color: var(--text-primary);
  transition: var(--transition-fast);
  position: relative;
}

.nav-link:hover,
.router-link-active {
  color: var(--accent-color);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-primary);
  transition: var(--transition-fast);
  position: relative;
}

.icon-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.cart-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: var(--error-color);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  background: transparent;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: var(--shadow-md);
    transform: translateY(-150%);
    transition: transform var(--transition-normal);
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style> -->
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import icon from "@/assets/khu.png";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

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
  <nav class="navbar" :class="{ scrolled: isScrolled }">
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
          <span class="cart-badge-dot"></span>
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
