<template>
  <div>
    <ul class="products">
      <li
        class="product-item"
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductInfo :product="product">
          <button class="cta" @click="addToCart(product)">Buy</button>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductInfo from "./product-info/ProductInfo.vue";
import products from "./product-data.js";
import { useCartStore } from "@/stores/cart.js";
/* import { storeToRefs } from "pinia"; */

const cartStore = useCartStore();

function addToCart(product) {
  cartStore.cart.push({ ...product });
}
</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>
