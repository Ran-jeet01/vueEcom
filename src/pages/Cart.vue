<script setup lang="ts">
import { RouterLink } from "vue-router";
import EmptyCart from "@/components/EmptyCart.vue";
const value: Boolean = true;
</script>

<template>
  <div v-if="value">
    <EmptyCart />
  </div>
</template>
