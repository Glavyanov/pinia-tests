<template>
  <div>
    <h2 v-if="productsLoading" >Product data is loading....</h2>
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
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const { addToCart } = useCartStore();
const { products, productsLoading } = storeToRefs(useProductStore());
const router = useRouter();

router.beforeEach((to, from, next) => {
  let choice = confirm("Leave page?");
  choice ? next() : next(false);
});

onMounted(async () => {
  await useProductStore().getProducts();
});

</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>
