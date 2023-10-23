import { defineStore } from "pinia";
import { ref } from "vue";
import productData from "@/catalog/product-data";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const getProducts = function() {
    products.value = productData;
  }

  return {
    products,
    getProducts,
  };
});
