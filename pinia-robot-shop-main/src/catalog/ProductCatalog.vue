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
import { useProductStore } from "@/stores/product.js";
import { useCartStore } from "@/stores/cart.js";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { products } = storeToRefs(useProductStore());
useProductStore().getProducts();

function addToCart(product) {
  /* cartStore.$patch((state) => {
    state.cart.push({...product});
  }); */
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
